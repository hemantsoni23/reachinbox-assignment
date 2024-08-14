import axios from "axios";
import { useState } from "react";
import { FaCaretDown, FaRegSmile } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineImage } from "react-icons/md";
import { LuUserMinus } from "react-icons/lu";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp, IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const formFields = [
  { label: "To :", name: "to", placeholder: "Recipient's Email" },
  { label: "From :", name: "from", placeholder: "Your Email" },
  { label: "Subject :", name: "subject", placeholder: "Subject" },
];

const actions = [
  { icon: <FaBoltLightning />, label: "Variables" },
  { icon: <IoEyeOutline />, label: "Preview Email" },
  { icon: <CiMenuKebab />, label: "" },
  { icon: <IoLinkSharp />, label: "" },
  { icon: <MdOutlineImage />, label: "" },
  { icon: <FaRegSmile />, label: "" },
  { icon: <LuUserMinus />, label: "" },
  { icon: <IoMdCode />, label: "" },
];

function MailReplyModal({ threadId, onClose }) {
  const [replyForm, setReplyForm] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const sendReply = async () => {
    const authToken = localStorage.getItem("token");
    console.log(
      replyForm.to,
      replyForm.from,
      replyForm.subject,
      replyForm.body
    );
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyForm.to,
          from: replyForm.from,
          subject: replyForm.subject,
          body: replyForm.body,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log("Reply sent successfully");
      onClose();
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-[#1E1E1E] dark:bg-white w-full max-w-3xl h-[80%] rounded-lg border dark:border-[#E0E0E0] border-[#41464B] shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 dark:bg-[#F8F9FA] bg-[#23272C] rounded-t-lg border-b dark:border-[#E0E0E0] border-[#41464B]">
          <div className="dark:text-[#5B5F66] text-white text-lg font-semibold">
            Reply
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <RxCross2 className="text-xl text-white dark:text-black" />
          </div>
        </div>
        <div className="px-6 py-4 space-y-4 border-b dark:border-[#E0E0E0] border-[#41464B] overflow-y-auto">
          {formFields.map(({ label, name, placeholder }) => (
            <div key={name} className="flex items-center text-sm">
              <div className="w-1/6 text-[#5B5F66] dark:text-[#464646]">
                {label}
              </div>
              <input
                className="flex-1 bg-transparent ml-4 text-white dark:text-black border dark:border-[#E0E0E0] border-[#41464B] rounded px-2 py-1"
                placeholder={placeholder}
                name={name}
                value={replyForm[name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <div className="flex flex-col h-48">
            <textarea
              className="bg-transparent dark:text-white text-black w-full h-full p-2 border dark:border-[#E0E0E0] border-[#41464B] rounded"
              placeholder="Hi Jeanne,"
              name="body"
              value={replyForm.body}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t dark:border-[#E0E0E0] border-[#41464B]">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-6 py-2 rounded-md flex items-center cursor-pointer text-white"
            onClick={sendReply}
          >
            Send <FaCaretDown className="ml-2" />
          </div>
          <div className="flex space-x-4 items-center">
            {actions.map(({ icon, label }, index) => (
              <div
                key={index}
                className="flex space-x-2 cursor-pointer items-center text-[#ADADAD] dark:text-[#5B5F66]"
              >
                {icon}
                {label && <span>{label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailReplyModal;
