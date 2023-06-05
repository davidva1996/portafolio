import React from 'react'

const Aboout = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola! soy David Vanegas, un gusto en conocerlos.</p>
            </div>
            <div>
              <p> soy tecnologo en sistemas de informacion, actualmente me encuentro estudiando
                ingenieria de software, llevo un año de experiencia desarrollando plantillas para paginas web,
                mas abajo tengo un portafolio de plantillas y aplicaciones web responsive realizados, puedes revisarlos y darme tu opinion o puedes escribirme al correo y podemos 
                trabajar juntos!</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboout