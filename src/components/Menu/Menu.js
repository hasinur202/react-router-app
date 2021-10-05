import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Menu.css'
import logo from '../../images/logo-2.png'

const Menu = () => {
  return (
    <Container className="fullWidth">
      <header className='container-lg d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-1 border-bottom'>
        <LinkContainer to='/'>
          <span>
            <img className="leftLogo" src={logo} alt="Logo" />
              <strong className="siteName">INSPIRE INSTITUTE</strong>
            </span>
        </LinkContainer>
        <Nav>
          <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 myMenu'>
            <li>
              <LinkContainer to='/'>
                <Nav.Link className='nav-link px-2 link-secondary'>Home</Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/services'>
                <Nav.Link className='nav-link px-2 link-secondary'>Services</Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link px-2 link-secondary'>About</Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to='/contact-us'>
                <Nav.Link className='nav-link px-2 link-secondary'>Contact</Nav.Link>
              </LinkContainer>
            </li>
          </ul>

          {/* <div className='col-md-3 text-end'>
            <LinkContainer to='/'>
              <button type='button' className='btn btn-outline-info text-right me-2'>
                Documentation
              </button>
            </LinkContainer>
          </div> */}
        </Nav>
      </header>
    </Container>
  )
}

export default Menu
