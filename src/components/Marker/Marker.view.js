import React from 'react';
import './Marker.css';

const markerImgAdress = "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png";

const Marker = (props) => <img className="marker" alt="marker" src={markerImgAdress} />

export default Marker;