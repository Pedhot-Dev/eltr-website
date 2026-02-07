import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for contacting El Transporters. We will get back to you shortly!')
        e.target.reset()
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300 min-h-screen">
            <div className="relative py-24 -mt-20 pt-40 bg-cover bg-center text-white text-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-200">
                        We are here to help. Reach out to us for any inquiries.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <motion.div
                    className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Info Section */}
                    <div className="bg-gradient-to-br from-secondary to-black text-white p-12 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h2>
                        <p className="text-gray-300 mb-10 leading-relaxed">
                            Whether you need a ride, have a question about our services, or want to join our team, we'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Headquarters</h3>
                                    <p className="text-gray-400">Las Colinas, Los Santos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                                    <p className="text-gray-400">info@eltransporters.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                                    <p className="text-gray-400">24/7 Service Available</p>
                                    <p className="text-gray-400">Office: Mon-Fri, 9am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-12 lg:w-2/3 bg-gray-50 dark:bg-zinc-800">
                        <h2 className="text-2xl font-bold mb-8 text-secondary dark:text-white">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input
                                        type="text" id="name" required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input
                                        type="email" id="email" required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <input
                                    type="text" id="subject" required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Inquiry about services"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message" rows="5" required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full md:w-auto">Send Message</button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
