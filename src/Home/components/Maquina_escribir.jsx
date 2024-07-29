import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MaquinaEscribir = () => {
    // Utiliza el hook useTypewriter para generar el efecto de máquina de escribir
    const [text] = useTypewriter({
        words: ["IoT", "React js", "TailwindCSS", "Express js", "Vite", "ESP32"], // Lista de palabras a mostrar
        loop: true, // Para repetir la animación de escritura
        delay: 100, // Velocidad de escritura (100 milisegundos entre cada letra)
        deleteSpeed: 100, // Velocidad de borrado (100 milisegundos entre cada letra)
    });
    
    return (
        <div className>
            {/* Muestra el texto generado por la máquina de escribir */}
            <span className="text-gradient">
            de {text}
            </span>
            {/* Muestra el cursor de la máquina de escribir */}
            <Cursor cursorStyle='|' />
        </div>
    );
};

export default MaquinaEscribir;


