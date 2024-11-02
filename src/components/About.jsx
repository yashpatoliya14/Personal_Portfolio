import "../index.css";

export default function About() {
    return (
        <>
            <div
                id="about"
                className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-20  bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://image.slidesdocs.com/responsive-images/background/simple-cartoon-abstract-portfolio-white-powerpoint-background_0767cd76d5__960_540.jpg')",
                }}
            >
                {/* Profile Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-12 lg:mb-0">
                    <img
                        src="../../public/image/profile.jpg"
                        alt="Profile"
                        className="rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg"
                        data-aos="fade-right"
                    />
                </div>

                {/* About Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Hello! I’m Yash, a passionate Web Developer and Software Engineer committed to creating impactful digital experiences. My journey in web development has been driven by a love for crafting visually appealing, user-centered websites and applications that don’t just look great but also deliver outstanding functionality and performance.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                        With expertise in both front-end and back-end development, I specialize in building custom websites, web applications, and solutions tailored to each client's unique needs. From creating responsive, intuitive designs to optimizing backend performance, I aim to deliver work that’s clean, efficient, and effective.
                    </p>
                </div>
            </div>
        </>
    );
}
