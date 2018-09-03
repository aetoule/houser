import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {handleChangeImgUrl} from '../../redux/reducer';
import {connect} from 'react-redux';

class Wizard2 extends Component {
    
    render() { 
        const {imgUrl, handleChangeImgUrl} = this.props
        return (
            <div>
                <h1>Add New Listing</h1>
                <div className= "Cancel-Button-Link">
                    <Link to='/'>
                    <button className="Cancel" 
                    >Cancel</button></Link>
                </div>

                <div className="Input-Box">
                    <h3>Image URL</h3>
                    <input type= "text" value={imgUrl} onChange={(e) => handleChangeImgUrl(e.target.value)}/>
                </div>

                <div className="Previous-Step">
                    <Link to='/wizard/step1'>Previous Step</Link>
                </div>
                <div className="Next-Step">
                    <Link to='/wizard/step3'>Next Step</Link>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = {
    handleChangeImgUrl
}

function mapStateToProps(state) {
    const {imgUrl} = state;
    return {
        imgUrl
    }
}

 
export default connect (mapStateToProps, mapDispatchToProps)(Wizard2);