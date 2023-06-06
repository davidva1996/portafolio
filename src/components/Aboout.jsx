import React from 'react'

const Aboout = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              Sobre mi
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola!  un gusto en conocerlos.</p>
            </div>
            <div>
              <p> Soy tecnólogo en sistemas de información, estoy en formación de la  ingeniería de software, mi experiencia se ha desarrollado desde
                 el diseño y desarrollo de plantillas para paginas web (las puedes ver en la opción proyectos) y aplicaciones web responsive. 
                 ¿Te gusta? ¿Te interesa el trabajo que realizo? Escribe, deja tu mensaje. ¡Trabajemos Juntos!        
              </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboout