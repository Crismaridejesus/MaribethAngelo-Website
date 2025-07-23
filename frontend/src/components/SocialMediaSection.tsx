import googleIcon from "../assets/images/google.png";
import facebookIcon from "../assets/images/facebook.png";
import youtubeIcon from "../assets/images/youtube.png";
import instagramIcon from "../assets/images/Instagram.png";
import linkedInIcon from "../assets/images/LinkedIn.png";
import pinterestIcon from "../assets/images/pinterest.png";
import Icons from './Icons.js';
function SocialMediaSection() {
	return (
		<div className="social-media-section w-full bg-white flex flex-col items-center">
			<div className="social-media-title 
			w-[80%] 
			py-[10px] 
			px-[80px] 
			my-[20px] 
			text-center 
			border-4 
			border-solid 
			border-[rgb(199,233,61)]
			max-lg:w-[90%]
			max-sm:px-[30px] 
			">

				<h2 className="sm-title 
				text-[#848f0e] 
				text-[3vw]
				max-sm:text-[1.3rem]
				">Learn how to leverage social media to generate customers for your business
				</h2>

			</div>
			<div className="social-media-container grid grid-cols-[repeat(6,_1fr)] grid-rows-[100px_50px_100px] gap-[10px] h-fit bg-white [grid-template-areas:'google_.yt_.in_.'_'google_fb_yt_ig_in_pin'_'._fb_._ig_._pin'] 
			max-lg:grid-cols-[1fr_1fr_1fr] 
			max-lg:grid-rows-[150px_150px]
			max-lg:[grid-template-areas:'google_fb_yt'_'ig_in_pin']
			max-sm:grid-cols-[1fr_1fr_0]
			max-sm:grid-rows-[150px_150px_150px]
			max-sm:[grid-template-areas:'google_fb'_'yt_ig'_'in_pin']
			">

				<Icons icon={<img className="size-full object-cover objec-center" src={googleIcon} />} areaName="google" />
				<Icons icon={<img className="size-full object-cover objec-center" src={facebookIcon} />} areaName="fb" />
				<Icons icon={<img className="size-full object-cover objec-center" src={youtubeIcon} />} areaName="yt" />
				<Icons icon={<img className="size-full object-cover objec-center" src={instagramIcon} />} areaName="ig" />
				<Icons icon={<img className="size-full object-cover objec-center" src={linkedInIcon} />} areaName="in" />
				<Icons icon={<img className="size-full object-cover objec-center" src={pinterestIcon} />} areaName="pin" />


			</div>
		</div>
	);
}

export default SocialMediaSection;