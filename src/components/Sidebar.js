import React, { Component } from 'react';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      tabs: [
        { content: 'Welcome', href: '#intro' },
        { content: 'Service', href: '#service' },
        { content: 'Team', href: '#one' },
        { content: 'Get in touch!', href: '#contact' },
      ],
    };

    this.onTabSelect = this.onTabSelect.bind(this);
  }

  onTabSelect(index) {
    this.setState({ activeTab: index });
  }

  render() {
    const { tabs, activeTab } = this.state;
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <a
                      href="#/"
                      className={i === activeTab ? 'active' : ''}
                      onClick={e => {
                        e.preventDefault();
                        this.onTabSelect(i);
                      }}
                    >
                      {content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
