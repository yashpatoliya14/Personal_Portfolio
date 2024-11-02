import "../index.css";
import Typewriter from "typewriter-effect";

export default function Section0() {
    return (
        <>
            <div
                className="flex flex-col lg:flex-row items-center justify-center h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://image.slidesdocs.com/responsive-images/background/simple-creative-portfolio-white-powerpoint-background_084a7ea3b9__960_540.jpg')",
                }}
            >
                {/* Text Section */}
                <div className="flex flex-col items-center justify-center text-center px-4 lg:p-8 lg:w-[50%]">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-800 font-sans">Hello, I'm Yash</p>
                    
                    {/* Typewriter Effect for Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mt-2 md:mt-4 font-sans">
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Software Engineer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    
                    <p className="section0Header text-base md:text-lg text-gray-700 py-4 md:py-6 max-w-2xl font-sans">
                        "Hi, I'm Yash—a Web Developer and Software Engineer dedicated to building impactful digital experiences. I specialize in creating custom websites and full-stack applications that drive results. Let's turn your ideas into reality!"
                    </p>
                    
                    <a
                        href="#contact"
                        className="btn41-43 btn-41 card px-6 py-3 mt-4 text-lg font-medium text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md transition duration-300"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Image Section */}
                <div className="p-6 md:p-8 lg:pb-48 lg:w-[50%] flex justify-center lg:justify-start">
                    <img
                        src="../../public/image/heroSection image.png"
                        data-aos="ease-in"
                        className="w-96 md:w-96 lg:w-[450px] imgAnimation"
                        alt="Hero"
                    />
                </div>
            </div>
        </>
    );
}
