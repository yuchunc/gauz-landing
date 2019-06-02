import React from 'react';
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Sidebar = () => {
  const tabs = [
    { content: 'Welcome', id: 'intro' },
    { content: 'Service', id: 'service' },
    { content: 'Team', id: 'team' },
    { content: 'Get in Touch', id: 'contact' },
  ]

  const ids = tabs.map( t => t.id)

  const toggleCurrentNav = (id) => {
    document.querySelectorAll(`a[id$=-nav]`).forEach( elem => {
      elem.classList.remove("active")
    })

    document.getElementById(id + "-nav").classList.add("active")
  }

  return(
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={ ids }
            currentClassName="active"
            onUpdate={ elem => { toggleCurrentNav(elem.id) }}
          >
            {tabs.map( tab => (
              <li>
                <AnchorLink href={`#${tab.id}`} id={`${tab.id}-nav`}>
                    {tab.content}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;
