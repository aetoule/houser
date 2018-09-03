import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { handleMonthlyMortgage } from '../../redux/reducer';
import { handleDesiredRent  } from '../../redux/reducer';

// handleDesiredRent 

class Wizard3 extends Component {

    addHouse(name, address, city, stateName, zip, imgUrl, monthlyMortgage, desiredRent) {
        axios.post('/api/houses/', {name, address, city, stateName, zip, imgUrl, monthlyMortgage, desiredRent}).then(res => {
            this.props.history.push('/');
        }).catch(err => console.log('err', err))
     }

    render() { 
        const {monthlyMortgage, desiredRent, name, address, city, stateName, zip, imgUrl, handleDesiredRent, handleMonthlyMortgage} = this.props;
        return (
            <div>
                <h1>Add New Listing</h1>
                <div className= "Cancel-Button-Link">
                        <Link to='/'>
                        <button className="Cancel" 
                        >Cancel</button></Link>
                </div>

                <p>Recommended Rent: $</p>

                <h3>Monthly Mortgage</h3>
                <input className="Input-Box" value={monthlyMortgage} onChange={(e) =>handleMonthlyMortgage(e.target.value)}></input>

                <h3>Desired Monthly Rent</h3>
                <input className="Input-Box" value={desiredRent} onChange={(e) =>handleDesiredRent(e.target.value)}></input>

                <div className="Previous-Step">
                    <Link to='/wizard2'>Previous Step</Link>
                </div>

                <div className= "Complete-Button-Link">
                    <Link to='/'>
                    <button className="Complete" 
                    onClick={ () => this.addHouse(name, address, city, stateName, zip, imgUrl, monthlyMortgage, desiredRent)}
                    >Complete</button></Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    handleMonthlyMortgage,
    handleDesiredRent
}

function mapStateToProps(state) {
    const {name, 
        address,
        city,
        stateName,
        zip,monthlyMortgage, desiredRent} = state;
    return {
        name, 
        address,
        city,
        stateName,
        zip,
        monthlyMortgage,
        desiredRent
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Wizard3);


