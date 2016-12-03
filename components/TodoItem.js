import React from 'react'
import TodoStatus from './TodoStatus'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>
                <TodoStatus />{this.props.children}
            </li>
        )
    }
}
export default TodoItem
