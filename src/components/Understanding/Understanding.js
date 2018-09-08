import React, { Component } from 'react';
import { connect } from 'react-redux';


//object to hold local state/ single feedback item
const feedbackLevelObject = {
    understanding: '',
};

class Understanding extends Component {

    constructor() {
        super();

        this.state = feedbackLevelObject;
    }

    //function to set state to chosen radio button value
    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            understanding: event.target.value
        });

        console.log('previous state', this.state);
    } 
    
    //function called when the next button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('understanding submitted', this.state);

        //variable to hold action for redux store
        const action = { type: 'ADD_UNDERSTANDING', payload: this.state }

        this.props.dispatch(action);

        this.props.history.push('support');

        this.clearFields();
    }

    clearFields() {
        this.setState(feedbackLevelObject);
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOptionChange}
                        value="1" checked={this.state.understanding === '1'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="2" checked={this.state.understanding === '2'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="3" checked={this.state.understanding === '3'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="4" checked={this.state.understanding === '4'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="5" checked={this.state.understanding === '5'}
                        type="radio" name="radioBtn" />
                    <button className="nextBtn" >Next</button>
                </form>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Understanding);