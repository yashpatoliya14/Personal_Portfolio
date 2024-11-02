import "../index.css";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3nrx2rt', 'template_ct6j1ub', form.current, {
            publicKey: '3_9-S8lD7uYHR4iQC',
        })
        .then(() => {
            console.log('SUCCESS!');
            setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        }, (error) => {
            console.log('FAILED...', error.text);
            // Optionally, set an error state here to display an error message to the user
        });
    };

    return (
        <div id="contact" className="py-16 px-6 lg:px-24 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-red-500 mb-12">Contact Me</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6" >
                <input type="hidden" name="access_key" value="58ad083c-4b2b-4d10-a7f2-20b22c040dd3"/>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                        <input 
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit"
                            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
