import Logo from '../atoms/Logo'
import NavBar from '../molecules/NavBar'
import logo from '../../assets/shared/logo.svg'

export default function Header(){
    return(
        <header className='w-full flex justify-start items-center pt-(--size-500)'>
            <Logo src={logo} alt='logo' />
            <NavBar />
        </header>
    )
}