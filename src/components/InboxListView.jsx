import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";

function InboxListView({ data, loadMail }) {
  // Function to handle the reload button click
  async function handleReloadClick() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log("Reload clicked");
  }

  // Check if emails is an array
  if (!Array.isArray(data)) {
    console.error("Emails data is not an array:", data);
    return null;
  }

  return (
    <div className="relative z-1 border-r-2 dark:bg-[#FAFAFA] bg-black border-[#33383F] dark:border-[#E0E0E0] h-full overflow-y-auto no-scrollbar">
      <div className="px-2 pt-2 flex justify-between">
        <div className="px-2">
          <div className="text-xl py-1 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s)
            <FaAngleDown className="ml-1 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="text-white dark:text-black font-bold">
            {data.length}/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </div>
        </div>
        <div
          className="p-2 mt-1 bg-[#25262B] dark:bg-white border dark:border-gray-200 border-gray-800 mr-3 rounded-xl h-min cursor-pointer"
          onClick={handleReloadClick}
        >
          <TbReload className="dark:text-black text-white" />
        </div>
      </div>

      <div className="my-2 px-4">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full bg-[#23272C] dark:bg-[#F4F6F8] rounded-md p-1 pl-8 border border-[#FFFFFF1A] dark:border-[#DFE3E8]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div className="text-white dark:text-black">
            <span className="bg-[#222426] dark:bg-[#ECECEC] text-[#5C7CFA] px-2 py-1 rounded-3xl">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center text-white dark:text-black">
            Newest <FaAngleDown className="ml-1 text-lg" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email) => (
          <EmailItem
            key={email.id}
            from={email.fromEmail}
            subjectLine={email.subject}
            id={email.threadId}
            onThreadSelect={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function EmailItem({ from, subjectLine, id, onThreadSelect }) {
  // Function to trim the subject line
  const truncateSubject = (subjectLine, maxWords) => {
    const wordArray = subjectLine.split(" ");
    if (wordArray.length > maxWords) {
      return wordArray.slice(0, maxWords).join(" ") + " ...";
    }
    return subjectLine;
  };

  // Function to handle email click
  const handleEmailClick = () => {
    onThreadSelect(id);
  };

  return (
    <div
      className="border-t-2 border-[#ffffff25] dark:border-[#8b8b8b64] mx-4 py-2 cursor-pointer"
      onClick={handleEmailClick}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="text-white dark:text-black text-base font-normal">
            {from}
          </div>
          <div className="text-[#FCFCFC66] text-xs dark:text-[#919EAB] font-thin ">
            Mar 7
          </div>
        </div>
        <div className="py-1 text-[#E1E0E0] dark:text-gray-600 font-normal">
          {truncateSubject(subjectLine, 5)}
        </div>
        <div className="flex">
          <div className="bg-[#222426] dark:bg-[#F0F0F0] pr-1 py-1 rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <GoDotFill className="mr-1 text-sm " />
            Interested
          </div>
          <div className="flex items-center bg-[#222426] dark:bg-[#F0F0F0] pr-1 py-1 rounded-2xl text-[#FFFFFF] dark:text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-sm" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxListView;
