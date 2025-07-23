import React from "react";

type IconProps = {
  icon: React.ReactNode;
  areaName: string;
};


function Icons({ icon, areaName }: IconProps) {
	return (


	<div className="icons w-[150px] aspect-1/1 border-4 border-solid border-[rgb(199,233,61)]" style={{gridArea:areaName}}>

			{icon}
		</div>

	);
}

export default Icons;