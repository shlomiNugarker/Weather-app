// import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function AppHeader(props) {
  // const { loggedInUser } = useSelector((state) => state.userModule)

  return (
    <header className="app-header">
      <section className="container">
        <h3 className="logo">Weather app</h3>

        <nav>
          <NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="my-active" to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </section>
    </header>
  )
}
