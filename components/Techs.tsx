import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function Techs() {
    return (
        <div className="flex justify-center items-center flex-col" id="Skills">
            <div className="mt-40">
            <p className="text-gray-500 font-secondary text-center">Conheça as minhas</p>
            <h1 className="text-center text-xl lg:text-[28px]" data-aos="fade-up">Hard<span className="text-blue-500 animate-bounce">Skills</span></h1>
            </div>
            <div>
                <div className="mt-12 mb-12" data-aos="zoom-in">
                    <div className="flex flex-col lg:text-md xl:text-xl justify-center items-center lg:flex-row gap-10 ">
                <span className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">HTML</span>
                <span className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">CSS</span>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">SCSS</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">JavaScript</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">TypeScript</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">React</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">Next</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">TailwindCSS</p>
                <p className="text-gray-800 uppercase hover:text-blue-500 hover:scale-[1.2] duration-700 transition-all">Git</p>
                </div>
                </div>
                <div className="p-4 lg:p-12 flex justify-center items-center">
                <Card className="w-full h-full">
                    <CardHeader>
                        <CardTitle className="text-center mb-4 lg:text-2xl text-gray-300 font-medium">Nivel de Habilidade</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">Html</p>
                            <Progress value={100} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">CSS</p>
                            <Progress value={100} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">SCSS</p>
                            <Progress value={80} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">JavaScript</p>
                            <Progress value={90} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">Typescript</p>
                            <Progress value={80} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">REACT.JS</p>
                            <Progress value={100} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">Next.js</p>
                            <Progress value={80} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">Tailwindcss</p>
                            <Progress value={90} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                            <p className="uppercase text-gray-100">Git</p>
                            <Progress value={50} />
                        </div>
                    </CardContent>    
                </Card>
                </div>
            </div>
        </div>
    )
}