import { Link,NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Vanilla-1s-280px.png'
// import LogoSubtitle from '../../assets/images/Vanilla-1s-272px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome,  faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
     const [showNav, setShowNav] = useState(false);
     return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        {/* <img  className="sub-logo" src={LogoSubtitle} alt='hasan iqbal' /> */}
</Link>
<nav className={showNav ? 'mobile-show' : ''}>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" to="/">
<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
</NavLink>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" className="about-link" to="/about">
<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
</NavLink>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" className="contact-link" to="/contact">
<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

</NavLink>
<FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
{/* <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />

</NavLink> */}
</nav>
<ul>
 <li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/lakshy-gupta-8419221b0/"
    >
     <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
</a>
</li>
<li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://github.com/lakshy8734"
    >
     <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
</a>
</li>
<li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://www.instagram.com/_lakshy_gupta/"
    >
     <FontAwesomeIcon 
     icon={faInstagram} color="#4d4d4e" />
</a>
</li>
{/* <li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://youtube.com/@Coding_ding?si=lGaUu-ks7g40jhiz"
    >
     <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
</a>
</li> */}
</ul>
<FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
</div>
       
)
}

export default Sidebar