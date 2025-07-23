type CardProps ={
	color?: string,
}

function Card({ color }: CardProps) {
	return (
		<div className="perks-container 
		bg-[#848f0e] 
		max-w-[300px] 
		h-[300px] 
		flex-auto 
		relative
		max-md:min-w-[300px]
		
		" style={{ backgroundColor: color || '#848f0e' }}>
			<h3 className="
			text-white
			 text-center 
			 text-[2rem] 
			 pt-[20px] 
			 before:content-[''] 
			 before:w-[50px] 
			 before:h-[40px] 
			 before:bg-[hwb(120_1%_74%)] 
			 before:my-[10px] 
			 before:mx-auto 
			 before:inline-block 
			 before:text-[1.5rem] 
			 before:left-0 
			 before:absolute 
			 before:top-[10px] 
			 after:content-['\f00c'] 
			 after:font-[900] 
			 after:font-['Font_Awesome_6_Free'] after:absolute 
			 after:left-[10px] 
			 after:top-[18px]
			   ">Accessible</h3>
			<p className="
			text-white
			text-left
			text-[1.3rem]
			p-[20px]
			leading-[2.5rem]
			">You don&#39;t need to be a tech guru or have a business background!</p>
		</div>
	);
}


export default Card;