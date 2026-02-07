import Hero from '../components/Home/Hero'
import { Link } from 'react-router-dom'
import { Shield, Clock, Map, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
    const features = [
        { icon: <Shield size={40} />, title: "Safe & Secure", desc: "Our drivers are vetted and our vehicles are regularly inspected to ensure your safety." },
        { icon: <Clock size={40} />, title: "Punctual Service", desc: "We value your time. Our drivers are always on time, every time." },
        { icon: <Map size={40} />, title: "Best Routes", desc: "Our drivers know the city inside out and use advanced navigation to avoid traffic." },
        { icon: <Star size={40} />, title: "Premium Experience", desc: "Enjoy a comfortable ride in our modern fleet of high-end vehicles." }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <>
            <Hero />

            <section className="py-20 bg-white dark:bg-zinc-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent dark:text-white">Why Choose El Transporters?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We provide the most reliable and premium transportation services in the region.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 hover:-translate-y-2 group"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white text-center">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative py-24 bg-accent text-white overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-black opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Ride with Us?</h2>
                        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">Book your ride today and experience the difference in comfort and style.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">Book Now</Link>
                            <Link to="/services" className="btn btn-secondary border-white text-white hover:bg-white hover:text-accent hover:border-white text-lg px-8 py-4">Our Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Home
