import React from 'react';
import './UsersList.css';
import { Button } from 'react-bootstrap';
import { sortList } from './../UsersList/UsersList.actions';
import { changeCordinate } from './../Map/Map.actions';
import { connect } from 'react-redux';


const UsersList = (props) => {

    const userListClass = props.users==false ? "invisible" : "users-list";

    const users = props.users.map(user => {
        return (
            <li className="user" key={user.id} onClick={() => props.changeCordinate({ lat: parseFloat(user.location.latitude), lng: parseFloat(user.location.longitude) },user.id)}>
                <span>name: {user.name} latitude:{user.location.latitude} longitude: {user.location.longitude} </span>
            </li>
        );
    });

    return (
        <div className={userListClass}>
            <h3 className="userslist-title">List Of Users</h3>
            <label className="sort-lbl">Sort by location:</label>
            <Button className="sort-btn" variant="success" onClick={props.sortList}>Sort</Button>
            <ul>
                {users}
            </ul>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        sortList: () => dispatch(sortList()),
        changeCordinate: (newCordinates,userID) => dispatch(changeCordinate(newCordinates, false,userID)),
    }
}

export default connect(null, mapDispatchToProps)(UsersList);

