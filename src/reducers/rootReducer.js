import MapReducer from './../components/Map/Map.reducer';
import UsersListReducer from './../components/UsersList/UsersList.reducer';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
    cordinates:MapReducer,
    usersList:UsersListReducer
})

export default rootreducer;

