import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoitems: [
                'Feed dog',
                'Pickup milk',
                'Buy Tickets'
            ]
        }
    }
    render () {
        var todoItems = this.state.todoitems.map((todoItem, i) => {
            return <TodoItem key={i}>{todoItem}</TodoItem>
        })
        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
}

export default TodoList
