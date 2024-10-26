import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
    return (
        <section className="mt-20" id="FAQ">
            <div className="flex justify-center flex-col items-center gap-2">
                <h1 className="text-blue-500 animate-bounce text-2xl" data-aos="fade-down">FAQ</h1>
                <h2 className="text-3xl" data-aos="fade-up">Perguntas Frequentes</h2>
                <p data-aos="fade-up" className="text-gray-500 text-center font-secondary mb-12">Algumas das perguntas mais frequentes que eu recebo.</p>
            </div>
            <Accordion type="single" collapsible className="p-8">
                <AccordionItem value="item-1" data-aos="fade-down" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 transition-all duration-700">Como funciona sua forma proposta e sua forma de Trabalho?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                    <ol className="list-decimal pl-5">
                            <li>
                                Início com uma análise detalhada das necessidades do cliente através de uma reunião ou por whatsapp como o mesmo preferir após isso envio um briefing para compreender suas expectativas e requisitos específicos.
                            </li>
                            <li>
                                Apresento um contrato formal para estabelecer um compromisso mútuo, garantindo a segurança e a transparência durante todo o processo de desenvolvimento do projeto.
                            </li>
                            <li>
                                Após a assinatura do contrato, inicio o processo de prototipagem do projeto no Figma, mantendo o cliente informado e fornecendo suporte contínuo 24 horas por dia.
                            </li>
                            <li>
                                Utilizo a plataforma escolhida pelo cliente, garantindo que suas preferências e necessidades sejam atendidas ao longo do desenvolvimento.
                            </li>
                            <li>
                                Adoto as melhores práticas de codificação para assegurar que o site seja responsivo, moderno e escalável, visando a excelência em desempenho e usabilidade.
                            </li>
                            <li>
                                Entrego o site dentro do prazo acordado, acompanhado do design e de toda a documentação necessária, incluindo um Style Guide detalhado.
                            </li>
                            <li>
                                Integro o site ao Google Search Console, implementando estratégias eficazes de SEO para otimizar o ranqueamento do site e melhorar sua visibilidade online.
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem data-aos="fade-down" value="item-2" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 transition-all duration-700">Quanto tempo leva para desenvolver um site?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                    O tempo de desenvolvimento depende da complexidade do site. Sites simples podem levar de algumas semanas, enquanto sites mais complexos podem levar meses.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem data-aos="fade-down" value="item-3" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 transition-all duration-700">Como posso garantir que meu site seja responsivo?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                    Utilizo técnicas de design responsivo, como o uso de grid systems, media queries, e frameworks como Bootstrap ou Tailwind CSS para adaptar o layout a diferentes tamanhos de tela.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem data-aos="fade-down" value="item-4" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 duration-700 transition-all">Quais tipos de site você desenvolve?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                        Desenvolvo todos os tipos de site, Landing Page | Multipage | Site Institucional | Blog | Portal | E-commerce | Sites Imersivos... todos os tipos de site!  
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem data-aos="fade-down" value="item-5" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 transition-all duration-700">Você oferece somente serviços de criação de sites/Desenvolvimento web?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                        Não! Também faço serviços de design, como design de aplicativos para celular, Criativos, Design para posts entre outros...
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" data-aos="fade-down" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 transition-all duration-700">Você trabalha somente com frontend?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary">
                    Atualmente, minha especialização é no desenvolvimento da interface do usuário (UI), focando exclusivamente na parte visual e na experiência do usuário (UX). Neste momento, não atuo com bancos de dados ou servidores. No entanto, estou aberto a expandir meus serviços no futuro, caso surjam necessidades específicas dos clientes nessa área.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem data-aos="fade-down" value="item-7" className="mb-6">
                    <AccordionTrigger className="text-white hover:text-blue-500 duration-700 transition-all">Você trabalha com plataformas como Wordpress | Shopify | Wix Studio?</AccordionTrigger>
                    <AccordionContent className="text-gray-500 font-secondary lg:w-[800px]">
                        Sim, eu trabalho com todas essas plataformas, além de desenvolver projetos dentro de editores de código.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
