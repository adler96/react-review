import React from 'react';

class AddTodo extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label>To Do: <input type="text" /></label> <br />
                <label>Date: <input type="text" /></label> <br />
                <label><input type="text" /> Set reminder</label> <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddTodo;