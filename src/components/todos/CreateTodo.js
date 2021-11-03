import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return(
      <div>
        <form>
          <input
            type="text"
            placeholder="add todo"
            onChange={this.handleChange}
            value={this.state.text}
            onSubmit={this.handleSubmit}
            />
          <input type="submit" />
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  // ALTERNATE METHOD
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  // };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

//ALTERNATE METHOD
// export default connect()(CreateTodo);
