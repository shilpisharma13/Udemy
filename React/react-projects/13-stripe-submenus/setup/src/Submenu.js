import React, { useState, useRef, useEffect } from 'react'
import { FaColumns } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    const submenu = container.current //gives the node
    const { centerPos, bottomPos } = location
    submenu.style.left = `${centerPos}px`
    submenu.style.top = `${bottomPos}px`

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <h3>{page}</h3>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
