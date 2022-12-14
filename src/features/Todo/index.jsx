import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'
import { Router } from '@material-ui/icons'
import ListPage from './pages/ListPage/ListPage'
import DetailPage from './pages/DetailPage/DetailPage'
import NotFound from 'components/NotFound/NotFound'

function TodoFeature() {
  const match = useRouteMatch()

  return (
    <div>
      <h3>Todo shared UI</h3>
      <Switch>
        <Router path={match.path} component={ListPage} exact />
        <Router path={`${match.path}/:todoId`} component={DetailPage} exact />

        <Router component={NotFound} />
      </Switch>
    </div>
  )
}

export default TodoFeature
