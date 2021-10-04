// router
import { BrowserRouter as Router} from 'react-router-dom'
// import background from '../../images/background.png';
import background from '../images/background.jpg'

// components
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <Menu />
      <main style={{ backgroundImage: `url(${background})` }}>{children}</main>
      <br></br>
      <Footer />
    </Router>
  )
}

export default Layout
