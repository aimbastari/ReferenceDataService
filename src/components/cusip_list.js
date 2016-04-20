import React from 'react';

const CusipList = (props) => {
  const cusipListItems = props.cusips.map( (cusip) => {
      return (
        <li  key={cusip}>
          <div> {cusip} </div>
        </li>
      );
    });

  return (
    <ul className="col-md-1 list-group"> {cusipListItems} </ul>
  );
};

export default CusipList;
