import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useState } from "react";
import TechnologyTab from "../molecules/TechnologyTab";
import LaunchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";

export default function MainTechnology(){
    const technologies = [
        {
            title: "TLAUNCH VEHICLE",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: LaunchVehicle,
        },
        {
            title: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            image: Spaceport,
        },
        {
            title: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            image: SpaceCapsule,
        }
    ];

     const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

    const handleClick = (TechnologyName) => {
        const technology = technologies.find(t => t.title === TechnologyName);
        setSelectedTechnology(technology);
    }

    const technologyTabs = technologies.map(technology => (
        <TechnologyTab
            key={technology.title}
            isActive={selectedTechnology.title === technology.title}
            onClick={() => { handleClick(technology.title) }}
            classNameDiv=""
            classNameButton="bg-white w-4 h-4 rounded-full"
        >
        </TechnologyTab>
    ));

    return (
        <main>
            <section>
                <Title><span>03</span>SPACE TOURISM</Title>
                <article>
                    <article>
                        <nav>
                            {technologyTabs}
                        </nav>
                        <article>
                            <article>
                                <Title>THE TECHNOLOGY</Title>
                                <Title>{selectedTechnology.title}</Title>
                            </article>
                            <Text>{selectedTechnology.description}</Text>
                        </article>
                    </article>
                    <article>
                        <img src={selectedTechnology.image} alt={selectedTechnology.title}></img>
                    </article>
                </article>
            </section>
        </main>
    )
}