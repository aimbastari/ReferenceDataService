import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import SearchBar from './search_bar';
import CusipList from './cusip_list';
import SwapDetail from './swap_detail';


const SWAP_API = 'http://localhost/SME/';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {cusips: ['xyz1232xs', 'xyz12366', 'x1231233']};

  }

  //Call the SME backend to get list of cusips
  cusipSearch(term){
    //Build request url
    const url = `${SWAP_CUSIP_API}cusip/${term}`;

    //make the request
    const request = axios.get(url)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        this.setState({cusips: response});
      })
      .catch((response) => {
          console.log("Error fetching cusips!");
      });

  }

  //Call the SME backend to get list of cusips
  swapSearch(cusip){
    //Build request url
    const url = `${SWAP_CUSIP_API}/security/${cusip}`;

    //make the request
    const request = axios.get(url)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        this.setState({swap: response});
      })
      .catch((response) => {
          console.log("Error fetching  Security!");
      });

  }



  render() {
    return (
      <div>
        <div className='sme-header'>Swap Maintenance</div>
        <div><SearchBar onSearchTermChange={term => this.cusipSearch(term)} /></div>
        <div><CusipList cusips={this.state.cusips} onCusip/></div>
        <div className='sme-search-detail' onSwapChange><SwapDetail /></div>
      </div>
    );
  }
}
