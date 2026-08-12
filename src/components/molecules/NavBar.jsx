import { Link, useLocation } from "react-router"

const links = [
    {
        num: '00',
        content: 'HOME',
        path:'/'
    },
    {
        num: '01',
        content: 'DESTINATION',
        path:'/destination',
    },
    {
        num: '02',
        content: 'CREW',
        path:'/crew',
    },
    {
        num: '03',
        content: 'TECHNOLOGY',
        path:'/technology',
    },
]

export default function NavBar(){

    const location = useLocation()

    const content = links.map(member => {
        const isActive = location.pathname === member.path

        return (
            <div
                key={member.num}
                className= {`h-(--size-1200) flex flex-col justify-center items-start ${isActive ? 'border-b-white border-b-[3px]' : ''}`}
                        
            >
                <Link to={member.path}
                className="flex gap-(--size-150) preset-font-eight">
                    
                    <span className="preset-font-eight-bold">
                        {member.num}
                    </span>
                        {member.content}    
                </Link>
            </div>
        )
    })

    return(
        <nav className="w-full flex justify-end items-center gap-(--size-600) px-(--size-800) bg-white/5 backdrop-blur-md">
            {content}
        </nav>
    )
}