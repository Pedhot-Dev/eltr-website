import { User, Briefcase, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Fleet = () => {
    const fleet = [
        {
            id: 1, name: 'Standard Sedan', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Comfortable and reliable for everyday city travel. Fits up to 4 passengers.', features: ['Air Conditioning', 'GPS Navigation', 'Spacious Trunk'], icon: <User size={24} />
        },
        {
            id: 2, name: 'Executive SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Spacious and luxurious, perfect for business trips or airport transfers with luggage.', features: ['Leather Seats', 'Wi-Fi Onboard', 'Extra Legroom'], icon: <Briefcase size={24} />
        },
        {
            id: 3, name: 'Premium Luxury', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'The ultimate in style and comfort. Make an impression with our top-of-the-line vehicles.', features: ['Premium Sound System', 'Refreshments', 'Privacy Glass'], icon: <Zap size={24} />
        },
        {
            id: 4, name: 'Minivan', image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Ideal for group travel or families. Comfortably seats up to 7 passengers.', features: ['Dual A/C', 'Child Seats Available', 'Ample Luggage Space'], icon: <User size={24} />
        }
    ]

    return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300 min-h-screen">
            <div className="relative py-24 -mt-20 pt-40 bg-cover bg-center text-white text-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                    >
                        Our Modern Fleet
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-200">
                        Choose the perfect vehicle for your journey.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {fleet.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-primary text-black font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-white transition-colors">
                                        Book This Car
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold text-accent dark:text-white">{vehicle.name}</h3>
                                    <div className="bg-primary/20 p-2 rounded-full text-primary">
                                        {vehicle.icon}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{vehicle.description}</p>
                                <div className="border-t border-gray-100 dark:border-zinc-700 pt-6">
                                    <h4 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 mb-3">Features:</h4>
                                    <ul className="space-y-2">
                                        {vehicle.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Fleet
