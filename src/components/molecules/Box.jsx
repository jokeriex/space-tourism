import Title from "../atoms/Title";

export default function Box({title, description}) {
    return (
        <article className="w-full flex flex-col justify-start items-start gap-(--size-150)">
            <Title className="preset-font-seven text-(--color-blue-300)">{title}</Title>
            <Title className="preset-font-six text-color-white">{description}</Title>
        </article>
    )
}