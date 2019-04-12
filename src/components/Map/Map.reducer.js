import { CHANGE_CORDINATES } from './Map.actions';
import { defaultCordinates } from './../../cordinates/cordinates';

function MapReducer(state = null, action) {
    switch (action.type) {
        case CHANGE_CORDINATES:
            let markerCordinates = null;
            let targetUser = null;
            if (action.isMarkerCordinatesNeedChange) {
                markerCordinates = action.newCorrdinates;
                targetUser = state === null ? null : state.targetUser;
            }
            else {
                markerCordinates = state === null ? defaultCordinates : state.markerCordinates;
                targetUser = action.targetUser;
            }
            return { mapCordinates: action.newCorrdinates, markerCordinates, targetUser };
        default:
            return state;
    }
}

export default MapReducer;