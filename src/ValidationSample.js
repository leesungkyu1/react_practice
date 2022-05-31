import React, { Component} from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        cliked: false,
        validated : false
    }

    handleChange =(e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick =()=> {
        this.setState({
            cliked: true,
            validated : this.state.password === '0000' ? 'success' : false
        })

        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.cliked ? (this.state.validated ? 'success' : 'failure') : ''}
                    />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;