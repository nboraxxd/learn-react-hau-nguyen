import React, { useState } from 'react'
import TodoList from 'features/Todo/components/TodoList/TodoList'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

function ListPage() {
  const initTodoList = [
    { id: 1, title: 'Eat', status: 'pending' },
    { id: 2, title: 'Sleep', status: 'completed' },
    { id: 3, title: 'Code', status: 'pending' },
  ]

  const location = useLocation()
  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    console.log(params)

    return 'all'
  })

  const handleTodoItemClick = (todoItem, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList]

    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'pending' ? 'completed' : 'pending',
    }

    // update todo list
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all')
  }

  const handleShowPendingClick = () => {
    setFilteredStatus('pending')
  }

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed')
  }

  const renderedTodoList = todoList.filter(
    (todoItem) => filteredStatus === 'all' || filteredStatus === todoItem.status
  )

  return (
    <div className="todo">
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoItemClick={handleTodoItemClick}></TodoList>
      <div className="todo-filter">
        <button className="todo-button" onClick={handleShowAllClick}>
          Show All
        </button>
        <button className="todo-button" onClick={handleShowPendingClick}>
          Show Pending
        </button>
        <button className="todo-button" onClick={handleShowCompletedClick}>
          Show Completed
        </button>
      </div>
    </div>
  )
}

export default ListPage
