import React, { Component } from 'react';


export default class SearchDetail extends Component{
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

    //fetch data from backend here



  }

  render(){
    return (

      <div>list of securities</div>

    );
  }
}
