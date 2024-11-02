import "../index.css";

const services = [
    {
        title: "Web Development",
        description: "Creating responsive and visually appealing websites tailored to your business needs. I utilize the latest technologies to ensure high performance and user satisfaction.",
        icon: "🌐" // You can replace this with an SVG or icon component
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces that enhance user experience. My goal is to make your product not only functional but also delightful to use.",
        icon: "🎨"
    },
    {
        title: "SEO Optimization",
        description: "Optimizing your website for search engines to improve visibility and drive organic traffic. I use best practices to ensure your site ranks well.",
        icon: "📈"
    },
    {
        title: "Content Creation",
        description: "Crafting engaging content that resonates with your audience. Whether it's website copy, blog posts, or social media content, I can help tell your story.",
        icon: "✍️"
    },
    {
        title: "Consulting",
        description: "Providing expert advice to help you navigate the digital landscape. From project planning to technology selection, I'm here to assist you.",
        icon: "🗣️"
    }
];

export default function Services() {
    return (
        <div id="services" className="py-16 px-6 lg:px-24 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-red-500 mb-12">My Services</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
