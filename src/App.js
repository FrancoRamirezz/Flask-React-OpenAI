import './App.css';
import React from 'react';
 // this is the connection js part needed for the connection
import Navbar from './Navbar';
import {BrowserRouter, Link} from "react-router-dom"
import Usepic from "./image/Usepic.JPG"
// make sure that the app is the same as the file name


function App() {

const reaction= (e) =>{

//addEventListener(e)

}


    // because 
    

return (

  <div>
     <header className="header">
        <div className="logo">
          <img src={Usepic} />
        </div>
<Navbar>
        <nav className="nav">
          <ul>
            <li>
              < Link href="/Projects">Projects</Link>
            </li>
            <li>
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              < Link href = "/About">About</Link>
            </li>
          </ul> 
        </nav>
        </Navbar>
      </header>

      <section className="hero">
        <h1 className="heroTitle">BudBuddy </h1>
        <p className="heroDescription">
        Our mission is to make Medical Cannabis far more accessible and build a strong connection with other dispensary

        </p>
        <a href="#" className="heroButton">Get Started</a>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="featuresGrid">
          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-automation.svg" />
            </svg>
            <h3>Automation</h3>
            <p>Automate repetitive tasks and free up your team to focus on strategic work.</p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-efficiency.svg" />
            </svg>
            <h3>Efficiency</h3>
            <p>Improve efficiency and reduce costs with our AI-powered solutions.</p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-insights.svg" />
            </svg>
            <h3>Insights</h3>
            <p>Gain actionable insights from your data to make better business decisions.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to get started?</h2>
        <a href="#" className="ctaButton">Sign Up for Free</a>
      </section>

  </div>

  )
  }


export default App;
;

copy this into the new about page

<TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
  

</div>

<div className='mt-8'>
  {skills.find((t) => t.id ===tab).content}

</div>












