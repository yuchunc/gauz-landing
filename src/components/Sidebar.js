import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy'

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
            offset={ -40 }
          >
            {tabs.map( tab => (
              <li>
                <a href={`#${tab.id}`} id={`${tab.id}-nav`}>
                    {tab.content}
                </a>
              </li>
            ))}
          </Scrollspy>
        </nav>
      </div>
    </section>
  )
}

class SidebarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { content: 'Welcome', id: 'intro' },
      { content: 'Service', id: 'service' },
      { content: 'Team', id: 'team' },
      { content: 'Get in Touch', id: 'contact' },
    ]

    this.onTabSelect = this.onTabSelect.bind(this);
    this.ids = this.state.map( t => t.id )
  }

  render() {
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <Scrollspy
              items={ this.ids }
              currentClassName="active"
            >
                {this.state.map( tab => (
                  <li>
                    <a href={`#${tab.id}`} id={`${tab.id}-nav`}>
                        {tab.content}
                    </a>
                  </li>
                ))}
                </Scrollspy>
              </nav>
            </div>
          </section>
    );
  }
}

export default Sidebar;
