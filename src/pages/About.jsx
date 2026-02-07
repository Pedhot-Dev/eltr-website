import { Users, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative py-24 -mt-20 pt-40 bg-cover bg-center bg-fixed text-white text-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-primary"
                    >
                        About El Transporters
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200"
                    >
                        A legacy of excellence, from Bogotá to Los Santos.
                    </motion.p>
                </div>
            </div>

            {/* History Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary dark:text-white">Our History</h2>
                        <div className="w-16 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-accent dark:text-gray-200">The Beginning</h3>
                            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                El Transporters was founded in 1998 in Bogotá, Colombia, by <strong className="text-secondary dark:text-white">Chico Emilio Navarro</strong>.
                                His motivation came from a lifelong passion for taxi cars and a vision to revolutionize the transportation industry.
                            </p>
                            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                Driven by dedication and hard work, Chico built the foundation of what would become a leading transportation service.
                                He wasn't alone in this journey; he was joined by his trusted business colleagues in Santa Fe:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300 font-medium">
                                <li>Isidoro Gallo</li>
                                <li>Vicente Gutiérrez</li>
                                <li>Phillip Javier</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Together, these four men established El Transporters with strong intentions and a shared goal: to grow the business
                                through unwavering dedication and service excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Vintage Taxi"
                                className="w-full h-auto rounded-lg shadow-2xl border-4 border-white dark:border-zinc-800"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expansion Section */}
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">International Expansion</h2>
                        <div className="w-16 h-1 bg-white mx-auto opacity-50"></div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Users size={48} className="text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Key Leaders</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To achieve global reach, Chico entrusted two key employees: <strong className="text-white">Emmanuel Munoz</strong> and <strong className="text-white">Giorgian Ugarte</strong>.
                                They were assigned the monumental task of extending our business connections internationally.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Globe size={48} className="text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">New Horizons</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Their efforts led to our first major international expansion in <strong className="text-white">Los Santos</strong>, a globally well-known country.
                                This marked a significant milestone in our journey.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Award size={48} className="text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Establishing Presence</h3>
                            <p className="text-gray-300 leading-relaxed">
                                A new branch was established in <strong className="text-white">Las Colinas, Los Santos</strong>. Today, El Transporters serves the community
                                with the same passion and reliability that started it all in Bogotá.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
