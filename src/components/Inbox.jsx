import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import InboxListView from "./InboxListView";
import InboxContainer from "./InboxContainer";
import RightSection from "./RightSection";

const Inbox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  // Function to fetch data
  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);

  // useEffect to fetch data on mount and set interval
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2500);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Load selected thread
  const loadMail = (threadId) => {
    setSelectedThread(threadId);
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="dark:bg-[#ECEFF3] bg-black text-white dark:text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <div className="dark:bg-[#ECEFF3] bg-black text-white dark:text-[#5B5F66] pt-16 flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full lg:w-1/5 lg:min-w-[250px]">
        <InboxListView data={data} loadMail={loadMail} />
      </div>
      <div className="w-full lg:w-3/5 lg:min-w-[600px]">
        <InboxContainer selectedThread={selectedThread} />
      </div>
      <div className="hidden lg:block lg:w-1/5 lg:min-w-[250px]">
        <RightSection />
      </div>
    </div>
  );
};

export default Inbox;
