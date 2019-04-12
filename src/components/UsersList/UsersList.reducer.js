import { USERS_FETCHED } from './UsersList.actions';
import { SORT_LIST, COMPUTE_USERS_DISTANCE_FROM_LOCATION } from './UsersList.actions';


function usersListReducer(state = [], action) {

    let usersList = null;

    switch (action.type) {
        case USERS_FETCHED:
            usersList = action.usersList;
            return usersList;
        case COMPUTE_USERS_DISTANCE_FROM_LOCATION:
            usersList = [...state];
            for (let user of usersList) {
                user.distFromCenter = getDistanceFromLatLonInKm(action.currentLocation.lat, action.currentLocation.lng, user.location.latitude, user.location.longitude);
            }
            return usersList;
        case SORT_LIST:
            usersList = [...state];
            return usersList.sort(compareByDist);
        default:
            return state;
    }
}


function compareByDist(u1, u2) {
    if (u1.distFromCenter > u2.distFromCenter) {
        return 1;
    }
    else if (u1.distFromCenter < u2.distFromCenter) {
        return -1;
    }
    else {
        return 0;
    }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export default usersListReducer;