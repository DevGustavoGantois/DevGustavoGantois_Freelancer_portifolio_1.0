import Image from "next/image";
import { Button } from "./ui/button";
import { FaAngleDoubleDown,  FaGlobe } from 'react-icons/fa';

export function Hero() {
    return (
        <section id="Home">
            <div className="flex justify-center items-center animate-pulse -mb-5">
                <Image src="/ImgLogo.svg" width={600} height={100} alt="" data-aos="flip-up" />
            </div>
            <div className="flex justify-center items-center flex-col">
                <div>
                <button className="mb-12 cursor-pointer p-3 text-gray-600 border border-blue-800 rounded-xl animate-pulse text-sm"><a href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20entender%20melhor%20como%20funciona%20o%20seu%20servi%C3%A7o." target="_blank">Solicitar um Orçamento</a></button>
                </div>
                <h1 className="text-2xl lg:text-5xl text-center animate-bounce" data-aos="fade-up">Transformando ideias em <br /> <span className="text-blue-600">Produtos Digitais</span></h1>
                <p className="text-gray-500 mt-4 max-w-[900px] text-center font-secondary" data-aos="fade-down">O melhor do desenvolvimento web para você, vamos transformar suas ideias em realidade, faça um orçamento agora sem compromisso!</p>
            </div>
            <div className="flex justify-center flex-col lg:flex-row items-center gap-6 mt-12 mb-12 lg:mb-2">
            <div className="relative" data-aos="fade-down">
            <Button>
                    <a href="#services" className="text-white pr-2">Saiba mais</a>
                    <FaAngleDoubleDown className="ml-2 text-white" />
            </Button>
            </div>
            <div className="relative" data-aos="fade-down">
            <Button variant="outline" className="flex items-center">
                <a className="pr-1" href="#Portifolio">Conheça meu portifólio</a>
                <FaGlobe className="ml-2" /> 
            </Button>
            </div>
            </div>
            <div className="flex justify-center items-center">
                <Image src="/ImgBgHero.svg" width={1200} height={500} alt="" className="float" />
            </div>
        </section>
    )
}
