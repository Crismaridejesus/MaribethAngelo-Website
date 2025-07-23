
import Card from './Card.tsx';

function PerksSection() {
	return (
		<div className="perks-section bg-[url('fotobg2.jpg')] w-full h-fit bg-no-repeat bg-cover bg-center bg-white flex items-center justify-center pb-[50px]  ">
			<div className="perks-wrapper 
			flex 
			items-center 
			justify-center 
			h-full 
			w-[80%] 
			gap-[30px] 
			mt-[50px]
			min-md:flex-wrap
			max-md:flex-col
			">
				<Card />
				<Card color='#bdca2d' />
				<Card />
			</div>
		</div>
	);
}

export default PerksSection;