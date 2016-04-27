import React, { Component } from 'react';

class SwapDetail extends Component{
  constructor(props) {
    super(props);
    this.state = { swap : null};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value});

  }

  onFormSubmit(event){
    event.preventDefault();

    //fetch cusips from backend here
    this.props.onSwapChange(this.state.swap);

  }

  render(){
    console.log("inside swap detail");
    console.log(this.props.swap);

    return (
      <div>
        <div className='sme-swap-detail'>Swap Detail: {this.props.swap}</div>
        <button className="btn btn-small" onClick={onSwapSave(this.props.swap)}   >Submit</button>
      </div>
    );
  }
}

export default SwapDetail;
