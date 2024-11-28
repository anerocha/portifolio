import React from 'react'
import profile_img from '../assets/profile_img.jpeg'
import right_arrow_white from '../assets/right-arrow-white.png'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profile_img} alt="" className="rounded-full w-32"/>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Oi! Eu sou Geane Rocha <img src="./assets/hand-icon.png" alt="" className="w-6"/>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Análise de dados e desenvolvimento web.</h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Sou estudante em transição para a área de tecnologia, com foco em análise de dados e desenvolvimento web. 
        Estou desenvolvendo habilidades em visualização de dados, SQL e tecnologias web como HTML, CSS e JavaScript. 
        Destaco-me pela proatividade, comunicação clara e capacidade de trabalho em equipe, buscando aplicar meus 
        conhecimentos em projetos práticos.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
        className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
          Contato <img src={right_arrow_white} alt="" className="w-4"/>
        </a>

        {/* Substituindo o botão de download pelo link para o LinkedIn */}
        <a href="https://www.linkedin.com/in/ane-rocha" target="_blank" rel="noopener noreferrer"
        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">
          Linkedin <img src={right_arrow_white} alt="" className="w-4"/>
        </a>
      </div>
    </div>
  )
}

export default Header
