import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header className='flex justify-center w-full min-w-80 bg-zinc-700'>
      <nav className="py-2 px-8 w-3/5">
        <ul className="flex justify-center text-[1.6rem] gap-4">
          <li>
            <Link to="/" className={`link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`link ${location.pathname === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className={`link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
