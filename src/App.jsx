import './App.css'
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import { Router, Route, Switch } from 'wouter'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} />
        </Switch >
        <Footer />
      </Router>
    </>
  )
}

export default App
