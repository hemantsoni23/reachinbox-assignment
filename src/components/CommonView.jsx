import NoMail from "../assets/NoMail.svg";

const CommonView = () => {
	return (
		<div className="text-white dark:text-[#5B5F66] dark:bg-[#ECEFF3] bg-black flex justify-center items-center h-screen flex-col">
			<div>
				<img src={NoMail} alt="NoMail" />
			</div>
			<div className="text-3xl my-8">
				It&apos;s the beginning of a legendary sales pipeline
			</div>
			<div className="text-[#9E9E9E] text-center text-xl dark:text-[#5B5F66]">
				When you have inbound E-mails<br/> you&apos;ll see them here.
			</div>
		</div>
	);
};

export default CommonView;
