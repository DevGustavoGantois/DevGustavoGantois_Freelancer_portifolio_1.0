import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center border border-gray-800 rounded-xl text-white py-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 w-full max-w-5xl px-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl mb-4">Navegação</h1>
                    <ul className="flex flex-col items-center space-y-2 text-gray-300">
                        <li><a href="#Home" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Home</a></li>
                        <li><a href="#services" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Serviços</a></li>
                        <li><a href="#portifolio" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Trabalhos</a></li>
                        <li><a href="#Skills" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Skills</a></li>
                        <li><a href="#Testimonial" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Depoimentos</a></li>
                        <li><a href="#About" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Sobre</a></li>
                        <li><a href="#Contact" className="hover:text-blue-500 transition duration-300 font-secondary font-extralight text-gray-300">Contato</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-2xl mb-4">Siga-me</h1>
                    <ul className="flex gap-6">
                        <li><a href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20entender%20melhor%20como%20funciona%20o%20seu%20servi%C3%A7o." target="_blank"><FaWhatsapp className="text-white hover:text-blue-500 hover:scale-110 transition duration-300 lg:text-3xl" /></a></li>
                        <li><a href="https://www.instagram.com/devgustavogantois_/" target="_blank"><FaInstagram className="text-white hover:text-blue-500 hover:scale-110 transition duration-300 lg:text-3xl" /></a></li>
                        <li><a href="https://github.com/DevGustavoGantois" target="_blank"><FaGithub className="text-white hover:text-blue-500 hover:scale-110 transition duration-300 lg:text-3xl" /></a></li>
                        <li><a href="https://www.linkedin.com/in/gustavo-gantois-2839b5168/" target="_blank"><FaLinkedin className="text-white hover:text-blue-500 hover:scale-110 transition duration-300 lg:text-3xl" /></a></li>
                        <a href="https://www.tiktok.com/@devgustavogantois?lang=pt-BR" target="_blank"><FaTiktok className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                    </ul>
                </div>
            </div>
            <div className="mt-12 w-full border-t border-gray-700 pt-4 text-center">
                <a className="text-gray-500 hover:text-blue-500 transition duration-300" href="https://www.instagram.com/devgustavogantois_/" target="_blank">
                    Desenvolvido por @devgustavogantois_
                </a>
            </div>
        </footer>
    );
}