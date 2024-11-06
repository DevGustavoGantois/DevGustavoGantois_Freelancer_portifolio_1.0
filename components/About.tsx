import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

export function About() {
    return (
        <section className="mt-40" id="About">
            <div className="flex justify-center items-center flex-col">
                <p className="text-gray-500 text-center font-secondary" data-aos="fade-up" data-aos-delay="100">Conheça um pouco</p>
                <h1 className="text-center text-2xl lg:text-5xl" data-aos="fade-up" data-aos-delay="200">Sobre <span className="text-blue-500">Mim</span></h1>
            </div>
            <div className="flex justify-center items-center mt-6">
                <Card className="p-4 lg:p-12">
                    <div className="flex justify-center flex-col lg:flex-row items-center">
                        <CardHeader>
                            <CardTitle data-aos="flip-right">
                                <Image src="/gustavo.jpg" width={200} height={200} quality={100} alt="Foto de Gustavo" className="rounded-2xl mb-8" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="font-secondary max-w-[700px]" data-aos="flip-up">
                                E aí! Tudo certo? Meu nome é Gustavo Gantois, sou desenvolvedor web freelancer especializado em tecnologias modernas como Next.js, REACT e Tailwind. Sou um entusiasta de inovação e estou sempre em busca de evoluir minhas habilidades e criar projetos de alta qualidade. Além do desenvolvimento, estudo também design UI/UX, o que me permite combinar código e design para criar interfaces funcionais e atraentes. Apaixonado por aprender e melhorar, estou sempre explorando novas formas de agregar valor aos meus projetos e oferecer uma experiência completa aos clientes!
                            </CardDescription>
                            <div className="flex flex-col lg:flex-row gap-5 items-center justify-start mt-8">
                                <AlertDialog>
                                    <AlertDialogTrigger className="bg-blue-500 p-3 rounded-xl shadow-lg text-white">Certificados</AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Certificações</AlertDialogTitle>
                                            <AlertDialogDescription className="flex flex-col gap-5 mt-8">
                                                    <span className="font-secondary">1. International Certificate | Full Stack Programming | Infinity School</span>
                                                    <span className="font-secondary">2. Fundamentos do React | RocketSeat</span>
                                                    <span className="font-secondary">3. Carta de Recomendação | Infinity School</span>
                                                    <span className="font-secondary">4. Aprofundamento em Hooks | RocketSeat</span>
                                                    <span className="font-secondary">5. Fundamentos de Acessibilidade, Guidelines, WCAG, Leitores de tela  | RocketSeat</span>
                                                    <span className="font-secondary">6. Acessibilidade, modal, requisição HTTP, conexão com API, gerenciamento de estados via contexto performance. | RocketSeat</span>
                                                    <span className="font-secondary">7. Masterizando o TailwindCSS | RocketSeat</span>
                                                    <span className="font-secondary">8. NWL Pocket Full Stack (Trilha Intermediária) | RocketSeat</span>
                                                    <span className="font-secondary">9. Fundamentos em Next.JS | RocketSeat</span>
                                                    <span className="font-secondary">10. Introdução a CiberSegurança | CISCO</span>
                                                    <span className="font-secondary">11. Certificado de Fundamentos a CiberSegurança | CISCO Networking Academy</span>
                                                    <span className="font-secondary">12. Certificado do Mundo 1 e 2 de Python | Gustavo Guanabara</span>
                                                    <span className="font-secondary">13. Certificado em Design System | Design | Storybook | Github Actions</span>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Voltar</AlertDialogCancel>
                                            <AlertDialogAction className="text-white">Continuar</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                                <AlertDialog>
                                    <AlertDialogTrigger className="text-blue-500 hover:bg-white/20 duration-700 transition-all p-3 rounded-md">Graduações</AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Graduações</AlertDialogTitle>
                                            <AlertDialogDescription className="flex flex-col gap-5 mt-8">
                                                    <span className="font-secondary">1. Ensino Médio Completo | Colégio Sacramentinas - BA | 2022</span>
                                                    <span className="font-secondary">2. Cursando Análise e Desenvolvimento de Sistemas | 3º semestre | UNIFACS | 2023 - 2025</span>
                                                    <span className="font-secondary">3.Escola Inglês UPTime | Inglês Pré-Intermediário | Salvador-BA | 2023</span>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Voltar</AlertDialogCancel>
                                            <AlertDialogAction className="text-white">Continuar</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </CardContent>
                    </div>
                    <div className="flex flex-col justify-center lg:flex-row lg:justify-between gap-20 mt-8">
                        <Button>
                            <a className="text-white" href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20entender%20melhor%20como%20funciona%20o%20seu%20servi%C3%A7o." target="">Fale comigo!</a>
                        </Button>
                        <div className="flex justify-center text-2xl items-center gap-6 lg:justify-end">
                            <a href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20entender%20melhor%20como%20funciona%20o%20seu%20servi%C3%A7o." target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                            <a href="https://www.instagram.com/devgustavogantois_/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                            <a href="https://github.com/DevGustavoGantois" target="_blank" rel="noopener noreferrer"><FaGithub className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                            <a href="https://www.linkedin.com/in/gustavo-gantois-2839b5168/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                            <a href="https://www.tiktok.com/@devgustavogantois?lang=pt-BR" target="_blank"><FaTiktok className="text-white hover:text-blue-500 hover:scale-110 duration-300 transition-transform cursor-pointer lg:text-3xl" /></a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
