import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FaGlobe } from "react-icons/fa"; // Importa o ícone do Font Awesome

export function Services() {
    return (
        <section className="mt-40 mb-32" id="services">
            <div className="flex justify-center flex-col gap-2 items-center mb-20" data-aos="fade-up">
                <h1 className="text-[30px]">
                    Como posso <span className="text-blue-500">ajudá-lo?</span>
                </h1>
                <p className="text-gray-500 text-center font-secondary">
                    Conheça os meus serviços e por que me diferencio dos demais!
                </p>
            </div>
            <article className="grid grid-cols-1 lg:grid-cols-2 xL:grid-cols-4 gap-8">
                {/* Card 1 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" /> {/* Ícone acima do título */}
                        <CardTitle className="text-center">Desenvolvimento Web Responsivo Personalizado</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Criação de sites completamente otimizados para dispositivos móveis,
                        tablets e desktops, com design responsivo adaptado às necessidades
                        dos usuários brasileiros.
                        <span className="text-blue-500"> Diferencial:</span> Priorização da
                        performance e experiência do usuário (UX) em dispositivos populares
                        no Brasil, garantindo que o site carregue rapidamente e seja fácil
                        de navegar.
                    </CardDescription>
                </Card>

                {/* Card 2 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Integração com Ferramentas de SEO</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Implementação de técnicas avançadas de SEO (Search Engine
                        Optimization) durante o desenvolvimento do site para garantir melhor
                        indexação nos motores de busca como Google.
                        <span className="text-blue-500"> Diferencial:</span> Utilização de
                        práticas de SEO desde o início do projeto, otimizando estrutura de
                        código, metadados e conteúdo para garantir um ranqueamento orgânico
                        superior.
                    </CardDescription>
                </Card>

                {/* Card 3 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Desenvolvimento com Performance e Velocidade</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Desenvolvimento focado na otimização do tempo de carregamento,
                        garantindo sites rápidos e leves.
                        <span className="text-blue-500"> Diferencial:</span> Utilização de
                        técnicas como Lazy Loading, compressão de imagens e CDN para
                        entregar uma experiência de navegação mais rápida.
                    </CardDescription>
                </Card>

                {/* Card 4 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Design e Interface Interativa com Animações Suaves</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Criação de animações interativas e suaves que enriquecem a
                        experiência do usuário, sem comprometer a performance.
                        <span className="text-blue-500"> Diferencial:</span> Utilização de
                        bibliotecas como Framer Motion, ScrollReveal ou Three.js para criar
                        animações inovadoras e de impacto visual.
                    </CardDescription>
                </Card>

                {/* Card 5 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Aplicação de UI/UX Focada no Usuário</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Desenvolvimento de interfaces otimizadas para proporcionar a melhor
                        experiência de usuário (UX), com base em estudos de comportamento do
                        usuário.
                        <span className="text-blue-500"> Diferencial:</span> Criação de
                        fluxos de navegação intuitivos e práticas de design inclusivas,
                        adaptando o site para diferentes tipos de usuários.
                    </CardDescription>
                </Card>

                {/* Card 6 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">
                            Desenvolvimento Web com Integração de Web3 e APIs
                        </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Criação de sites que integram tecnologias como Web3, blockchain e
                        outras APIs para funcionalidades modernas e de alta tecnologia.
                        <span className="text-blue-500"> Diferencial:</span> Oferecer
                        soluções de integração com plataformas descentralizadas, permitindo
                        inovação e segurança em projetos de ponta.
                    </CardDescription>
                </Card>

                {/* Card 7 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Acessibilidade Digital</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Desenvolvimento de sites com foco na acessibilidade, permitindo que
                        pessoas com deficiência naveguem facilmente e com autonomia.
                        <span className="text-blue-500"> Diferencial:</span> Conformidade com
                        padrões de acessibilidade WCAG (Web Content Accessibility
                        Guidelines), promovendo inclusão digital.
                    </CardDescription>
                </Card>

                {/* Card 8 */}
                <Card className="p-4 lg:p-12" data-aos="fade-up" data-aos-offset="300">
                    <CardHeader className="flex flex-col items-center">
                        <FaGlobe className="text-blue-500 mb-2 text-2xl" />
                        <CardTitle className="text-center">Atendimento e Suporte Dedicado</CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center font-secondary">
                        Suporte contínuo para atualização de conteúdo, correção de bugs e
                        melhorias de performance após a entrega do site.
                        <span className="text-blue-500"> Diferencial:</span> Atendimento
                        personalizado com contato direto, proporcionando uma experiência de
                        pós-venda diferenciada e ágil.
                    </CardDescription>
                </Card>
            </article>
        </section>
    );
}