import { Link } from "react-router";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

export default function MainHome(){
    return (
        <main className="w-full h-[888px] flex flex-col justify-start items-center py-(--size-1600)">
            <section className="w-full h-full max-w-[1110px] flex justify-start items-end">
                <section className="w-full flex justify-between items-center">
                    <article className="w-full max-w-[540px] flex flex-col justify-start items-start gap-(--size-300)
                    text-(--color-blue-300)">
                        <Title className="preset-font-five">
                            SO, YOU WANT TO TRAVEL TO
                        </Title>
                        <Title className="preset-font-one text-(--color-white)">
                            SPACE
                        </Title>
                        <Text className="preset-font-nine">
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Text>
                    </article>
                    <article className="w-full max-w-[540px] flex flex-col justify-center items-end">
                        <Button content="EXPLORE" className="bg-white preset-font-four text-(--color-blue-900) w-[272px] h-[272px] rounded-full" >
                            <Link to="/destination">
                                EXPLORE
                            </Link>
                        </Button>
                    </article>
                </section>
            </section>
        </main>
    )
}