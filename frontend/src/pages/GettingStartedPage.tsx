
import './GettingStarted.css';
import videoFile from '../assets/Geoff and Jenn Luke.mp4';
import Thumbnail from '../assets/images/Thumbnail.jpg';

function GettingStartedPage() {
	return (
		<div className='main-container'>
			<header>
				<h1>Thank <span className='you'>You</span></h1>
				<p className='p1'>for registering!</p>

				<p className='p2'>You have taken a very important step in building your very own online business!</p>
				<div className="email-info-container">
					<p>Check your email/junk mail to see if you got an email from my email address: <span className='email'>info@geoffjen.com</span></p>
				</div>
				<div className='other-info-container'>
					<p>I've Emailed a Link to Our <span>Live Webinar</span></p>
				</div>
			</header>
			<section className='webinar-section'>
				<h1 className='webinar-heading'>
					Here is a Replay You Can Watch NOW:
				</h1>
				<div className='replay-video-wrapper'>
					<video controls poster={Thumbnail}>
						<source src={videoFile} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<button className='join-button'>
					Join Our Success Team Now
				</button>
			</section>

			<footer className='footer-section'>
				<div className='footer-wrapper'>
					<div className='facebook-icon'>
						<i className="fab fa-square-facebook" style={{ color: "#3297e5ff", fontSize: "5rem" }}></i>
					</div>
					<p className='footer-text'>
						Click here to follow me on Facebook so that we can message each other if you have any questions.
					</p>
					<a href='https://www.facebook.com/geoff.luke.35' target='_blank'>
						<button className='add-button'>Add Me On Facebook</button>
					</a>
				</div>
			</footer>

		</div>
	);
}

export default GettingStartedPage;