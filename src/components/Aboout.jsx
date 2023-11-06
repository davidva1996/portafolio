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
              <p> Tecnólogo en Sistemas de Información en constante evolución hacia la Ingeniería de Software. Mi trayectoria se ha forjado a través del diseño y desarrollo de  páginas web (¡puedes ver ejemplos en la sección de Proyectos!), así como la creación de aplicaciones web altamente responsivas.

¿Te entusiasma lo que ves? ¿Te interesa el trabajo que realizo? ¡No dudes en ponerte en contacto y dejar tu mensaje! ¡Juntos podemos dar vida a tus proyectos! 
              </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboout