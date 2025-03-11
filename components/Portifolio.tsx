import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Portifolio() {
    return (
        <section className="relative" id="Portifolio">
            <div className="flex items-center justify-center top-0 left-1/2 -translate-x-1/2 -mt-24 -z-10 absolute">
                <Image src="/ImgBg.svg" width={1100} height={200} quality={100} alt="Background" />
            </div>
            <div className="flex items-center flex-col justify-center mb-8">
                <p className="text-center text-gray-500 font-secondary">Conheça alguns dos meus</p>
                <h1 className="text-center animate-pulse text-[45px] text-blue-500">Projetos</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 mb-12 mt-6 text-center">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project1.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next| Typescript | TailwindCSS | Framer Motion </CardDescription>
                        <CardFooter className="flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://novasce-website-next-tailwind-css.vercel.app/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                        </div>
                        </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-up">
                    <CardHeader>
                        <CardTitle className="text-blue-500 mb-12 mt-6 text-center">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project2.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next| Typescript | TailwindCSS | Framer Motion </CardDescription>
                    <CardFooter className="flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://msampaio-adv.vercel.app/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                        </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 mb-12 mt-6 text-center">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project3.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com HTML | CSS | JavaScript | AOS Animation </CardDescription>
                    <CardFooter className="flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://lp-sf-team-consultoria.vercel.app/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonials" className="text-white">Depoimento do cliente</a></Button>
                        </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-up">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project4.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com HTML | CSS | JavaScript</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://clinicahayashi.app.br/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Blog</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project5.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next | Typescript | Tailwind | Three.js</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://space-blog-mu.vercel.app/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project6.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next | Typescript | Tailwind | AOS Animation</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://devstreak.vercel.app/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project7.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next | Typescript | Tailwind | AOS Animation</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://www.psimonicaaran.com.br/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-down">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Landing Page | Dashboard Fullstack</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project8.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next | Typescript | Tailwind | Java | AOS Animation</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://fulldev-seven.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaZTMuQeNDinOGKcBt59yV2zoTk5G0r3EB5lYZB2tXQvOoB4sH5JM1rn0oo_aem__QaWJekN-srZCm1KDCDSzQ" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
                <Card data-aos="fade-up">
                    <CardHeader>
                        <CardTitle className="text-blue-500 text-center mt-6 mb-12">Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-center mb-12">
                    <Image src="/Project9.png" width={600} height={400} quality={100} alt="" className="float"/>
                    </div>
                    <CardDescription className="text-gray-500 text-center mt-4 mb-10 font-secondary">Projeto desenvolvido com Next | Typescript | Tailwind | AOS Animation</CardDescription>
                    <CardFooter className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Button variant="ghost"><a href="https://rafaelperrone.com.br/" target="_blank" className="text-white">Visualizar</a></Button>
                        <Button><a href="#Testimonial" className="text-white">Depoimento do cliente</a></Button>
                    </div>
                    </CardFooter>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
