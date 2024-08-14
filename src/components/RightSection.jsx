import { IoIosSend } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { IoMailOpen } from "react-icons/io5";

function RightSection() {
    return (
        <div className="border-l-2 dark:bg-white bg-black border-[#33383F] dark:border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar px-2">
            <div className="mt-5 bg-[#23272C] dark:bg-[#ECEFF3] dark:text-black text-white rounded-lg py-2 pl-4">
                Lead Details
            </div>
            <div className="px-6 my-10 space-y-6 text-white dark:text-[#637381]">
                <div className="flex justify-between text-sm">
                    <div>Name</div>
                    <div className="text-[#B9B9B9]">Orlando</div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Contact No</div>
                    <div className="text-[#B9B9B9]">+54-9062827869</div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Email ID</div>
                    <div className="text-[#B9B9B9]">orlando@gmail.com</div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Linkedin</div>
                    <div className="text-[#B9B9B9]">linkedin.com/in/timvadde/</div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Company Name</div>
                    <div className="text-[#B9B9B9]">Reachinbox</div>
                </div>
            </div>

            <div className="mt-8 bg-[#23272C] dark:bg-[#ECEFF3] dark:text-black text-white rounded-lg py-2 pl-4">
                Activities
            </div>

            <div className="my-8 px-4">
                <div className="px-2 dark:text-black text-white">Campaign Name</div>
                <div className="my-4 text-sm px-2 dark:text-black text-white">
                    3 Steps | 5 Days in Sequence
                </div>
                <div className="px-2">
                    <div className="flex items-center my-4">
                        <GoMail className="w-9 h-9 bg-[#23272C] dark:bg-[#EEF1F4] p-2 rounded-full" />
                        <div className="ml-4 space-y-2 dark:text-black text-white">
                            <div>Step 1: Email</div>
                            <div className="text-[#B9B9B9] text-sm flex items-center">
                                <IoIosSend className="mr-2" /> Sent 3rd, Feb
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <GoMail className="w-9 h-9 bg-[#23272C] dark:bg-[#EEF1F4] p-2 rounded-full" />
                        <div className="ml-4 space-y-2 dark:text-black text-white">
                            <div>Step 2: Email</div>
                            <div className="text-[#B9B9B9] text-sm flex items-center">
                                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <GoMail className="w-9 h-9 bg-[#23272C] dark:bg-[#EEF1F4] p-2 rounded-full" />
                        <div className="ml-4 space-y-2 dark:text-black text-white">
                            <div>Step 3: Email</div>
                            <div className="text-[#B9B9B9] text-sm flex items-center">
                                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
