// import axios from "axios";
import NoMail from "../assets/NoMail.svg";
// import { useEffect } from "react";

const SubView = () => {
	// useEffect(() => {
	// 	async function call() {
	// 		const token = localStorage.getItem("token");
	// 		try {
	// 			await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
	// 				headers: {
	// 					Authorization: token,
	// 				},
	// 			});
	// 		} catch (error) {
	// 			console.error("Error fetching data:", error);
	// 		}
	// 	}
	// 	call();
	// }, []);

	return (
		<div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
			<div>
				<img src={NoMail} alt="NoMail" />
			</div>
			<div className="text-3xl my-8">
				It&apos;s the beginning of a legendary sales pipeline
			</div>
			<div className="dark:text-[#9E9E9E] text-center text-xl text-[#5B5F66]">
				When you have inbound E-mails<br/> you&apos;ll see them here
			</div>
		</div>
	);
}

export default SubView;