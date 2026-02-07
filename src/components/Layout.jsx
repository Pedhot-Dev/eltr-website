import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'

const Layout = () => {
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
