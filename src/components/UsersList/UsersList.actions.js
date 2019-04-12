
export const USERS_FETCHED = "USERS_FETCHED";
export const SORT_LIST = "SORT_LIST";
export const COMPUTE_USERS_DISTANCE_FROM_LOCATION = "COMPUTE_USERS_DISTANCE_FROM_LOCATION";

export const usersFetched = (usersList) => {
    return { type: USERS_FETCHED, usersList };
}

export const sortList = () => {
    return { type: SORT_LIST }
}

export const computeUsersDistanceFromLocation = (currentLocation) => {
    return { type: COMPUTE_USERS_DISTANCE_FROM_LOCATION, currentLocation }
}

export function fetchUsers(currentCordinates) {
    const baseUrl = "https://glacial-escarpment-40412.herokuapp.com/users/?_limit=100";
    return function (dispatch) {
        fetch(baseUrl)
            .then(res => res.json())
            .then(res => {
                dispatch(usersFetched(res))
                dispatch(computeUsersDistanceFromLocation(currentCordinates))
            });
    }
} 