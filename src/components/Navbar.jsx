import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Car, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const { theme, toggleTheme } = useTheme()

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const isActive = (path) => {
        return location.pathname === path
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all'
    }

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/fleet', label: 'Fleet' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-secondary/95 dark:bg-black/95 backdrop-blur-sm shadow-lg border-b border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary tracking-wide" onClick={closeMenu}>
                    <Car className="w-8 h-8" />
                    <span>EL TRANSPORTERS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`px-3 py-2 font-medium transition-colors ${isActive(link.path)}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-800 transition-colors text-primary"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-800 transition-colors text-primary"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary dark:bg-zinc-900 border-b border-gray-700 overflow-hidden"
                    >
                        <ul className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`block px-4 py-3 rounded text-center ${location.pathname === link.path ? 'bg-primary/20 text-primary' : 'text-gray-300 hover:bg-gray-800'}`}
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
