import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '---',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Filter1: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter 1: Genre:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="action">Action</option>
              <option value="romance">Romance</option>
              <option value="comedy">Comedy</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Dropdown;