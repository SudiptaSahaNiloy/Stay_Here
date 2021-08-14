import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import { connect } from 'react-redux';
// import Footer from './Footer/Footer';
import { guestCheck } from '../Redux/authActionCreator';

const mapDispatchToProps = (dispatch) => {
    return {
        guestCheck: () => dispatch(guestCheck())
    }
}

class Main extends Component {
    componentDidMount(){
        this.props.guestCheck();
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Main);
