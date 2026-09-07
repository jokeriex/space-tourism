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
            number: "1",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: LaunchVehicle,
        },
        {
            title: "SPACEPORT",
            number: "2",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            image: Spaceport,
        },
        {
            title: "SPACE CAPSULE",
            number: "3",
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
            classNameButton="w-[80px] h-[80px] flex flex-col justify-center items-center gap-(--size-100) rounded-full"
        >
            {technology.number}
        </TechnologyTab>
    ));

    return (
        <main className="w-full h-full flex flex-col justify-start items-end py-(--size-600) ">
            <section className="w-full max-w-[1275px] flex flex-col justify-start items-start gap-(--size-300)">
                <Title className="flex justify-start items-start gap-(--size-300) text-white preset-font-five">
                    <span className="preset-font-five text-white/25">03</span>
                    SPACE TOURISM
                </Title>
                <article className="w-full h-full flex justify-start items-center gap-(--size-400)">
                    <article className="w-full w-min-[635px] flex flex-col justify-center items-start gap-(--size-800)">
                        <nav className="flex flex-col gap-(--size-400)">
                            {technologyTabs}
                        </nav>
                        <article className="w-full max-w-[640px] flex flex-col justify-start items-center gap-(--size-300)">
                            <article className="w-full felx flex-col justify-start items-start gap-(--size-200)">
                                <Title className="preset-font-four text-white/50">THE TECHNOLOGY</Title>
                                <Title className="preset-font-three text-white">{selectedTechnology.title}</Title>
                            </article>
                            <Text className="preset-font-nine text-(--color-blue-300)">{selectedTechnology.description}</Text>
                        </article>
                    </article>
                    <article className="w-full h-full flex flex-col justify-center items-center">
                        <img className="w-full h-[600px]" src={selectedTechnology.image} alt={selectedTechnology.title}></img>
                    </article>
                </article>
            </section>
        </main>
    )
}