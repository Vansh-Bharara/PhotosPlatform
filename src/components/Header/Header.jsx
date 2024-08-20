import React from 'react'
import { Container, Logo, LogoutBtn } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-4 shadow-md bg-gradient-to-r from-gray-700 to-gray-900'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-6'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='inline-block px-6 py-2 text-white font-medium rounded-full transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
