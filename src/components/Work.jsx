import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Meus projetos</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Desenvolvi projetos que combinam análise de dados, design e desenvolvimento web, incluindo um dashboard sobre COVID-19,
         um site de motos clássicas e uma landing page para uma loja de roupas. Utilizo ferramentas como Python, 
        Google Colab e JavaScript para criar soluções interativas e funcionais. Meus projetos focam na experiência do usuário e na visualização de dados.</p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Projeto de front-end</h2>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a href="https://anerocha.github.io/classic-moto/" target="_blank" rel="noopener noreferrer">
                <img src={send_icon} alt="Send Icon" className="w-5"/>
              </a>
            </div>
          </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Projeto de front-end</h2>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a href="https://anerocha.github.io/kumo-loja/" target="_blank" rel="noopener noreferrer">
                <img src={send_icon} alt="Send Icon" className="w-5"/>
              </a>
            </div>
          </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Dashboard e Análise de Dados</h2>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a href="https://github.com/anerocha/ebac-dash-covid/blob/main/COVID.ipynb" target="_blank" rel="noopener noreferrer">
                <img src={send_icon} alt="Send Icon" className="w-5"/>
              </a>
            </div>
          </div>
        </div>

        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Análise de Entregas e Hubs de Distribuição</h2>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a href="https://github.com/anerocha/analise_exploratoria/blob/main/Profissao_Analista_de_dados_M16_2_Exercicio_(1).ipynb" target="_blank" rel="noopener noreferrer">
                <img src={send_icon} alt="Send Icon" className="w-5"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
