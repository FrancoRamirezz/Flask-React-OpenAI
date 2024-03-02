import Image from 'next/image'
import Link from 'next/link'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

export default function Home() {
  return (
    <main className = "flex  min-h-screen flex-col bg-[#121212]" >
    <div className="container">
      <header className="header">
        <div className="logo">
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link href="/Projects">Projects</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              < Link href = "/About">About</Link>
            </li>
            <li>
             < Link href = "/resume" >Resume</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1 className="heroTitle">Personal Project </h1>
        <p className="heroDescription">
        Hello my name is Franco, and I am a asprining software developer who's loves to learn multidispinacires and how they overlap with each other For example, conginitve science, math, information techology, CS
        </p>
        <a href="#" className="heroButton">Hope to Connect</a>
      </section>

      <section className="features">
        <h2>Key Characterstics of me</h2>
        <div className="featuresGrid">
          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-automation.svg" />
            </svg>
            <h3>Tech Interest </h3>
            <p>New programming languages,Cloud engineering, AI,System Architecture,Open Source,and Web Dev </p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-efficiency.svg" />
            </svg>
            <h3>Future Projects</h3>
            <p>More Open Source projects, AI projects,and I'm currently building a SAAS product </p>
          </div>

          <div className="feature">
            <svg width="50" height="50">
              <use xlinkHref="/icon-insights.svg" />
            </svg>
            <h3>Exciting Interests</h3>
            <p>Writing short fanatasy stories,playing the guitar, and reading literture from diffrent parts of the world </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Hope you enjoy it</h2>
        <a href="#" className="ctaButton">Ready to connect</a>
      </section>
    </div>
    </main>
  );
};
