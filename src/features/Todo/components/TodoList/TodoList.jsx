import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './styles.scss'

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoItemClick: PropTypes.func,
}

TodoList.defaultProps = {
  todoList: [],
  onTodoItemClick: null,
}

function TodoList(props) {
  const handleTodoClick = (todoItem, index) => {
    if (!props.onTodoItemClick) return

    props.onTodoItemClick(todoItem, index)
  }

  return (
    <ul className="todo-list">
      {props.todoList.map((todoItem, index) => {
        return (
          <li
            key={todoItem.id}
            className={classnames({
              'todo-item': true,
              completed: todoItem.status === 'completed',
            })}
            onClick={() => handleTodoClick(todoItem, index)}
          >
            {todoItem.title}
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
