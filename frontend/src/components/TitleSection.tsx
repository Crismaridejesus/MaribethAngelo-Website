import SignUpForm from './SignUpForm.tsx';

function TitleSection() {
	return (
		<div className="title-section bg-[#27262e] w-full flex flex-col pb-[30px]">
			<h1 className="
			text-[rgb(199,233,61)]
			text-center 
			text-[4.6vw] 
			py-[20px] 
			px-[70px] 
			font-[600]
			md:text-[5vw]
			max-sm:text-[7vw]
			max-sm:px-[50px]
			">Live Workshop Reveals<br />
				How Anyone Can Run A Digital Business On The Go!</h1>


			<SignUpForm />




		</div>
	);
}

export default TitleSection;