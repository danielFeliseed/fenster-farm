import { useState } from 'react';

export default function ({ contactFormRef }) {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState({ message: "", type: "" });
    const [toastIsVisible, setToastIsVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setToastIsVisible(false);
    
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus({ message: "Email sent successfully!", type: "success" });
            setFormData({ name: "", email: "", subject: "", message: "" });
          } else {
            setStatus({ message: "Failed to send email. Please try again later.", type: "error" });
          }
        } catch (error) {
          console.error(error);
          setStatus({ message: "An error occurred. Please try again later.", type: "error" });
        }
    
        setToastIsVisible(true);
        setTimeout(() => setToastIsVisible(false), 5000);
      };
    return (
        <section ref={contactFormRef} id="contact_form" className="py-5 sm:py-10 bg-white opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                Have questions? Want to learn more about our products? Fill out the form below, and we’ll get in touch!
            </p>
            <div className=" max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className=" text-black input bg-gray-100"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className=" text-black input bg-gray-100"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className=" text-black input bg-gray-100"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="text-black textarea bg-gray-100"
                    />
                    <button className="btn" type="submit">Send Message</button>
                </form>
            </div>
            {toastIsVisible && (
                <div className={`fixed bottom-10 right-10 p-4 rounded-lg shadow-lg transition-opacity duration-300
            ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    <div className="flex items-center">
                        {status.type === 'success' ? (
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414m-12.728 0l1.414-1.414M12 3v10m4.95 4.95a7 7 0 10-9.9 0" />
                            </svg>
                        )}
                        <p>{status.message}</p>
                        <button onClick={() => setToastIsVisible(false)} className="ml-4 text-lg font-bold">×</button>
                    </div>
                </div>
            )}

        </section>
    )
}