import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ServicesAll from './pages/ServicesAll/ServicesAll'
import NotFound from './pages/NotFound/NotFound'

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
          <Route path="*">
            <NotFound></NotFound>
            </Route>
        </Switch>
      </Container>
    </Layout>
  )
}

export default App
