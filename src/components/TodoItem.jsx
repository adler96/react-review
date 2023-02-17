import React from 'react';

class TodoItem extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div class="">
                <h3>{{ todoText }}</h3>
                <p>{{ TodoDate }}</p>
                <i></i>
            </div>
        );
    }
}

export default TodoItem;