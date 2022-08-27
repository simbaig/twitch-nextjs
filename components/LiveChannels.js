import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpeg";
import Live2 from "../public/assets/live/live2.jpeg";
import Live3 from "../public/assets/live/live3.jpeg";
import Live4 from "../public/assets/live/live4.jpeg";
import Live5 from "../public/assets/live/live5.jpeg";
import Live6 from "../public/assets/live/live6.jpeg";
import Live7 from "../public/assets/live/live7.jpeg";
import Live8 from "../public/assets/live/live8.jpeg";
import Live9 from "../public/assets/live/live9.jpeg";
import Live10 from "../public/assets/live/live10.jpeg";

const LiveChannels = () => {
	return (
		<div id="live" className="p-2 md:p-8">
			<h2 className="text-xl font-bold px-2">
				<span className="text-[#9147ff]">Live Channels</span> we think
				you&apos;ll like
			</h2>
			{/* Container */}
			<div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
				<LiveChannelItem
					img={Live1}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/52ef5525-b19f-44f1-b342-2a7e33c45cc3-profile_image-50x50.jpeg"
					title="CHARITY STREAM! Any support is ap..."
					user="Natt"
					game="Valorant"
				/>
				<LiveChannelItem
					img={Live2}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/59ef46d7-97ed-4e12-9c1c-c75dcae6e3c3-profile_image-50x50.png"
					title="Deployable shield commin in clutch"
					user="50ZINT"
					game="Call of Duty: Warzone"
				/>
				<LiveChannelItem
					img={Live3}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/26fac640-e78a-49f4-8ab2-8d12b92574c6-profile_image-50x50.png"
					title="VALORANT WITH NIJI AND FRIENDS!..."
					user="baoo"
					game="Valorant"
				/>
				<LiveChannelItem
					img={Live4}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-50x50.jpeg"
					title="Local Streamer stuck in a cave: sings..."
					user="Jerma985"
					game="One Hand Clapping"
				/>
				<LiveChannelItem
					img={Live5}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png"
					title="BIG Mario Kart session"
					user="Bigpuffer"
					game="Mario Kart 8 Deluxe"
				/>
				<LiveChannelItem
					img={Live6}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-50x50.png"
					title="Tripod Man Gains RP | Code: MFAM | @..."
					user="NICKMERCS"
					game="Apex Legends"
				/>
				<LiveChannelItem
					img={Live7}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/3a6ecb14-0753-4669-af1e-f5538e3fe4aa-profile_image-50x50.png"
					title="JESUS LOVES YOU!!!"
					user="coletteleclair"
					game="Just Chatting"
				/>
				<LiveChannelItem
					img={Live8}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png"
					title="Covert_Muffin teaching Star Wars..."
					user="JamesDoneQuick"
					game="Star Wars: Jedi Knight II - Jedi Outcast"
				/>
				<LiveChannelItem
					img={Live9}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-50x50.png"
					title="Grinding"
					user="shroud"
					game="The Cycle: Frontier"
				/>
				<LiveChannelItem
					img={Live10}
					profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/958d17a9-0c82-4210-8376-7e3c00a006f5-profile_image-50x50.png"
					title="GRILLIN / CHILLEN! Steak / Burgers..."
					user="KennyGoodloe"
					game="Just Chatting"
				/>
			</div>
		</div>
	);
};

export default LiveChannels;
