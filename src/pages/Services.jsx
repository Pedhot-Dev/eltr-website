import { Car, Briefcase, Plane, Map, Clock, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
    const services = [
        { id: 1, title: 'City Taxi Services', description: 'Quick and reliable transportation within the city limits. Perfect for daily commutes or running errands.', icon: <Car size={40} /> },
        { id: 2, title: 'Corporate Transportation', description: 'Premium service for business professionals. We ensure you arrive at your meetings on time and in style.', icon: <Briefcase size={40} /> },
        { id: 3, title: 'Airport Transfers', description: 'Stress-free travel to and from the airport. We track your flight to ensure timely pickups.', icon: <Plane size={40} /> },
        { id: 4, title: 'Long Distance Taxi', description: 'Comfortable rides for inter-city travel. Enjoy a relaxing journey with our experienced drivers.', icon: <Map size={40} /> },
        { id: 5, title: '24/7 Customer Support', description: 'We are always here for you. Our support team is available round the clock to assist you.', icon: <PhoneCall size={40} /> },
        { id: 6, title: 'Event Transportation', description: 'Reliable transport for weddings, parties, and special events. We handle the logistics so you can enjoy.', icon: <Clock size={40} /> },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300 min-h-screen">
            {/* Hero */}
            <div className="relative py-24 -mt-20 pt-40 bg-cover bg-center text-white text-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517153192978-b8e3ad53cb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200"
                    >
                        Comprehensive transportation solutions tailored to your needs.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-colors duration-300 flex flex-col items-start group"
                        >
                            <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
                            <button className="text-primary font-bold uppercase tracking-wider border-b-2 border-primary hover:text-accent dark:hover:text-white hover:border-accent dark:hover:border-white transition-all pb-1">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Services
