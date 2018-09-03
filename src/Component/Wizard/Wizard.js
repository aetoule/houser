import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import {handleChangeName} from '../../redux/reducer';
import {handleChangeAddress} from '../../redux/reducer';
import {handleChangeCity} from '../../redux/reducer';
import {handleChangeStateName} from '../../redux/reducer';
import {handleChangeZip} from '../../redux/reducer';
import {getHouseList} from '../../redux/reducer';
import {connect} from 'react-redux';

class Wizard extends Component {

    //  constructor () {
    //      super();
    //      this.state = {
    //         value: '',
    //         name: '',
    //         address: '',
    //         city: '',
    //         stateName: '',
    //         zip: 0
    //      }
    //      this.handleChangeName = this.handleChangeName.bind(this);

    //      this.handleChangeAddress = this.handleChangeAddress.bind(this);

    //      this.handleChangeCity = this.handleChangeCity.bind(this);

    //      this.handleChangeStateName = this.handleChangeStateName.bind(this);

    //      this.handleChangeZip = this.handleChangeZip.bind(this);
    //      this.addHouse = this.addHouse.bind(this)
    //  }
     
    //  handleChangeName = (event) => {
    //     this.setState({name: event.target.value});
    //  }
    //  handleChangeAddress = (event) => {
    //     this.setState({address: event.target.value});
    //  }
    //  handleChangeCity = (event) => {
    //     this.setState({city: event.target.value});
    //  }
    //  handleChangeStateName = (event) => {
    //     this.setState({stateName: event.target.value});
    //  }
    //  handleChangeZip = (event) => {
    //     this.setState({zip: event.target.value});
    //  }

    //  addHouse(name, address, city, stateName, zip) {
    //     axios.post('/api/houses/', {name, address, city, stateName, zip}).then(res => {
    //         this.props.history.push('/');
    //     }).catch(err => console.log('err', err))
    //  }

    
    render() {
        console.log(this.props);
        
        const {name, address, city, stateName, zip, handleChangeName, handleChangeAddress, handleChangeCity, handleChangeStateName, handleChangeZip} = this.props;
        return (
            <div>
                <div>Wizard</div>
                <h1>Add New Listing</h1>
                <div className= "Cancel-Button-Link">
                    <Link to='/'>
                    <button className="Cancel" 
                    >Cancel</button></Link>
                </div>

                <div className="Input-Box">
                    <h3>Property Name</h3>
                    <input type="text" value={name} onChange={(e) => handleChangeName(e.target.value)} />

                    <h3>Address</h3>
                    <input type="text" value={address} onChange={(e) => handleChangeAddress(e.target.value)} />

                    <h3>City</h3>
                    <input type="text" value={city} onChange={(e) => handleChangeCity(e.target.value)} />

                    <h3>State</h3>
                    <input type="text" value={stateName} onChange={(e) => handleChangeStateName(e.target.value)} />

                    <h3>Zip</h3>
                    <input type="text" value={zip} onChange={(e) => handleChangeZip(e.target.value)}/>

                    <div className="Next-Step">
                    <Link to='/wizard/step2'>Next Step</Link>
                    </div>

                </div>
            </div>

        )
    }
}

const mapDispatchToProps = {
    getHouseList,
    handleChangeName,
    handleChangeAddress,
    handleChangeCity,
    handleChangeStateName,
    handleChangeZip
}

function mapStateToProps(state) {
    const {name, address, city, stateName, zip} = state;
    return {
        name,
        address,
        city,
        stateName,
        zip
    }
}

export default connect (mapStateToProps ,mapDispatchToProps)(withRouter(Wizard));