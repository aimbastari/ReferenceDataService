import React from 'react';




const CusipList = (props) => {

  const cusipListItems = props.cusips.map( (cusip) => {
      return (
        <option  key={cusip.id}>
          {cusip.cusip}
        </option>
      );
    });

  return (
    <select size="5"  onClick={event => props.onCusipSelect(event.target.value)} className='cusip-select' > {cusipListItems} </select>
  );
};

export default CusipList;
