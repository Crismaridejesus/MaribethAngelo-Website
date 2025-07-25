
//import './GettingStarted.css';
function GettingStartedPage() {
	return (
		<div className='main-container flex flex-col relative items-center'>
			<header className="bg-transparent h-fit flex flex-col w-[45%] items-center mb-[15px]">
				<h1 className="text-[5.5vw] mt-[30px] mb-[10px]">Thank <span className="text-[rgb(189,202,45)]">You</span></h1>
				<p className="font-[300] text-center">for registering!</p>

				<p className="mb-[50px] font-[300]">You have taken a very important step in building your very own online business!</p>
				<div className="email-info-container bg-[rgb(189,202,45)] text-center p-[12px]">
					<p>Check your email/junk mail to see if you got an email from my email address: <span className='email font-bold'>info@geoffjen.com</span></p>
				</div>
				<div className='other-info-container bg-[rgb(189,202,45)] py-[30px] px-[10px] my-[30px] w-full'>
					<p className="text-center">I've Emailed a Link to Our <span className="font-bold">Live Webinar</span></p>
				</div>
			</header>
			<section className="webinar-section bg-white w-full flex items-center flex-col">
				<h1 className="my-[30px]">
					Here is a Replay You Can Watch NOW:
				</h1>
				<div className='replay-video-wrapper w-[70%] h-[80vh] mb-[50px] bg-red-300 '>
					  <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/qroPTAmlyys"
      title="Geoff and Jenn Luke"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
			className=" bg-black"
    ></iframe> 
				</div>
				<button className='join-button 
				mb-[50px]
				p-[20px]
				text-[1.5rem]
				border-0
				shadow-[6px_6px_15px]
				shadow-[rgb(52,52,52)]
				cursor-pointer
				text-white
				bg-[rgb(189,202,45)]
				active:bg-[rgb(129,138,32)]
				'>
					Join Our Success Team Now
				</button>
			</section>

			<footer className='footer-section 
			bg-[#ede9e9]
			w-full
			flex
			justify-center
			py-[30px]
			px-[10px]
			'>
				<div className='footer-wrapper
				w-[70%]
				flex
				items-center
				justify-evenly
				gap-[20px]

				'>
					<div className='facebook-icon'>
						<i className="fab fa-square-facebook" style={{ color: "#3297e5ff", fontSize: "5rem" }}></i>
					</div>
					<p className='footer-text
					text-[1.2rem]
					flex-2
					'>
						Click here to follow me on Facebook so that we can message each other if you have any questions.
					</p>
					<a href='https://www.facebook.com/geoff.luke.35' target='_blank'>
						<button className='add-button
						text-[1.5rem]
						flex-1
						py-[15px]
						px-[30px]
						bg-[rgb(189,202,45)]
						shadow-[6px_6px_10px]
						shadow-[rgb(82, 82, 82)]
						border-0
						text-white
						cursor-pointer
						active:bg-[rgb(129,138,32)]
						'>Add Me On Facebook</button>
					</a>
				</div>
			</footer>

		</div>
	);
}

export default GettingStartedPage;