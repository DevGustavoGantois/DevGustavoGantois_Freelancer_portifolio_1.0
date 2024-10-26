import Image from "next/image";

export function Featured() {
    return (
        <section className="flex justify-center items-center">
                <div className="absolute -z-10 mt-[70rem]">
                    <Image src="/BgBlur.svg" width={800} height={200} quality={100} alt="" />
                </div>
                <div className="flex justify-center flex-col text-center lg:text-start lg:flex-row gap-8 lg:gap-32 text-[16px] lg:text-[18px] xl:text-[27px] z-10 relative">
                    <p className=" text-gray-800 hover:text-blue-500 duration-700 transition-all hover:scale-[1.2]">FRONT-END</p>
                    <p className=" text-gray-800 hover:text-blue-500 duration-700 transition-all hover:scale-[1.2]">WEB DESIGN</p>
                    <p className=" text-gray-800 hover:text-blue-500 duration-700 transition-all hover:scale-[1.2]">FIGMA</p>
                    <p className=" text-gray-800 hover:text-blue-500 duration-700 transition-all hover:scale-[1.2]">DEVELOPMENT</p>
                    <p className=" text-gray-800 hover:text-blue-500 duration-700 transition-all hover:scale-[1.2]">UI DESIGNER</p>
                </div>
        </section>
    )
}