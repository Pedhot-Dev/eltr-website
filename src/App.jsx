import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="fleet" element={<Fleet />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
