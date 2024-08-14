import { useEffect, useState, useRef } from "react";
import axios from "axios";
import MailReplyModal from "./MailReplyModal";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import ConfirmationModal from "./ConfirmationModal"; 

const InboxContainer = ({ selectedThread }) => {
    const [isReplyOpen, setIsReplyOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [mails, setMails] = useState([]);
    const replyModalRef = useRef(null);

    const toggleReply = () => {
        setIsReplyOpen(!isReplyOpen);
    };

    const deleteMail = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(
                `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            setIsDeleteOpen(false);
        } catch (error) {
            console.error("Error deleting mail:", error);
        }
    };

    useEffect(() => {
        const handleKeyActions = (event) => {
            if (!replyModalRef.current || !replyModalRef.current.contains(event.target)) {
                if (event.key === "d" || event.key === "D") {
                    setIsDeleteOpen(!isDeleteOpen);
                }

                if (event.key === "r" || event.key === "R") {
                    setIsReplyOpen(!isReplyOpen);
                }
            }
        };

        document.addEventListener("keydown", handleKeyActions);

        return () => {
            document.removeEventListener("keydown", handleKeyActions);
        };
    }, [isDeleteOpen, isReplyOpen]);

    useEffect(() => {
        const fetchMails = async () => {
            if (selectedThread) {
                try {
                    const token = localStorage.getItem("token");
                    const res = await axios.get(
                        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
                        {
                            headers: {
                                Authorization: token,
                            },
                        }
                    );
                    setMails(res.data.data);
                } catch (error) {
                    console.error("Error fetching mail:", error);
                }
            } else {
                setMails([
                    {
                        id: 0,
                        fromName: "",
                        fromEmail: "jeanne@icloud.com",
                        toName: "",
                        toEmail: "lennon.j@mail.com",
                        subject: "New Product Launch",
                        body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
                        sentAt: "2022-01-01T00:00:00.000Z",
                    },
                ]);
            }
        };
        fetchMails();
    }, [selectedThread, isDeleteOpen]);

    return (
        <div className="relative overflow-y-scroll no-scrollbar h-full">
            <div className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-2">
                <div>
                    <div className="text-white dark:text-black text-lg">Orlando</div>
                    <div className="text-[#FFFFFF66] dark:text-[#343A40B2] text-sm">
                        orladom@gmail.com
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex bg-[#1F1F1F] dark:bg-white border border-[#343A40] cursor-pointer items-center dark:text-black text-white rounded-md py-2 px-3 text-sm">
                        <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
                        <SlArrowDown className="ml-2" />
                    </div>
                    <div className="bg-[#1F1F1F] flex items-center dark:text-black text-white border cursor-pointer dark:bg-white border-[#343A40] rounded-md py-2 px-3 text-sm">
                        Move <SlArrowDown className="ml-2" />
                    </div>
                    <div className="bg-[#1F1F1F] border dark:bg-white dark:text-black text-white cursor-pointer border-[#343A40] rounded-md py-2 px-3 text-sm">
                        ...
                    </div>
                </div>
            </div>

            <div className="py-6 mx-6 relative flex justify-center items-center">
                <div className="h-[2px] w-full bg-[#33383F] dark:bg-[#E0E0E0]"></div>

                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-[#171819] dark:bg-[#E0E0E0] px-4 py-1 text-sm dark:text-black text-white">
                        Today
                    </div>
                </div>
            </div>

            <div>
                {mails.map((mail) => (
                    <MailItem key={mail.id} {...mail} />
                ))}
            </div>

            <div className="py-6 mx-6 relative flex justify-center items-center">
                <div className="h-[2px] w-full dark:bg-[#E0E0E0] bg-[#33383F]"></div>{" "}
                {/* Line */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-[#171819] dark:bg-[#E0E0E0] dark:text-black text-white px-4 py-1 text-sm flex items-center space-x-1">
                        <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
                        <span className="text-blue-500"> 4 </span>
                        <span>replies</span>
                    </div>
                </div>
            </div>
            <div className="mx-8" ref={replyModalRef}>
                {isReplyOpen && (
                    <MailReplyModal
                        threadId={selectedThread}
                        onClose={() => setIsReplyOpen(false)}
                    />
                )}
            </div>
            <div
                className="cursor-pointer flex items-center absolute bottom-4 left-4 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-6 py-2 "
                onClick={toggleReply}
            >
                <FaReply className="mr-2 text-xl" /> Reply
            </div>
            {isDeleteOpen && (
                <ConfirmationModal
                    title="Are you sure?"
                    message="Are you sure you want to delete this mail?"
                    onCancel={() => setIsDeleteOpen(false)}
                    onConfirm={deleteMail}
                    confirmText="Delete"
                    cancelText="Cancel"
                />
            )}
        </div>
    );
};

// Renamed Mail component to MailItem
const MailItem = ({ fromEmail, toEmail, subject, body, fromName }) => {
    return (
        <div className="bg-[#141517] dark:bg-white border border-[#343A40] mx-6 rounded-md my-2">
            <div className="p-3">
                <div className="flex justify-between py-3">
                    <div className="space-y-2">
                        <div className="font-bold text-white dark:text-black">
                            {subject}
                        </div>
                        <div className="text-[#AEAEAE] dark:text-[#637381] text-sm">
                            from: {fromEmail}
                        </div>
                        <div className="text-[#AEAEAE] dark:text-[#637381] text-sm">
                            to: {toEmail}
                        </div>
                    </div>
                    <div className="text-sm text-[#7F7F7F] dark:text-[#637381]">
                        20 June 2022 : 9:16AM
                    </div>
                </div>
                <div className="py-4 text-[#E1E0E0] dark:text-[#172840] ">Hi {fromName || '{FIRST_NAME}'}</div>
                <div
                    className="py-4 text-[#E1E0E0] dark:text-[#172B4D] w-4/5"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            </div>
        </div>
    );
};

export default InboxContainer;
