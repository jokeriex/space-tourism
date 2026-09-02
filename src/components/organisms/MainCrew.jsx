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
            classNameButton="bg-white w-4 h-4 rounded-full"
        >
        </CrewTab>
    ));
    return (
        <main>
            <section>
                <Title><span>02</span>MEET YOUR CREW</Title>
                <article>
                    <article>
                        <article>
                            <article>
                                <Title>{selectedMember.role}</Title>
                                <Text>{selectedMember.name}</Text>
                            </article>
                            <Text>{selectedMember.description}</Text>
                        </article>
                        <article>
                            <nav>
                                {crewTabs}
                            </nav>
                        </article>
                    </article>
                    <article>
                        <img src={selectedMember.image} alt={selectedMember.name}></img>
                    </article>
                </article>
            </section>
        </main>
    );
}