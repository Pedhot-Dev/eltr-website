import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="relative h-[85vh] -mt-20 flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Premium Transportation <br />
                        <span className="text-primary">Redefined.</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl leading-relaxed"
                    >
                        Reliable, comfortable, and professional taxi services for your everyday needs. Experience the difference with El Transporters.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to="/contact" className="btn btn-primary group">
                            Get a Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/fleet" className="btn btn-secondary text-white hover:text-black hover:border-transparent">
                            View Fleet
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
