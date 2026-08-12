import {useState} from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Box from "../molecules/Box";
import DestinationTab from "../molecules/DestinationTab";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

export default function MainDestination() {
    const destinations = [
        {
            name: "MOON",
            image: Moon,
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            travelTime: "3 DAYS"
        }, {
            name: "MARS",
            image: Mars,
            description: "The red planet is the only place in our solar system known to harbor life. With a surface area similar to Earth’s, it’s a prime candidate for human settlement.",
            distance: "225,000,000 KM",
            travelTime: "9 MONTHS"
        }, {
            name: "EUROPA",
            image: Europa,
            description: "Europa is a moon of Jupiter and is known for its icy surface and potential subsurface ocean. It’s a fascinating destination for those interested in the possibility of extraterrestrial life.",
            distance: "628,300 KM",
            travelTime: "6 MONTHS"
        }, {
            name: "TITAN",
            image: Titan,
            description: "Titan is the largest moon of Saturn and is the only moon in our solar system with a substantial atmosphere. It’s a unique destination for those interested in exploring alien environments.",
            distance: "1,400,000 KM",
            travelTime: "12 MONTHS"
        }
    ]

    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleClick = (destinationName) => {
        const destination = destinations.find(dest => dest.name === destinationName);
        setSelectedDestination(destination);
    }

    return (
        <main className="w-full h-full flex flex-col justify-start items-center py-(--size-600)">
            <section className="w-full h-full max-w-[1110px] flex flex-col justify-start items-start gap-(--size-300)">
                <Title className="preset-font-five text-color-white flex justify-start items-start gap-(--size-300)">
                    <span className="text-white/25">01</span>PICK YOUR DESTINATION
                </Title>
                <article className="w-full h-full flex justify-start items-center gap-(--size-400)">
                    <article className="w-full h-full flex justify-center items-center">
                        <img src={selectedDestination.image} alt={selectedDestination.name} className="w-[480px] h-[480px]" />
                    </article>
                    <article className="w-full h-full  flex flex-col justify-center items-center">
                        <article className="w-full h-full max-w-[445px] flex flex-col justify-center items-center gap-(--size-500)">
                            <nav className="w-full flex justify-start items-start gap-(--size-400)">
                                <DestinationTab onClick={() => {handleClick("MOON")}} classNameDiv="h-(--size-400) flex flex-col justify-center items-start" classNameButton="flex justify-start items-start preset-font-eight text-white">
                                    MOON
                                </DestinationTab>
                                <DestinationTab onClick={() => {handleClick("MARS")}} classNameDiv="h-(--size-400) flex flex-col justify-center items-start" classNameButton="flex justify-start items-start preset-font-eight text-white">
                                    MARS
                                </DestinationTab>
                                <DestinationTab onClick={() => {handleClick("EUROPA")}} classNameDiv="h-(--size-400) flex flex-col justify-center items-start" classNameButton="flex justify-start items-start preset-font-eight text-white">
                                    EUROPA
                                </DestinationTab>
                                <DestinationTab onClick={() => {handleClick("TITAN")}} classNameDiv="h-(--size-400) flex flex-col justify-center items-start" classNameButton="flex justify-start items-start preset-font-eight text-white">
                                    TITAN
                                </DestinationTab>
                            </nav>
                            <article className="w-full flex flex-col justify-center items-start gap-(--size-200)">
                                <Title className="preset-font-two text-color-white">{selectedDestination.name}</Title>
                                <Text className="preset-font-nine text-(--color-blue-300)">
                                    {selectedDestination.description}
                                </Text>
                            </article>
                            <hr className="w-full h-[1px] border-white/25"></hr>
                            <article className="w-full flex justify-start items-start gap-(--size-300)">
                                <Box title="AVG. DISTANCE" description={selectedDestination.distance} />
                                <Box title="EST. TRAVEL TIME" description={selectedDestination.travelTime} />
                            </article>
                        </article>
                    </article>
                </article>
            </section>
        </main>
    )
}