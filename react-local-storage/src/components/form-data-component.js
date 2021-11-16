/* https://www.positronx.io/store-react-form-data-or-state-in-local-storage/
In components folder, create a component file for 
storing form data in local storage.
Get values from the React form and store the
values in local storage using localStorage web API 
and React Js component life cycle methods.

local storage - data doesn’t remove from the browser 
unless we remove the browser’s cache.
*/
import React, { Component } from 'react';

export default class FormDataComponent extends Component {
    //userData variable to store the form's value
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    //The componentWillUpdate() method triggers before the 
    //rendering happens. We are setting up form state in 
    //local storage.
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

//In the HTML input field, we define the onChange=”” event with
//the specific methods. These methods will trigger when the 
//value of the filed is being changed. We also pass the value 
//and giving the value using the this.state.
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>

                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}