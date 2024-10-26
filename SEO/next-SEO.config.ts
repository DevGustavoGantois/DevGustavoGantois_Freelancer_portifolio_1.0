import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfólio de Gustavo Gantois - Desenvolvedor Web e Designer Criativo",
    description: "Conheça o portfólio de Gustavo Gantois, desenvolvedor web especializado em criação de sites, web design moderno e design criativo. Veja projetos de alta qualidade, serviços personalizados e soluções que transformam ideias em experiências digitais inovadoras.",
    openGraph: {
        type: "website",
        url: "https://devgustavogantois.vercel.app/",
        title: "Portfólio de Gustavo Gantois - Desenvolvimento Web e Design Criativo",
        description: "Descubra o portfólio de Gustavo Gantois, especialista em desenvolvimento web e design criativo, com projetos que destacam inovação e personalização. Transforme suas ideias em experiências digitais únicas com nossos serviços de criação de sites e web design.",
        images: [
            {
                url: "https://devgustavogantois.vercel.app/ImgLogo.svg",
                width: 400,
                height: 400,
                alt: "Logo de Gustavo Gantois - Desenvolvedor e Designer",
            },
        ],
        siteName: "Serviços Web | Desenvolvedor Gustavo Gantois",
    },
    twitter: {
        card: "summary_large_image",
        site: "@portifolioDevGustavoGantois",
        creator: "@devgustavogantois_",
        title: "Portfólio de Gustavo Gantois - Desenvolvimento Web e Design Criativo",
        description: "Explore o portfólio de Gustavo Gantois, desenvolvedor e designer criativo especializado em sites personalizados e design inovador para a web. Confira nossos projetos e soluções criativas.",
        images: ["https://devgustavogantois.vercel.app/ImgLogo.svg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};
