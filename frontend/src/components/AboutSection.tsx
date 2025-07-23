

function AboutSection() {
	return (
		<div className="about-container 
		w-full 
		h-[400px] 
		bg-transparent 
		flex 
		items-center 
		justify-center
		">
			<div className="about-section 
			w-[70%] 
			h-fit 
			bg-transparent 
			grid 
			grid-cols-[150px_150px_1fr]
			max-lg:w-[90%]
			max-md:grid-cols-[1fr_120px_1fr]
			max-md:grid-rows-[60px_60px]
			
			">
				<div className="profile 
				bg-white 
				z-10 
				aspect-1/1 
				rounded-full 
				overflow-hidden 
				row-start-1 
				col-start-1 
				row-end-2 
				col-end-3
				max-md:row-start-1 
				max-md:col-start-2 
				max-md:row-end-2
				max-md:col-end-3
				"
				
				>
					<img className="size-full" src="/fullsizeoutput_554.jpeg" alt="Photos of Members" />
				</div>
				<div className="content-container 
				bg-[#848f0e] 
				py-[20px] 
				pr-[20px] 
				pl-[180px] 
				row-start-1 
				col-start-2 
				row-end-2 
				col-end-4
				max-md:row-start-2
				max-md:col-start-1
				max-md:row-end-4
				max-md:col-end-4
				max-md:pt-[70px]
				max-md:px-[20px]
				
				">
					<p className="content
					text-[1.5vw] 
					leading-[2rem] 
					text-center
					max-lg:text-[2vw]
					max-lg:leading-[1.5rem]
					max-md:text-[3vw]
					max-sm:text-[1rem]
					

					"
					
					>
						I am looking for hustlers who are sick of making other people rich and want to work for themselves - either part time or full time.
						Our program provides the systems, training, and support that you need to start your own successful, digital business.
						This is what you&#39;ve been looking for!
					</p>
					<p className="author 
					text-[1.8vw] 
					text-end mt-[40px] 
					max-lg:text-[3vw]
					
					"> Geoff and Jenn Luke</p>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;