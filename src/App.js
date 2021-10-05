import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ServicesAll from './pages/ServicesAll/ServicesAll'
import NotFound from './pages/NotFound/NotFound'
import Contact from './pages/Contact/Contact'
import Applied from './pages/Applied/Applied'

const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/services' exact>
            <ServicesAll></ServicesAll>
            </Route>
          <Route path='/about' exact>
            <About></About>
            </Route>
            <Route path='/contact-us' exact>
              <Contact></Contact>
            </Route>
            <Route path='/applied' exact>
              <Applied></Applied>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
            </Route>
        </Switch>
      </Container>
    </Layout>
  )
}

export default App
