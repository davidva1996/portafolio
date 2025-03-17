import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll'
import logoPrincipal from '../assets/LOGO-2.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-4 border-gray-100'>
  <img src={logoPrincipal} alt="Logo David Vanegas" className="h-16" />


        {/*Menu*/}

            {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6">
        {[
          { name: "Inicio", to: "home" },
          { name: "Sobre mí", to: "about" },
          { name: "Habilidades", to: "skills" },
          { name: "Proyectos", to: "work" },
          { name: "Contacto", to: "contact" },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer font-semibold transition-all duration-300"
            >
              {item.name}
            </Link>
            {/* Línea animada debajo */}
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

        {/*Hamburguer */}

            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

        {/*Mobile menu */}

        <ul
  className={`${
    !nav ? "hidden" : "absolute"
  } top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center`}
>
  {[
    { name: "Inicio", to: "home" },
    { name: "Sobre mí", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Trabajo", to: "work" },
    { name: "Contacto", to: "contact" },
  ].map((item, index) => (
    <li key={index} className="relative py-6 text-4xl group">
      <Link
        onClick={handleClick}
        to={item.to}
        smooth={true}
        duration={500}
        className="cursor-pointer font-semibold transition-all duration-300"
      >
        {item.name}
      </Link>
      {/* Línea animada debajo */}
      <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-pink-600 transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2"></span>
    </li>
  ))}
</ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'

                    href="https://www.linkedin.com/in/david-fernando-vanegas-marentes-986721120/">
                       Linkedin < FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank" rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/davidva1996'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
         
          <Link className='flex justify-between items-center w-full text-gray-300' to='contact' smooth={true} duration={500}> Email <HiOutlineMail size={30} /></Link>            
       
          </li>
         
            </ul>
        </div>

    </div>
  )
}

export default Navbar

