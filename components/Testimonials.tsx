import { FaUser } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const TestimonialsData = [
    { name: "Eduardo Sávio", description: "Ótimo trabalho! O site está responsivo e com uma ótima experiência de usuário, design excepcional com animações bem leves e reativas como eu esperava. Meus parabéns!" },
    {name: "Matheus Hayashi", description: "Irmão está muito bom o site, ficou perfeito!"},
    { name: "Samuel Fernandes", description: "Site ficou muito bom, convence muito bem o cliente de fechar a compra, me poupa muito o trabalho de vender no boca a boca, entregou dentro do prazo e supriu todas as minhas expectativas" },
    { name: "Matheus Caria", description: "O site ficou muito bom irmão! Está muito lindo de verdade, muito obrigado!" },
    { name: "Maurício Sampaio", description: "Guga, você é o cara, o site ficou muito bom, você conseguiu transmitir dentro do site exatamente o que eu te pedi." },
    {name: "Thomaz", description: "Fera demais! Parabéns mesmo, o projeto ficou muito bom!"},
    {name: "Mônica Aran", description: "Ficou show Gustavo! O site ficou perfeito e transmitiu o que eu quero passar para os meus clientes!"},
    {name: "Eric Souza dos Santos", description: "Trabalhar com Gustavo no Hackathon da FullDev foi essencial para o sucesso do projeto. Como designer UI/UX e desenvolvedor front-end, ele criou uma identidade visual original e de alta qualidade usando React e Next.js. Proativo, comunicativo e dedicado, sua contribuição foi fundamental para conquistarmos o primeiro lugar. Recomendo Gustavo sem dúvida para qualquer desafio!"},
    {name: "Carlos Augusto", description: "Colaborar com Gustavo no Hackathon Ato 5 da Fulldev foi incrível! Sua visão criativa e habilidade em transformar ideias em interfaces intuitivas elevaram o projeto. Tenho certeza de que ele fará a diferença em qualquer equipe!"},
    {name: "Gabriel Dias Santiago", description: "Minha sincera gratidão ao Gustavo pelo excelente trabalho como designer e desenvolvedor front-end. Sua criatividade e técnica foram impecáveis. Foi um prazer trabalhar com você e espero colaborarmos novamente no futuro!"},
    {name: "Camila Oliveira", description: "Simplismente amei, entrega de qualidade, 100% atencioso e solicito desde o início até o final do desenvolvimento do meu site."},
    {name: "Rafael Perrone", description: "Irmão, gostei muito do seu trabalho, muito solicito, muito obrigado mesmo o seu trabalho é top, design e desenvolvimento impecáveis."}
];

export function Testimonials() {
    return (
        <section className="px-4 sm:px-8 lg:px-16" id="Testimonial">
            <div className="mt-40 text-center">
                <h1 className="lg:text-3xl text-2xl font-semibold" data-aos="fade-up">
                    O que dizem sobre o meu <span className="text-blue-500">trabalho</span>
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-10 gap-12 lg:gap-32">
                <aside className="text-center lg:text-left max-w-md lg:max-w-sm">
                    <h1 className="text-2xl lg:text-3xl font-medium mt-20" data-aos="flip-left">
                        Transformando ideias em <span className="text-blue-500">Produtos Digitais</span>
                    </h1>
                    <p className="mt-6 text-gray-400 font-secondary text-sm lg:text-base">
                        Descubra como transformei desafios em sucesso para meus clientes. Com um compromisso inabalável com a qualidade e inovação, cada site que desenvolvo é uma porta aberta para novas oportunidades. Os depoimentos são um testemunho do impacto positivo que meu trabalho trouxe para cada um deles, ultrapassando expectativas e estabelecendo novos padrões em experiência digital.
                    </p>
                </aside>
                <article className="w-full max-w-lg">
                    <Carousel orientation="horizontal" opts={{ align: "center", loop: true }}>
                        <CarouselContent>
                            {TestimonialsData.map((testimonial, index) => (
                                <CarouselItem key={index} className="p-8 bg-gray-900 rounded-lg shadow-lg text-center">
                                    <div className="flex items-center justify-center gap-4">
                                        <FaUser className="text-blue-500 text-3xl" />
                                        <h1 className="text-xl font-medium text-gray-100">{testimonial.name}</h1>
                                    </div>
                                    <p className="mt-4 text-gray-500 font-secondary text-sm sm:text-base">
                                        "{testimonial.description}"
                                    </p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </article>
            </div>
        </section>
    );
}
