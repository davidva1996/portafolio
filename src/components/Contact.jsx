import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 py-16 '>
    <form method='POST' action="https://getform.io/f/1c8bc9d9-4a66-4d07-a2c4-aa51fea1c323" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 lg:mt-[40%]'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
            <p className='text-gray-300 py-4'>Pulsa enviar, Ingresa tus datos, deja tu opinión, consulta o inquietudes y pronto me pondré en contacto contigo.</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-1 my-8 mx-auto flex items-center'>Enviar</button>
    </form>
</div>
  )
}

export default Contact