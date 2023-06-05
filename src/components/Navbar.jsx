import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-4 border-gray-100 '>
        <h2 className='font-bold'> David Vanegas </h2>

        {/*Menu*/}

        <ul className='hidden md:flex'>
            <li className='  hover:bg-pink-600 hover:border-pink-600' ><Link  to='home' smooth={true} duration={500}>Inicio</Link></li>
            <li className='  hover:bg-pink-600 hover:border-pink-600' ><Link to='about' smooth={true} duration={500}>Sobre mi</Link></li>
            <li className='  hover:bg-pink-600 hover:border-pink-600' ><Link to='skills' smooth={true} duration={500}>Habilidades</Link></li>
            <li className='  hover:bg-pink-600 hover:border-pink-600' ><Link to='work' smooth={true} duration={500}>Proyectos</Link></li>
            <li className='  hover:bg-pink-600 hover:border-pink-600' ><Link to='contact' smooth={true} duration={500}>Contacto</Link></li>
        </ul>

        {/*Hamburguer */}

            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

        {/*Mobile menu */}

        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center '} >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Trabajo
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'

                    href="https://www.linkedin.com/in/david-vanegas-986721120/">
                       Linkedin < FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
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

