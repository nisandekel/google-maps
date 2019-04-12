

export const CHANGE_CORDINATES="CHANGE_CORDINATES";

export const changeCordinate = (newCorrdinates,isMarkerCordinatesNeedChange,targetUser=null)=>{
    return {type:CHANGE_CORDINATES, newCorrdinates, isMarkerCordinatesNeedChange, targetUser};
}