import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getHouseList} from '../../redux/reducer';

class Dashboard extends Component {

   
    componentDidMount() {
        axios.get('/api/houses/').then(res => {
            this.props.getHouseList(res.data)
        }).catch(err => console.log('err', err))
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(res =>{
            window.location.reload(true);
        })
        .catch (err => console.log('error with deleting', err)
    );
        // const arrayCopy = this.state.houseList.slice();
        // let deleteProduct = arrayCopy.filter(house=> 
        // house.id === id)[0];
    }

    render() {
        //map over list 
        // let displayedHouses = this.state.houseList.map((house, i) => {
        //     return <House {...house} key={i} />
        // })
        
        return (
            <div>
                <div>Dashboard</div>
                <div className= "Add-Property-Link">
                    <Link to='/wizard/step1'>
                    <button className="Add-New-Property" 
                    >Add New Property</button></Link>
                </div>
                <div>
                    <House houseList ={this.props.houseList} deleteHouse ={this.deleteHouse}/>

                </div>
                
            </div>
            
        )
    }
}
function mapStateToProps(state) {
    const {houseList} = state;
    return {
        houseList
    }
}


export default connect (mapStateToProps, {getHouseList}) (Dashboard);