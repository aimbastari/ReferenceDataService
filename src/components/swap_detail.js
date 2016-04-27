import React, { Component } from 'react';

/*
  Swap detail used to display and edit swaps
*/
class SwapDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {swap: {}};
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  /*
    Sets the intial state of this component using the passed in props
  */
  componentWillReceiveProps (props) {
    if(props.swap == null){
      return;
    }

    this.setState({swap : {
      id :props.swap.id,
      coupon : props.swap.coupon,
      description : props.swap.description
    }});

  }

  onChange(event){
    const updatedSwap = {
      description : (event.target.name == 'description' ? event.target.value : this.state.swap.description),
      coupon      : (event.target.name == 'coupon' ? event.target.value : this.state.swap.coupon),
      id          : this.state.swap.id
    }
    this.setState({swap: updatedSwap});
  }

  onFormSubmit(event){
    event.preventDefault();

    //calls method on the parent with the updated swap information
    this.props.onSwapSave(this.state.swap);

  }

  render(){
    if(this.props.swap == null){
      return <div> Swap detail... </div>;
    }
    return (
      <div>
        <div>Swap detail:{this.props.swap.id}</div>
        <form onSubmit={this.onFormSubmit} className="input-group sme-swap-detail">
          <div>
            <lable>description:</lable>
            <input name='description' placeholder={this.props.swap.description}
              onChange={this.onChange}
              value={this.state.swap.description}
            />
          </div>

          <div>
            <lable>coupon:</lable>
            <input name='coupon' placeholder={this.props.swap.coupon}
              onChange={this.onChange}
              value={this.state.swap.coupon}
            />
          </div>

          <div className="input-group-btn">
            <button type="submit" className="btn btn-secondary sme-button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SwapDetail;
