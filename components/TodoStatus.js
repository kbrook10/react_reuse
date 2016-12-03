import React from 'react'

class TodoStatus extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <input type="checkbox" {...this.props} />
        )
    }
}

export default TodoStatus
