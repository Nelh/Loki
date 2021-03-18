import React, { useEffect } from 'react';

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {
            name : 'Nelh',
            surname: 'Amstrong',
            email: 'nelhamstron9@gmail.cim',
            password: 'Wireless2018####',
            confirm_password: 'Wireless2018####',
            country: 'South-Africa',
            colour: '',
            birthday: '',
            cellphone: '',
            comments: ''
        },
        user_id: '',
        loading: false,
        actions: {
            actioned: false,
            status: 'light',
            msg: '',
        },
        errors: {}
      }
      this.radioChange = this.radioChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
      this.submitUserForm = this.submitUserForm.bind(this);

    };

    componentDidMount() {
        const { match: { params } } = this.props;
        if(params.id) {
            fetch(`/api/user/${params.id}`, {
                headers: new Headers ({ 'Accept': 'application/json'}),
            })
            .then((response) => response.json())
            .then(data => {
                this.setState({fields:data});
                this.setState({user_id:data.id});
            });
        }
    }

    componentDidUpdate() {
        const timer = setTimeout(() => {
            document.querySelector('.toast').style.display = "none";
        }, 10000);

        this.state.actions.actioned === true ? timer : '';
    }

    radioChange(e) {
        let fields = this.state.fields;
        fields['colour'] = e.currentTarget.value
        this.setState({
          fields
        });
    }

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    }

    handleKeyUp(e) {
        let errors = this.state.errors;
        errors[e.target.name] = '';
        this.setState({
            errors
        });
    }

    submitUserForm(e) {
        e.preventDefault();
        const { match: { params } } = this.props;        
        if (this.validateForm()) {
            if(params.id) {
                this.setState({loading:true})
                fetch('/api/user/update', {
                    method: 'post',
                    headers: new Headers ({ 'Accept': 'application/json'}),
                    body: JSON.stringify({ data: this.state.fields, id: this.state.user_id}),
                })
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        loading:false,
                        actions:data.actions
                    })
                    if(data.code != 0) {
                        this.setState({
                            errors:data.errors,
                        });
                    }
                });
            } else {
                this.setState({loading:true})
                fetch('/api/user/create', {
                    method: 'post',
                    headers: new Headers ({ 'Accept': 'application/json'}),
                    body: JSON.stringify(this.state.fields),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        loading:false,
                        actions:data.actions
                    })
                    if(data.code == 0) {
                        // reset the forms
                        let fields = {};
                        fields["name"] = "";
                        fields["surname"] = "";
                        fields["email"] = "";
                        fields["password"] = "";
                        fields["confirm_password"] = "";
                        fields["country"] = "";
                        fields["colour"] = "";
                        fields["birthday"] = "";
                        fields["cellphone"] = "";
                        fields["comments"] = "";
                        this.setState({fields:fields});
                    } else {
                        this.setState({
                            errors:data.errors
                        });
                    }
                });
            }
      }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["name"] = "Please enter alphabet characters only.";
            }
        }

        if (!fields["surname"]) {
            formIsValid = false;
            errors["surname"] = "Please enter your surname.";
        }

        if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["surname"] = "Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "Please enter a valid email";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "Please enter secure and strong password.";
            }
        }

        if (!fields["confirm_password"]) {
            formIsValid = false;
            errors["confirm_password"] = "Please confirm password.";
        }

        if (typeof fields["confirm_password"] !== "undefined") {
            if (fields["confirm_password"] != fields["password"]) {
            formIsValid = false;
            errors["confirm_password"] = "Both password don't match.";
            }
        }

        if (!fields["cellphone"] == "" && typeof fields["cellphone"] !== "undefined") {
            if (!fields["cellphone"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["cellphone"] = "*Please enter valid cellphone no.";
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    
 

  render() {
    return (
        <div className="container-fluid">
            <div aria-live="polite" aria-atomic="true" className="position-relative">
                <div className="toast-container position-absolute top-0 end-0 p-3" id="toastPlacement">
                    <div className={ 'toast bg-' + this.state.actions.status + (this.state.actions.actioned ? ' show' : ' hide')} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex text-light">
                            <div className="toast-body">
                                { this.state.actions.msg }
                            </div>
                            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper vh-100">
                <div className="row align-items-center h-100">
                    <form method="post" name="userRegistrationForm" className="col-md-6 col-10 mx-auto shadow-lg p-4" onSubmit={this.submitUserForm}>
                    { this.state.loading ? <div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div> : ''}
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="name" placeholder="name" value={this.state.fields.name ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Name *</label>
                                </div>
                                <div className="text-danger">{this.state.errors.name ?? ''}</div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="surname" placeholder="surname" value={this.state.fields.surname ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Surname *</label>
                                </div>
                                <div className="text-danger">{this.state.errors.surname ?? ''}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="form-floating">
                                    <input type="email" className="form-control" name="email" placeholder="email" value={this.state.fields.email ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Email *</label>
                                </div>
                                <div className="text-danger">{this.state.errors.email ?? ''}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="password" className="form-control" name="password" placeholder="password" value={this.state.fields.password ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Password *</label>
                                </div>
                                <div className="text-danger">{this.state.errors.password ?? ''}</div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="password" className="form-control" name="confirm_password" placeholder="confirm_password" value={this.state.fields.confirm_password ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Confirm Password *</label>
                                </div>
                                <div className="text-danger">{this.state.errors.confirm_password ?? ''}</div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="form-floating">
                                <select className="form-control" name="country" value={this.state.fields.country ?? ''} onChange={this.handleChange.bind(this)}>
                                    <option value>Select</option>
                                    <option value="South-Africa">South-Africa</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="USA">USA</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Japan">Japan</option>
                                    <option value="France">France</option>
                                </select>
                            <label>Select a country</label>
                            </div>
                            <div className="text-danger">{this.state.errors.country ?? ''}</div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="mb-3"><label>Favourite Colour</label></div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Red" checked={this.state.fields.colour === "Red"} onChange={this.radioChange} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Red
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Blue" checked={this.state.fields.colour === "Blue"} onChange={this.radioChange} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Blue
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Green" checked={this.state.fields.colour === "Green"} onChange={this.radioChange} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Green
                                </label>
                            </div>
                            <div className="errorMsg">{this.state.errors.colour ?? ''}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="date" className="form-control" name="birthday" plcaholder="birthday" value={this.state.fields.birthday ?? ''} onChange={this.handleChange} />
                                    <label>Birthday</label>
                                </div>
                                <div className="text-danger">{this.state.errors.birthday ?? ''}</div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="cellphone" placeholder="cellphone" value={this.state.fields.cellphone ?? ''} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
                                    <label>Cellphone Number</label>
                                </div>
                                <div className="text-danger">{this.state.errors.cellphone ?? ''}</div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="form-floating">
                                <textarea className="form-control h-100px" name="comments" placeholder="comments" value={this.state.fields.comments ?? ''} onChange={this.handleChange}></textarea>
                                <label>Comments</label>
                            </div>
                            <div className="text-danger">{this.state.errors.comments ?? ''}</div>
                        </div>
                        <button className={ 'btn ' + (this.state.user_id == '' ? 'btn-primary' : 'btn-success') } type="submit">
                            {this.state.user_id == '' ? 'Submit form' : 'Update form' }
                        </button>
                    </form>
                </div>
            </div>
        </div>
      );
  }
}

export default Home;