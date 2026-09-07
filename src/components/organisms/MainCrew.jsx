import { useState } from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import CrewTab from "../molecules/CrewTab";
import Douglas from "../../assets/crew/image-douglas-hurley.png";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import Victor from "../../assets/crew/image-victor-glover.png";
import Anousheh from "../../assets/crew/image-anousheh-ansari.png";

export default function MainCrew() {

    const crew = [{
        role: 'COMMANDER',
        name: 'DOUGLAS HURLEY',
        path: '/douglas-hurley',
        image: Douglas,
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
        role: 'MISSION SPECIALIST',
        name: 'MARK SHUTTLEWORTH',
        path: '/mark-shuttleworth',
        image: Mark,
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
        role: 'PILOT',
        name: 'VICTOR GLOVER',
        image: Victor,
        path: '/victor-glover',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',

    },
    {
        role: 'FLIGHT ENGINEER',
        name: 'ANOUSHEH ANSARI',
        image: Anousheh,
        path: '/anousheh-ansari',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    }
    ];

    const [selectedMember, setSelectedMember] = useState(crew[0]);

    const handleClick = (memberName) => {
        const member = crew.find(m => m.name === memberName);
        setSelectedMember(member);
    }

    const crewTabs = crew.map(member => (
        <CrewTab
            key={member.name}
            isActive={selectedMember.name === member.name}
            onClick={() => { handleClick(member.name) }}
            classNameDiv=""
            classNameButton="w-[15px] h-[15px] rounded-full"
        >
        </CrewTab>
    ));

    return (
        <main className="w-full h-full flex flex-col items-center justify-start py-(--size-600)">
            <section className="w-full max-w-[1110px] h-full flex flex-col items-start justify-start gap-(--size-300)">
                <Title className="flex justify-start items-start gap-(--size-300) text-white preset-font-five">
                    <span className="preset-font-five text-white/25">02</span>
                    MEET YOUR CREW
                </Title>
                <article className="w-full h-full flex justify-start items-center gap-(--size-400)">
                    <article className="w-full h-full flex flex-col justify-start items-start gap-(--size-500)">
                        <article className="w-full max-w-[640px] h-full flex flex-col gap-(--size-300) justify-center items-start">
                            <article className="w-full flex flex-col justify-start items-start gap-(--size-200)">
                                <Title className="preset-font-four text-white/50">{selectedMember.role}</Title>
                                <Text className="preset-font-three text-white">{selectedMember.name}</Text>
                            </article>
                            <Text className="text-white preset-font-nine">
                                {selectedMember.description}
                            </Text>
                        </article>
                        <article className="w-full flex justify-start items-start gap-(--size-100) pb-(--size-600)">
                            <nav className="w-[540px] flex justify-start items-start gap-(--size-100)">
                                {crewTabs}
                            </nav>
                        </article>
                    </article>
                    <article className="w-full h-full flex justify-center
                    items-center">
                        <img className="w-[539px] h-[676px]" src={selectedMember.image} alt={selectedMember.name}></img>
                    </article>
                </article>
            </section>
        </main>
    );
}