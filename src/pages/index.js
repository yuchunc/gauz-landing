import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import Sidebar from '../components/Sidebar';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = e => {
  e.preventDefault()
  const form = e.target
  const inputs = new Map(form.querySelectorAll("input").map((elem) => [elem.name, elem.value]))
  const valueObj = Object.fromEntries(inputs)
  fetch('/', {
    method: "POST",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...valueObj
    })
  }).then(() => console.log("success"))
    .catch(error => {
      console.log("form err", error)
      alert("Sorry, something went wrong. :(")
    })
}

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Gauz</h1>
          <p>
            We execute effective Google Adwords and Shopping Campaigns for you!
          </p>
          <ul className="actions">
            <li>
              <AnchorLink href="#service" className="button">
                Learn more
              </AnchorLink>
            </li>
          </ul>
        </div>
      </section>

      <section id="service" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Sed erat ullam corper</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>Veroeros quis lorem</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <AnchorLink href="#team" className="button">
                Learn more
              </AnchorLink>
            </li>
          </ul>
        </div>
      </section>

      <section id="team" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Feugiat consequat</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Ultricies aliquam</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="contact" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <div className="split style1">
            <section>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="dontusethis"
                onsubmit={handleSubmit}
              >
                <div className="fields">
                  <div style={{display: "hidden"}}>
                    <input type="hidden" name="dontusethis" id="dontusethis"/>
                  </div>
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email or Phone #</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" className="button submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    12345 Somewhere Road #654
                    <br />
                    Nashville, TN 00000-0000
                    <br />
                    USA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="mailto:natalie@gauz.io">hello@gauz.io</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(000) 000-0000</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-linkedin">
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
