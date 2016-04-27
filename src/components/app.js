import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Promise from 'es6-promise';

import SearchBar from './search_bar';
import CusipList from './cusip_list';
import SwapDetail from './swap_detail';



const SWAP_CUSIP_API = 'http://localhost:3000/'
//http://localhost:3000/api/';

/*
  Parent component for SME app
*/
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {cusips: [], swap: null};

    this.cusipSearch = this.cusipSearch.bind(this);
    this.swapSearch = this.swapSearch.bind(this);
    this.swapSave = this.swapSave.bind(this);

  }

  /*
    Call the SME backend to get list of cusips
  */
  cusipSearch(term){
    //Build request url
    //const url = `${SWAP_CUSIP_API}cusip/${term}`;
    const url = `${SWAP_CUSIP_API}cusips`;

    //make the request
    const request = axios.get(url)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        this.setState({cusips: response.data});
      })
      .catch((response) => {
          console.log("Error fetching cusips!");
          console.log(response);
      });
  }

  /*
    Call the SME backend to get Swap from selected cusip
  */
  swapSearch(cusip){
    //Build request url
    const url = `${SWAP_CUSIP_API}security/${cusip}`;

    //make the request
    const request = axios.get(url)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        this.setState({swap: response.data});
      })
      .catch((response) => {
          console.log("Error fetching Security!");
          console.log(response);
      });
  }

  /*
    Call the SME backend to update the swap
  */
  swapSave(swap){
    //Build request url
    const url = `${SWAP_CUSIP_API}security/${swap.id}`;

    //make the request
    const request = axios.put(url, swap)
      .then((response) => {
        //setting state will trigger all components to rerender themselves
        this.setState({swap: response.data});
      })
      .catch((response) => {
          console.log("Error Saving Security!");
          console.log(response);
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
