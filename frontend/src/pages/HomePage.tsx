
import TitleSection from '../components/TitleSection.tsx';
import AboutSection from '../components/AboutSection.tsx';
import SocialMediaSection from '../components/SocialMediaSection.tsx';
import PerksSection from "../components/PerksSection.tsx";
import MemberSection from "../components/MemberSection.tsx";
import Footer from '../components/Footer.tsx';


function HomePage() {
	return (
		<>

			<div className="flex flex-col min-h-screen w-full">
				<div className="heading-section 
				bg-[url('/pexels_samuel_b_tikofer_5226950.jpg')] 
				bg-center 
				bg-no-repeat 
				bg-cover 
				max-w-full 
				h-[350px]
				max-lg:h-[250px]
				max-sm:hidden
				"></div>
				<TitleSection />
				<AboutSection />
				<SocialMediaSection />
				<PerksSection />
			<MemberSection />
			<Footer />


			</div>
		</>
	);
}

export default HomePage;