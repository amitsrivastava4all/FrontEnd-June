
import {calc} from './logic';
import {actionNames} from './actionnames';
export const reducer = (state={},action)=>{
    console.log("After Action Call reducer call ",action)
    if(action.type==actionNames.ADD){
        var result = calc.add(action.pay.first, action.pay.second);
        //var result = action.payload.first + action.payload.second;
        console.log("Result is ",result);
        state = {...state,output:result};
        console.log("Updated State is ",state);
        return state;
    }
    else
    if(action.type==actionNames.SUBTRACT){
        return state;
    }
    return state;
} 