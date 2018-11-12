import React from 'react';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateAge } from './actions';

class Names extends React.Component {
  state = {
    age: this.props.age,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.updateFirstName(this.state.firstName);
    this.props.updateLastName(this.state.lastName);
  };

  handleAgeUpdate = e => {
    this.setState({ age: e.target.value });
  };

  handleFirstNameUpdate = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameUpdate = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <form className="Names" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleFirstNameUpdate}
          type="text"
          value={this.state.firstName}
          placeholder="First Name"
        />
        <input
          onChange={this.handleLastNameUpdate}
          type="text"
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={this.state.age}
          onChange={this.handleAgeUpdate}
          placeholder="Age"
        />
        <input className="Button" type="submit" value="Update persona info" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.persona.data.name.firstName,
  lastName: state.persona.data.name.lastName,
  age: state.persona.data.age,
});

const mapDispatchToProps = dispatch => ({
  updateAge: age => dispatch(updateAge(age)),
  updateFirstName: firstName => dispatch(updateFirstName(firstName)),
  updateLastName: lastName => dispatch(updateLastName(lastName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Names);
