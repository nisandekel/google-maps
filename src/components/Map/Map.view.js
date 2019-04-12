import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './../Marker/Marker.view';
import User from './../User/User.view';
import UsersList from './../UsersList/UsersList.view';
import {defaultCordinates} from './../../cordinates/cordinates';
import './Map.css';


class Map extends Component {

    static defaultProps = {
        center: defaultCordinates,
        zoom: 11
    };

    showUser = (id) => {
        const $currrentUser = document.getElementById(id);
        $currrentUser.classList.remove("invisible");
    }

    hideUser = (id) => {
        const $currrentUser = document.getElementById(id);
        $currrentUser.classList.add("invisible");
    }

    render() {

        const users = this.props.usersList.map(user => {

            let imgSrc = null; 
            let imgClass = null; 
           
            if(this.props.targetUser===user.id){
                imgSrc="http://www.i2symbol.com/pictures/emojis/2/8/9/3/2893aac15d68ccc9b10def2ecdf9de09_384.png";
                imgClass="user-marker-target";
            }
            else{
                imgSrc = "https://cdn2.iconfinder.com/data/icons/smiled-map-markers/512/smile_marker_pointer_position_emotion_emoticon_smile-512.png"
                imgClass = "user-marker";
            }

            return (
                <div key={user.id} lat={parseFloat(user.location.latitude)} lng={parseFloat(user.location.longitude)}>
                    <img className={imgClass} onMouseOver={() => this.showUser(user.id)}
                        onMouseOut={() => this.hideUser(user.id)}
                        src={imgSrc} alt="user marker"
                    />
                    <User id={user.id} name={user.name} profilePic={user.imageUrl}
                        lat={parseFloat(user.location.latitude)} lng={parseFloat(user.location.longitude)}
                    />
                </div>
            );
        });

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <UsersList className="users-list" users={this.props.usersList} />
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDXvdByHYIUrNGQ9KyHjLAmc9lDePopXuU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={this.props.mapCordinates}
                >
                    {users}
                    <Marker lat={this.props.markerCordinates.lat} lng={this.props.markerCordinates.lng} />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;