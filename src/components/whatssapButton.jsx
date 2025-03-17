import React from "react";
import  { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const WhatsappButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2">
      {/* Mensaje emergente */}
      {hover && (
        <div className="bg-gray-800 text-white text-sm font-semibold py-1 px-3 rounded-lg shadow-lg transition-opacity duration-300">
          Escribeme!
        </div>
      )}

      <a
        href="https://api.whatsapp.com/send?phone=573104667748&text=Hola david! quiero contactarme contigo."
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-16 h-16 bg-green-500 rounded-full shadow-lg 
                   transition-all duration-300 hover:bg-green-600 flex items-center justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Efecto de pulso */}
        <div className="absolute w-full h-full bg-green-500 opacity-75 rounded-full animate-ping"></div>

        {/* Ícono de WhatsApp */}
        <FaWhatsapp className="text-white text-4xl relative z-10" />
      </a>
    </div>
  );
};

export default WhatsappButton;