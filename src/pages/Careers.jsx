import { Briefcase, UserPlus, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const Careers = () => {
    const jobs = [
        {
            id: 1, title: 'Taxi Driver', location: 'Las Colinas, Los Santos', type: 'Full-time / Part-time',
            description: 'Join our team of professional drivers. We offer competitive rates, flexible schedules, and a supportive work environment.',
            requirements: ['Valid Driver\'s License', 'Clean Driving Record', 'Customer Service Skills', 'Knowledge of City Routes']
        },
        {
            id: 2, title: 'Dispatcher', location: 'Las Colinas, Los Santos', type: 'Full-time',
            description: 'Coordinate our fleet and ensure smooth operations. You will be the bridge between our customers and drivers.',
            requirements: ['Excellent Communication Skills', 'Multitasking Ability', 'Computer Literacy', 'Problem-Solving Skills']
        },
        {
            id: 3, title: 'Fleet Manager', location: 'Las Colinas, Los Santos', type: 'Full-time',
            description: 'Oversee the maintenance and management of our vehicle fleet. Ensure all vehicles are in top condition and safe for our passengers.',
            requirements: ['Experience in Fleet Management', 'Technical Knowledge of Vehicles', 'Organizational Skills', 'Leadership Abilities']
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    return (
        <div className="bg-white dark:bg-zinc-900 transition-colors duration-300 min-h-screen">
            {/* Hero */}
            <div className="relative py-24 -mt-20 pt-40 bg-cover bg-center text-white text-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
                    >
                        Join Our Team
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-200">
                        Build your career with El Transporters.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* Intro Grid */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-secondary dark:text-white">Why Work With Us?</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <UserPlus size={40} />, title: "Supportive Culture", desc: "We believe in treating our employees with respect and providing a positive work environment." },
                            { icon: <Briefcase size={40} />, title: "Growth Opportunities", desc: "We encourage professional growth and offer opportunities for advancement within the company." },
                            { icon: <FileText size={40} />, title: "Competitive Benefits", desc: "We offer competitive salaries and benefits packages to attract and retain the best talent." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-xl text-center hover:bg-white dark:hover:bg-zinc-700 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Job Listings */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-10 text-center text-secondary dark:text-white">Current Openings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                            <motion.div
                                key={job.id}
                                variants={itemVariants}
                                className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-xl p-8 flex flex-col hover:border-primary dark:hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-xl group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-accent dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-2 py-1 rounded">
                                        {job.type}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                    {job.location}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">{job.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-bold uppercase text-gray-400 dark:text-gray-500 mb-2">Requirements:</h4>
                                    <ul className="space-y-1">
                                        {job.requirements.map((req, index) => (
                                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full btn btn-secondary mt-auto">Apply Now</button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Careers
