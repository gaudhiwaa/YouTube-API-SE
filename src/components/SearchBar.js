import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import './SearchBar.css'

export default class SearchBar extends Component {
    state = { myInput: '' }

    onInputChange = e => {
        this.setState({ myInput: e.target.value })
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.myInput)
    };

    render() {
        return (
            <Router>
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <img src='https://i2.wp.com/rizkypratama.id/wp-content/uploads/2018/11/YouTube-dark.jpg?fit=780%2C390&ssl=1' />
                        <input
                            placeholder="Search ..."
                            type="text"
                            value={this.state.myInput}
                            onChange={this.onInputChange}
                        />
                        <div className="button-list">
                            <button class="ui icon button">
                                <i class="plus icon" /><i class="video icon" />
                            </button>
                            <button class="ui icon button">
                                Sign in
                            </button>
                            <button class="ui icon button">
                                <i class="bars icon" />
                            </button>
                        </div>
                    </form>
                </div>
            </Router>
        )
    }
}
