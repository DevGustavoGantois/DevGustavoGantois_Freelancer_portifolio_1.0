import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React, { FormEvent } from "react";
import { toast, Toaster } from "sonner";

export function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Enviando...");
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "ff029c7d-409d-4247-a98a-29a661d2d60a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Formulário enviado com sucesso!");
                toast.success("Formulário enviado com sucesso!");

                // Verifica se o formulário existe antes de chamar reset
                if (event.currentTarget) {
                    event.currentTarget.reset();
                }
            } else {
                console.log("Error", data);
                setResult(data.message);
                toast.error("Erro ao enviar o formulário. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            setResult("Erro ao enviar o formulário. Verifique sua conexão e tente novamente.");
            toast.error("Erro ao enviar o formulário. Verifique sua conexão.");
        }
    };

    return (
        <section className="mt-40 mb-16 flex flex-col justify-center lg:flex-row lg:justify-between" id="Contact">
            <Toaster position="bottom-right" />
            <div>
                <Card className="flex gap-6">
                    <div className="hidden lg:grid w-full xl:grid-cols-2 lg:grid-cols-1">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaWhatsapp className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">+55 (71) 99958-8246</CardDescription>
                                    <span className="text-center text-gray-600 font-secondary text-sm">Solicite um Orçamento!</span>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaInstagram className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">@devgustavogantois_</CardDescription>
                                    <span className="text-center text-gray-600 font-secondary text-sm">segue aí!</span>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaLinkedin className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">Gustavo Caria</CardDescription>
                                    <span className="text-center text-gray-600 font-secondary text-sm">segue aí!</span>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaTiktok className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">@devgustavogantois_</CardDescription>
                                    <span className="text-center text-gray-600 font-secondary text-sm">segue aí!</span>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaEnvelope className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">gugagantoisdev@gmail.com</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col items-center">
                                    <CardTitle><FaGithub className="text-xl lg:text-6xl animate-bounce" /></CardTitle>
                                    <CardDescription className="text-center mt-5">DevGustavoGantois</CardDescription>
                                    <span className="text-center text-gray-600 font-secondary text-sm">segue aí!</span>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                    <div>
                        <CardHeader>
                            <CardTitle className="text-center mb-4 lg:text-start text-blue-500">Deixe sua mensagem</CardTitle>
                            <CardDescription className="font-secondary">
                                Caso tenha algo a falar, você pode usar o formulário para enviar algo até o meu e-mail ou falar comigo nas redes sociais! (Aconselho mais kkkk)
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={onSubmit}>
                            <CardContent>
                                <div className="mt-6">
                                    <label htmlFor="name" className="mb-2">Nome</label>
                                    <Input type="text" className="font-secondary" placeholder="Digite seu nome" id="name" name="name" required />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email">Email</label>
                                    <Input type="email" className="font-secondary" placeholder="email" id="email" name="email" required />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="telefone">Telefone</label>
                                    <Input type="tel" className="font-secondary" placeholder="telefone" id="telefone" name="telefone" />
                                </div>
                                <div className="mt-6">
                                    <Textarea className="font-secondary" placeholder="Deixe sua mensagem" id="message" name="message" required />
                                </div>
                                <div className="mt-6">
                                    <Button type="submit" className="text-white">Enviar</Button>
                                </div>
                            </CardContent>
                        </form>
                    </div>
                </Card>
            </div>
            <div className="m-8">
                <h1 className="text-center lg:text-start lg:text-5xl mb-5" data-aos="fade-up">Contato</h1>
                <p className="text-gray-500 font-secondary text-center lg:text-start lg:max-w-[600px]" data-aos="fade-up" data-aos-delay="300">
                    Entre em contato e eleve o digital da sua empresa para outro nível, vamos transformar a sua ideia com minha ajuda em um produto digital diferenciado para você e os seus clientes!
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Button className="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <a className="text-white" href="https://wa.me/5571999588246?text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20entender%20melhor%20como%20funciona%20o%20seu%20servi%C3%A7o." target="_blank">Entrar em contato</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
