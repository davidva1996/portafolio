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
              <p> Un gusto en conocerlos.</p>
            </div>
            <div>
            <p> 
              Me considero una persona comprometida, proactiva y apasionada por el aprendizaje continuo de nuevas habilidades y tecnologías. Me adapto fácilmente a nuevos retos y entornos de trabajo, siempre buscando mejorar mis conocimientos y perfeccionar mis competencias. Me involucro al 100% en cada proyecto, aportando energía, creatividad y una gran atención a los detalles, con el objetivo de ofrecer soluciones eficientes y de alta calidad. Disfruto colaborar en equipo y enfrentar desafíos que me permiten crecer tanto personal como profesionalmente.
            </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboout