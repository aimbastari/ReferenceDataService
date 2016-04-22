import React, { Component } from 'react';

class SwapDetail extends Component{
  constructor(props) {
    super(props);
    this.state = { swap : {}};
    this.onInputChange = this.onInputChange.bind(this);
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
    return (
      <div className='sme-swap-detail'>Swap Detail</div>
    );
  }
}

export default SwapDetail;
