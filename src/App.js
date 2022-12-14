import NotFound from 'components/NotFound/NotFound'
import AlbumFeature from 'features/Album'
import TodoFeature from 'features/Todo'
import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      Header
      <p>
        <NavLink to="/home">Home page</NavLink>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Redirect from="/post-list/:postId" to="/posts/:postId" />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  )
}

export default App
