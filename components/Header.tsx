import { FaGlobe } from "react-icons/fa";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {

    return (
        <header className="fixed top-4 left-0 right-4 z-50 ">
            <div className="fixed top-5 right-4">
                <Sheet>
                    <SheetTrigger>
                        <FaGlobe className="text-3xl lg:text-4xl text-white hover:text-blue-500 hover:scale-[1.2] transition-all duration-700 animate-spin" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <div className="flex flex-col items-center gap-6 mt-20">
                                <SheetTitle><a href="#Home" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Home</a></SheetTitle>
                                <SheetTitle><a href="#services" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Serviços</a></SheetTitle>
                                <SheetTitle><a href="#Portifolio" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Trabalhos</a></SheetTitle>
                                <SheetTitle><a href="#Skills" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Skills</a></SheetTitle>
                                <SheetTitle><a href="#Testimonial" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Depoimentos</a></SheetTitle>
                                <SheetTitle><a href="#FAQ" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">FAQ</a></SheetTitle>
                                <SheetTitle><a href="#About" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Sobre mim</a></SheetTitle>
                                <SheetTitle><a href="#Contact" className="text-white font-medium hover:text-blue-500 duration-700 transition-all">Contato</a></SheetTitle>
                            </div>
                        </SheetHeader>
                        <div className="flex flex-col items-center text-center gap-2 mt-20 lg:mt-80">
                            <SheetDescription className="font-secondary text-gray-500">Telefone/Whatsapp: +55 (71) 99958-8246</SheetDescription>
                            <SheetDescription className="font-secondary text-gray-500">Instagram: @devgustavogantois_</SheetDescription>
                            <SheetDescription className="font-secondary text-gray-500">Linkedin: Gustavo Caria</SheetDescription>
                            <SheetDescription className="font-secondary text-gray-500">Tik Tok: @devgustavogantois</SheetDescription>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
