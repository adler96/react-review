import React from 'react';

class AddTodo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todoText: '',
            todoDate: '',
            setReminder: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type==='checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newTodo = null;

        if(this.state.todoText !== '' && this.state.todoDate !== '') {
            newTodo = {
                desc: this.state.todoText, 
                date: this.state.todoDate,
                reminder: this.state.setReminder
            }
            this.props.onSubmit(newTodo);
        
            this.setState({
                todoText: '',
                todoDate: '',
                setReminder: false
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>To Do: <input type="text" value={this.state.todoText} name="todoText" onChange={this.handleChange} /></label> <br />
                <label>Date: <input type="text" value={this.state.todoDate} name="todoDate" onChange={this.handleChange} /></label> <br />
                <label><input type="checkbox" value={this.state.setReminder} name="setReminder" onChange={this.handleChange} /> Set reminder</label> <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddTodo;
