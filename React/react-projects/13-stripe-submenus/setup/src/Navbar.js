import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const btnPos = e.target.getBoundingClientRect()
    const centerPos = (btnPos.left + btnPos.right) / 2
    const bottomPos = btnPos.bottom - 3

    openSubmenu(page, { centerPos, bottomPos })
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) closeSubmenu()
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn' onMouseOver={displaySubmenu}>
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
