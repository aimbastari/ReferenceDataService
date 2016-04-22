import React, { Component } from 'react';


class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = { term : ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    //fetch cusips from backend here
    this.props.onSearchTermChange(this.state.term);

  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group sme-search-bar">
        <input
          placeholder="Enter security cusip here....! "
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary sme-button">submit here</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
