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
      return <div> Swap Detail... </div>;
    }
    return (
      <div>
        <div className="sme-swap-detail-title">Swap detail: {this.props.swap.id}</div>
        <form onSubmit={this.onFormSubmit} className="sme-swap-detail" >
          <div className="form-group">
            <lable>Description:</lable>
            <input name='description' placeholder={this.props.swap.description}
              onChange={this.onChange}
              value={this.state.swap.description}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <lable>Coupon:</lable>
            <input name='coupon' placeholder={this.props.swap.coupon}
              onChange={this.onChange}
              value={this.state.swap.coupon}
              className="form-control"
            />
          </div>

          <button  onClick={() => this.props.onSwapSave(null) } className="btn btn-primary btn-danger pull-xs-right swap-detail-button">Cancel</button>
          <button type="submit" className="btn btn-primary pull-xs-right swap-detail-button">Save</button>

        </form>
      </div>
    );
  }
}

export default SwapDetail;
