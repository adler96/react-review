import React from 'react';
import './todoItem.css';

class TodoItem extends React.Component {
    constructor (props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete() {
        const id = this.props.item.id;
        this.props.onDelete(id);
    }

    handleToggle(e) {
        this.props.onToggle(this.props.item.id);
    }

    render() {
        const item = this.props.item;

        return (
            <div className={this.props.item.reminder ? 'remind' : ''} onDoubleClick={this.handleToggle} >
                <h3>{ item.desc }</h3>
                <p>{ item.date }</p>
                <i onClick={this.handleDelete} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></i>
            </div>
        );
    }
}

export default TodoItem;