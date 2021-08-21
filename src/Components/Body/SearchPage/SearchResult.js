import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { selectedRoom } from '../../../Redux/actionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        selectedRoom: (room) => dispatch(selectedRoom(room)),
    }
}


class SearchResult extends Component {
    state = {
        favorite: false,
    }

    handleOnClick = (e) => {
        // console.log(e);
        this.setState({
            favorite: !this.state.favorite,
        })
        this.props.selectedRoom(e);
    }

    render() {
        return (
            <div className="searchResult">
                <Link className="imageSection" to="/room">
                    <img
                        onClick={() => this.handleOnClick(this.props.hotelRoom)}
                        src={this.props.hotelRoom.img}
                        alt="" />
                </Link>
                {this.state.favorite ?
                    <FavoriteIcon
                        onClick={() => this.handleOnClick()}
                        style={{ color: "#FF5A5F" }}
                        className="searchResult_heart" />
                    :
                    <FavoriteBorderIcon
                        onClick={() => this.handleOnClick()}
                        className="searchResult_heart" />
                }
                <div className="searchResult_info">
                    <div className="searchResult_infoTop">
                        <p>{this.props.hotelRoom.location}</p>
                        <h3>{this.props.hotelRoom.title}</h3>
                        <p>____</p>
                        <p>{this.props.hotelRoom.description}</p>
                    </div>
                    <div className="searchResult_infoBottom">
                        <div className="searchResult_stars">
                            <StarIcon className="searchResult_star" />
                            <p><strong>{this.props.hotelRoom.star}</strong></p>
                        </div>
                        <div className="searchResult_price">
                            <h2>${this.props.hotelRoom.price}/night</h2>
                            <p>{this.props.hotelRoom.total}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchResult);
