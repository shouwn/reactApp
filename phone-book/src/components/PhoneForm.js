import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phoneNumber: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phoneNumber: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    value = {this.state.name}
                    onChange = {this.handleChange}
                />
                <input
                    name = "phoneNumber"
                    placeholder = "전화번호"
                    value = {this.state.phoneNumber}
                    onChange = {this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;