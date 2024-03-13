import React, { Component } from 'react';
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome to My Gallery'
        };
    }

    handleClick = () => {
        const newMessage = this.state.message === 'Welcome to My Gallery' ? 'Goodbye!' : 'Welcome to My Gallery';
        this.setState({ message: newMessage });
        console.log(this.state.message);
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery Heading</h1>
                <span>{this.state.message}</span>
                <button onClick={this.handleClick}>{this.state.message === 'Welcome to My Gallery' ? 'Login' : 'Logout'}</button>
            </div>
        );
    }
}

export default NavBarSimple;