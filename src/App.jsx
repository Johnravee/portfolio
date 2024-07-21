// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Homepage from './components/homepage'
import Footer from './components/footer'
import About from './components/about'
import RecentWorks from './components/rctworks'
import Works from './components/works'
import Background from './components/background'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomepageWithRecentWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/background" element={<Background />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const HomepageWithRecentWorks = () => {
  return (
    <>
      <Homepage />
      <RecentWorks />
    </>
  )
}

export default App
