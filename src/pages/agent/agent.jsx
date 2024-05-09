import AgentCommunication from "../../components/agent/communication";
import AgentInformation from "../../components/agent/information";
import AgentPhoto from "../../components/agent/photo";

const Agent = () => {
	return (
		<div className="flex flex-col gap-8">
			<section id="photo">
				<AgentPhoto photoUrl="images/agent/photo.jpg" />
			</section>
			<section id="information">
				<AgentInformation />
			</section>
			<section id="communication">
				<AgentCommunication />
			</section>
		</div>
	);
};

export default Agent;
