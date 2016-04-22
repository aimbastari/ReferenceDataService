import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Promise from 'es6-promise';

import SearchBar from './search_bar';
import CusipList from './cusip_list';
import SwapDetail from './swap_detail';



const SWAP_CUSIP_API = 'http://localhost:3000/api/';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {cusips: ['xyz1232xs', 'xyz12366', 'x1231233']};

    this.cusipSearch = this.cusipSearch.bind(this);
    this.swapSearch = this.swapSearch.bind(this);
    this.swapSave = this.swapSave.bind(this);

  }

  //Call the SME backend to get list of cusips
  cusipSearch(term){
    //Build request url
//    const url = `${SWAP_CUSIP_API}cusip/${term}`;
    const url = `${SWAP_CUSIP_API}cusips`;
    console.log(`CUSIP Search ${url}`);

    //make the request
    const request = axios.get(url)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        console.log(`returned response ${response.data}`);
        console.log(response);
        this.setState({cusips: response.data});
      })
      .catch((response) => {
          console.log("Error fetching cusips!");
          console.log(response);
      });
  }

  //Call the SME backend to get Swap from given cusips
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

  //Call the SME backend to post the swap update
  swapSave(swap){
    //Build request url
    const url = `${SWAP_CUSIP_API}/security/${swap}`;

    //make the request
    const request = axios.post(url)
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
        <div className='sme-header'>SWAP MAINTENANCE EDITOR</div>
        <SearchBar onSearchTermChange={term => this.cusipSearch(term)} />
        <CusipList cusips={this.state.cusips} onCusipSelect={cusip => this.swapSearch(cusip)}/>
        <SwapDetail swap={this.state.swap} onSwapSave={swap => this.swapSave(swap)}  />
      </div>
    );
  }
}
