import React from "react";

const Team = (props) => {
	const members = [
		{
			name: "Charles M. Turner",
			role: "Partner",
			imgurl: "images/team/team_member (6).jpg",
		},
		{
			name: "Rachel Glass",
			role: "Partner",
			imgurl: "images/team/team_member (5).jpg",
		},
		{
			name: "Alex turner",
			role: "Associate",
			imgurl: "images/team/team_member (4).jpg",
		},
		{
			name: "Ruth Genie",
			role: "Associate",
			imgurl: "images/team/team_member (3).jpg",
		},
		{
			name: "Max Tanner",
			role: "Associate",
			imgurl: "images/team/team_member (2).jpg",
		},
		{
			name: "Sean Peters",
			role: "Associate",
			imgurl: "images/team/team_member (1).jpg",
		},
	];
	return (
		<div className="flex flex-col gap-5 py-16">
			<h1 className="text-5xl text-black font-semibold">
				WE'RE A FAST-GROWING TEAM
			</h1>
			<h1 className="text-1xl text-gray-700">
				At Myth Financial Group, we have a team of experienced and knowledgeable
				insurance agents who are dedicated to helping our clients find the best
				life insurance policies that fit their unique needs and budget. Our team
				is always ready to answer any questions you may have and guide you
				through the insurance buying process.
			</h1>
			<div className="grid grid-cols-3 gap-8">
				{members.map((member) => {
					return (
						<div className="flex flex-col gap-4">
							<img src={member.imgurl}></img>
							<h1 className="text-4xl text-black font-semibold">
								{member.name}
							</h1>
							<h1 className="text-lg text-gray-700">{member.role}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
