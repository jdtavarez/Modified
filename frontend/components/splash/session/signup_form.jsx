import React from "react";
import { Link } from "react-router-dom";

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            confirm_email: "",
            username: "",
            password: "",
            gender: "",
            month: "",
            day: "",
            year: "",
            error: null
        };

        this.errors = {
            email: false,
            confirm_email: false,
            password: false,
            username: false, 
            day: false,
            month: false,
            year: false,
            gender: false
        };

        this.error_messages = {
            email: "You need to enter your email.",
            confirm_email: "You need to confirm your email.",
            password: "Your password is too short.",
            username: "Enter a name for your profile.",
            day: "Enter a valid day of the month.",
            year: "Enter a valid year.",
            month: "Select your birth month.",
            gender: "Select your gender."
        }

        this.errorsHelper = this.errorsHelper.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateInput = this.updateInput.bind(this)
        this.handleDate = this.handleDate.bind(this)
    }

    errorsHelper(e) {

        const category = e.target.name.slice(5, -1)
        const errors = this.errors;
        const error_messages = this.error_messages;

        function _errorTrue() {
            errors[category] = true;
            e.target.classList.add("signup-error")
        }

        function _errorFalse() {
            errors[category] = false;
            e.target.classList.remove("signup-error")
        }

        switch(category) {
            case "email":
                if (e.target.value === '') {
                    _errorTrue();
                    error_messages[category] = "You need to enter your email."
                    break;
                } else if (!e.target.value.includes('@') ) {
                    _errorTrue();
                    error_messages[category] = "This email is invalid. Make sure it's written like example@email.com"
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "confirm_email":
                if (e.target.value === '') {
                    _errorTrue();
                    error_messages[category] = "You need to confirm your email."
                    break;
                } else if (e.target.value !== this.state.email) {
                    _errorTrue();
                    error_messages[category] = "The email addresses don't match."
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "password":
                if (e.target.value.length < 6) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case ("username" || "gender"):
                if (e.target.value === '') {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "year":
                let intValue = parseInt(e.target.value)
                if (e.target.value === '' ||
                    (intValue < 1900 || intValue > new Date().getFullYear() - 13) || 
                    (!Number.isInteger(intValue))) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "month":
                if (e.target.value === '') {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            case "day":
                intValue = parseInt(e.target.value)
                if (e.target.value === '' || 
                (intValue < 0 || intValue > 31) || 
                (!Number.isInteger(intValue))) {
                    _errorTrue();
                    break;
                } else {
                    _errorFalse();
                    break;
                }
            default: 
                null;
        }
        this.setState({error: null});
    }

    handleSubmit(e) {
        
        e.preventDefault();
        const errorsArr = Object.keys(this.state);
        errorsArr.forEach((category) => {
            if (this.state[category] === '') {
                this.errors[category] = true
            }
        })
        this.props.processForm(this.state);
    }

    updateInput(e) {
        const category = e.target.name.slice(5, -1)
        this.setState({ [category]: e.target.value })
    }

    handleDate(e) {
        this.updateInput(e)
        this.errorsHelper(e)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {

        const email_error = this.errors.email ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.email}</p> : "";

        const confirm_email_error = this.errors.confirm_email ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.confirm_email}</p> : "";

        const password_error = this.errors.password ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.password}</p> : "" ;

        const username_text = this.errors.username ? 
        <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.username}</p> : 
        <p className="input-messaging ">This appears on your profile.</p>;

        const month_error = this.errors.month ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.month}</p> : "";
        const day_error = this.errors.day ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.day}</p> : "";
        const year_error = this.errors.year ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.year}</p> : "";
        const gender_error = this.errors.gender ? <p className="input-messaging input-messaging-error"><i className="fas fa-times"></i>{this.error_messages.gender}</p> : "";

        return (
            <div className="signup-form-container">
                {window.authToken}
                <div className='signup-form-header'>
                    <div className="form-logo-container">
                        <Link id="signup-form-logo" to="/">
                            <img src={window.logoBlack} alt="modified logo" />
                        </Link>
                        <p id="signup-logo">Modified</p>
                    </div>
                </div>

                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <h2 className="signup-h2">Sign up for free to start listening.</h2>

                    <div id="signup-fb-container">
                        <Link id="sign-up-fb" to="/signup">Sign up with Facebook</Link>
                    </div>

                    <div id="signup-option-divider">
                        <span>or</span>
                    </div>

                    <h3 className="signup-h3">Sign up with your email address</h3>

                    <div className="signup-form-entries">
                        <label className="signup-input-header">What's your email?</label>
                        <input className="signup-input" placeholder="Enter your email." type="text" value={this.state.email} onChange={this.updateInput} onBlur={this.errorsHelper} name="user[email]" />
                        {email_error}
                    </div>
                    
                    
                    <div className="signup-form-entries">
                        <label className="signup-input-header">Confirm your email</label>
                        <input className="signup-input" placeholder="Enter your email again." type="text" name="user[confirm_email]" onChange={this.updateInput} onBlur={this.errorsHelper}/>
                        {confirm_email_error}
                    </div>

                    <div className="signup-form-entries">
                        <label className="signup-input-header">Create a password</label>
                        <input className="signup-input" placeholder="Create a password." type="text" value={this.state.password} onChange={this.updateInput} name="user[password]" onBlur={this.errorsHelper}/>
                        {password_error}
                    </div>
                
                    <div className="signup-form-entries">
                        <label className="signup-input-header">What should we call you?</label>
                        <input className="signup-input" placeholder="Enter a profile name." type="text" value={this.state.username} onChange={this.updateInput} name="user[username]" onBlur={this.errorsHelper}/>
                        {username_text}
                    </div>

                    <div className="signup-form-entries">
                        <label className="signup-input-header">What's your date of birth?</label>

                        <div id="birth-boxes">
                            <div className="birth-select-box">
                                <label>Month</label>
                                <select className="signup-input" name="user[month]" id="month-input" onChange={this.updateInput} onBlur={this.errorsHelper}>
                                    <option selected disabled value="">Month</option>
                                    <option className="month" value="01">January</option>
                                    <option className="month" value="02">February</option>
                                    <option className="month" value="03">March</option>
                                    <option className="month" value="04">April</option>
                                    <option className="month" value="05">May</option>
                                    <option className="month" value="06">June</option>
                                    <option className="month" value="07">July</option>
                                    <option className="month" value="08">August</option>
                                    <option className="month" value="09">September</option>
                                    <option className="month" value="10">October</option>
                                    <option className="month" value="11">November</option>
                                    <option className="month" value="12">December</option>
                                </select>
                            </div>

                            <div className="birth-select-box">
                                <label> Day</label>
                                <input className="signup-input" id="day-input" placeholder="DD" type="text" onBlur={this.handleDate} onChange={this.configureBirthday} name="user[day]" />
                            </div>

                            <div className="birth-select-box">
                                <label> Year</label>
                                <input className="signup-input" id="year-input" placeholder="YYYY" type="text" onBlur={this.handleDate} onChange={this.configureBirthday}  name="user[year]" />
                            </div>
                        </div>
                        {month_error}
                        {day_error}
                        {year_error}
                    </div>

                    <div className="signup-form-entries">
                        <label className="signup-input-header">What's your gender?</label>
                        <div id="gender-select-box">
                            <label id="gender-select-radio"><input type="radio" value="Male" name="user[gender]" onChange={this.updateInput} onBlur={this.errorsHelper}/>
                            <p>Male</p></label>

                            <label id="gender-select-radio"><input type="radio" value="Female" name="user[gender]" onChange={this.updateInput} onBlur={this.errorsHelper}/>
                            <p>Female</p></label>
                        
                            <label id="gender-select-radio"><input type="radio" value="Non-binary" name="user[gender]" onChange={this.updateInput} onBlur={this.errorsHelper}/><p>Non-binary</p></label>        
                        </div>     
                        {gender_error}
                    </div>
                    
                    <div className="signup-submit-area">
                        <input className="small-button" id="signup" type="submit" value="Sign Up"/>
                    </div>

                    <p id="login-link">Have an account? <Link to="/login">Log in</Link></p>
                </form>
            </div>
        )
    }
}
