import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {myInput : ''}

    onInputChange = e => {
        this.setState({ myInput: e.target.value})
    };

    onFormSubmit = e => {
        e.preventDefault();
 
        this.props.onFormSubmit(this.state.myInput)
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.myInput}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
