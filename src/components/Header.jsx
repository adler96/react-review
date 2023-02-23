import React from 'react';
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }
    
    render() {      
        const isShown = this.props.showAddTodo;  
        return (
            <div className='header'>
                <h1>ToDo App</h1>
                <button className={[isShown ? 'btn-red' : 'btn-green', 'btn'].join(' ')} onClick={this.handleClick}>{ isShown ? 'Cancel' : 'Add New' }</button>
            </div>
        );
    }    
}

export default Header;
