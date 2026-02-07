import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary dark:bg-black text-gray-300 py-12 border-t-4 border-primary transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-primary text-xl font-bold uppercase tracking-wider">EL TRANSPORTERS</h3>
                        <p className="leading-relaxed text-sm text-gray-400">
                            Professional transportation services since 1998. Reliable, comfortable, and always on time.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-primary text-xl font-bold uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-primary hover:pl-2 transition-all duration-300 block">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary hover:pl-2 transition-all duration-300 block">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary hover:pl-2 transition-all duration-300 block">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-primary hover:pl-2 transition-all duration-300 block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-primary text-xl font-bold uppercase tracking-wider">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-primary w-5 h-5 shrink-0" />
                                <span>Las Colinas, Los Santos</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5 shrink-0" />
                                <span>info@eltransporters.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center pt-8 border-t border-gray-800 text-sm text-gray-500">
                    <p>&copy; {currentYear} El Transporters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
