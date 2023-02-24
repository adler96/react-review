import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor (props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete(id) {
        this.props.onDelete(id);
    }

    handleToggle(id) {
        console.log('toggle');
        this.props.onToggle(id);
    }

    render() {
        const todos = this.props.todosList;
        let todosComps = todos.map((element) => {
            return <TodoItem key={element.id} item={element}  onToggle={this.handleToggle} onDelete={this.handleDelete} />
        });
                
        return (
            <div>
                {todosComps}
            </div>
        );
    }
}

export default TodoList;
