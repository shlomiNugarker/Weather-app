import { Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Favorites } from './pages/Favorites'
import { ItemApp } from './pages/ItemApp'

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="container main">
          <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/" exact component={ItemApp} />
          </Switch>
        </main>
        <footer className="app-footer">
          <section className="container">&copy; coffeerights 2022</section>
        </footer>
      </div>
    </Router>
  )
}

export default App
