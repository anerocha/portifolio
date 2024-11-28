import React from 'react'
import user_image from '../assets/user-image.png'
import circular_text from '../assets/circular-text.png'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import javas from '../assets/javas.png'
import sql from '../assets/sql.png'
import git from '../assets/git.png'
import python from '../assets/python.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import power from '../assets/power.png'



const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">Introdução</h4>
    <h2 className="text-center text-5xl font-Ovo">Sobre mim</h2>

    <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
            <img src={user_image} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none"/>

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                <img src={circular_text} alt="" className="w-full animate-spin_slow"/>
                <img src={dev_icon} alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
        </div>
        <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">Sou Geane, em transição para a área de tecnologia, com foco em Análise de Dados e Desenvolvimento Web. 
                Atualmente, estudo Análise de Dados na EBAC e Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi.

Tenho experiência prática em gestão, tendo administrado um e-commerce online, onde era responsável por todos os aspectos do negócio.
 Além disso, estou desenvolvendo habilidades em manipulação, visualização e interpretação de dados com ferramentas como Python, SQL e Power BI, e práticas em desenvolvimento web utilizando HTML, CSS, JavaScript e React.

Busco aliar técnica e criatividade em projetos práticos, como dashboards interativos e sistemas web completos, para resolver problemas e otimizar processos. 
Sou proativa, colaborativa e motivada a contribuir com soluções eficientes que impulsionem a inovação e os resultados nas empresas.</p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                ">
                    <img src={code_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={code_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Linguagens</h3>
                    <p className="text-gray-600 text-sm dark:text-white/80">HTML, CSS, JavaScript React Js, Python, SQL</p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={edu_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Educação</h3>
                    <p className="text-gray-600 text-sm dark:text-white/80"> Universidade Anhembi Morumbi: Análise e Desenvolvimento de Sistemas </p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={project_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>


                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Projetos</h3>
                    <p className="text-gray-600 text-sm dark:text-white/80">Construiu mais de 5 projetos </p>
                </li>
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Hard Skills</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={vscode} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={javas} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={python} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={sql} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={git} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={css} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={html} alt="" className="w-5 sm:w-7"/>
                </li><li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={react} alt="" className="w-5 sm:w-7"/>
                    </li><li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={power} alt="" className="w-5 sm:w-7"/>
                    
                </li>
            </ul>
        </div>
    </div>
 </div>
  )
}

export default About
