import clientImage from "../assets/images/clientImage.png";

function MemberSection() {
	return (
		<>
			<div className="sub-heading-section
			w-full
			h-[100px]
			bg-[rgb(43,40,40)]
			flex
			items-center
			justify-center
			py-[60px]
			">
				<h2 className="
				text-white
					text-[2.5vw]
					max-lg:text-[4vw]
				">A Proven System Used By Thousands of People</h2>
			</div>
			<div className="client-feedback
			w-full
			h-[120vh]
			bg-[#dddddd]
			flex
			items-center
			justify-center
			bg-[url('/fotobg5.jpg')]
			bg-no-repeat
			bg-contain
			bg-bottom
			relative
			before:content-['']
			before:w-full
			before:h-[100px]
			before:absolute
			before:block
			before:bg-[url('/fotobg3.jpg')]
			before:bg-no-repeat
			before:bg-cover
			before:left-0
			before:top-0
			before:right-0
			max-md:h-fit
			">
				<div className="client-feedback-wrapper
				w-[80%]
				h-fit
				flex
				items-center
				justify-center
				p-[50px]
				overflow-hidden
				z-[10]
				mt-[60px]
				">
					<img className="
					size-full
					object-contain
					" src={clientImage} />
				</div>
			</div>

		</>

	);
}

export default MemberSection; 