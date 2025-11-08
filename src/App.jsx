import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden flex flex-col items-center w-full min-w-80 min-h-screen h-screen p-0 m-0">
        <div className='absolute w-screen min-w-80 h-screen inset-0 shadow-[inset_0_0_120px_50px_rgba(0,0,0,0.8)] pointer-events-none'></div>

        <Header />

        <main role="main" id='main' className="flex-grow w-3/5 min-w-80 bg-zinc-950/90 backdrop-blur-md rounded-2xl shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
