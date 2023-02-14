import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/Sidebar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={LogoSubtitle} alt="Rohit" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rohit-mengji/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Rohitmengji"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/message/JBSAMKLYREMLB1"
          >
            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:rohitmengji403@gmail.com"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
