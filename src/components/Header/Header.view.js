import React from 'react';
import { Button } from 'react-bootstrap';
import {
    australiaCordinates, israelCordinates, unitedStatesCordinates
    , franceCordinates, japanCordinates
} from './../../cordinates/cordinates';
import './Header.css';

const Header = (props) => {

    const handleChangeCordinate = (cordinates) => {
        props.changeCordinate(cordinates);
        props.computeUsersDistanceFromLocation(cordinates);
    }

    return (
        <div className="header">
            <h1>{props.title}</h1>
            <div className="headers-btns">
                <Button onClick={() => handleChangeCordinate(australiaCordinates)} variant="outline-secondary">Australia</Button>
                <Button onClick={() => handleChangeCordinate(israelCordinates)} variant="outline-secondary">Israel</Button>
                <Button onClick={() => handleChangeCordinate(unitedStatesCordinates)} variant="outline-secondary">United States</Button>
                <Button onClick={() => handleChangeCordinate(franceCordinates)} variant="outline-secondary">France</Button>
                <Button onClick={() => handleChangeCordinate(japanCordinates)} variant="outline-secondary">Japan</Button>
            </div>
            <Button className="show-users-btn" onClick={()=> props.fetchUsers(props.markerCordinates)}>Show users</Button>
        </div>

    );
}

export default Header;