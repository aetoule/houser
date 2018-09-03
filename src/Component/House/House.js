import React, { Component } from 'react';

    
const House = (props) => {

    console.log('house components props', props.houseList);
    const displayedHouses = props.houseList.map((house, i) => {
        console.log('house', house);
        return (
        <div className="mapped-house-list" key={i}>
        <p>Property Name: {house.name}</p>  
        <p>Address: {house.address}</p>
        <p>City: {house.city}</p>
        <p>State: {house.state}</p>
        <p>Zip: {house.zip} </p>
        <img src={house.imgurl}/>
        <p>Monthly Mortgage: {house.monthlymortgage} </p>
        <p>Desired Rent:{house.desiredrent} </p>
        <button onClick={() => props.deleteHouse(house.id)}>Delete</button>
        
        </div>
        )
     })
     
    return (
        <div>
            <div>House</div>
            {displayedHouses}
            
            
        </div>
    );
    
}

export default House;