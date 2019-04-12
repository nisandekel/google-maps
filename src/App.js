import React, { Component } from 'react';
import Map from './components/Map/Map.view';
import Header from './components/Header/Header.view';
import { connect } from 'react-redux';
import { changeCordinate } from './components/Map/Map.actions';
import { fetchUsers, computeUsersDistanceFromLocation } from './components/UsersList/UsersList.actions';
import { defaultCordinates } from './cordinates/cordinates';
import './App.css';

class App extends Component {
  render() {
    let { cordinates, changeCordinate, fetchUsers, usersList, computeUsersDistanceFromLocation } = this.props;
    if (cordinates === null) {
      cordinates = { mapCordinates: defaultCordinates, markerCordinates: defaultCordinates }
    }
    return (
      <div className="App">
        <Header markerCordinates={cordinates.markerCordinates} computeUsersDistanceFromLocation={computeUsersDistanceFromLocation}
          fetchUsers={fetchUsers} changeCordinate={changeCordinate} title={this.props.pageTitle}
        />
        <Map usersList={usersList} mapCordinates={cordinates.mapCordinates}
          markerCordinates={cordinates.markerCordinates} targetUser = {cordinates.targetUser}
        >
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { cordinates, usersList } = state;

  return {
    cordinates,
    usersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCordinate: (newCordinates) => dispatch(changeCordinate(newCordinates, true)),
    fetchUsers: (currentCordinates) => { dispatch(fetchUsers(currentCordinates)) },
    computeUsersDistanceFromLocation: (currentLocation) => dispatch(computeUsersDistanceFromLocation(currentLocation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
