import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phoneNumber: '010-0000-0000',
            id: 0
        }
    }

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phoneNumber: info.phoneNumber
            })
        }

        if(prevState.editing && !this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber
            })
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if(editing){
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phoneNumber}
                            name="phoneNumber"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const {
            name, phoneNumber
        } = this.props.info;

        return (
            <div style = {style}>
                <div><b>{name}</b></div>
                <div>{phoneNumber}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;