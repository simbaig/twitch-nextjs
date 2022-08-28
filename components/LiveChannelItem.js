import Image from "next/image";
import React from "react";

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
	return (
		<div className="p-2 w-full">
			<div className="transform transition-all hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-[8px_8px_0px_rgb(145,70,254)]">
				<Image src={img} alt="/" width="555" height="315" />
			</div>
			<div className="flex pt-2">
				<div className="pr-2">
					<Image
						src={profile_img}
						width="60"
						height="60"
						alt="/"
						className="rounded-full"
					/>
				</div>
				<div>
					<p className="text-sm font-black">{title}</p>
					<p className="text-gray-500 text-sm">{user}</p>
					<p className="text-gray-500 text-sm">{game}</p>
				</div>
			</div>
		</div>
	);
};

export default LiveChannelItem;
