import React from 'react';
import './User.css';
import { Card } from 'react-bootstrap';

const User = (props) => {

    return (
        <div id={props.id} className="invisible">
            <Card className="user-card">
                <Card.Body>
                    <Card.Text className="username">{props.name}</Card.Text>
                    <Card.Img className="profilePic" variant="top" src={props.profilePic} />
                    <Card.Text className="location">
                        latitude: {props.lat + "\n"} longitude: {props.lng}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}

export default User;
