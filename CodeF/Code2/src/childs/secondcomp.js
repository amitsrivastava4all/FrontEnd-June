import React from 'react';
import {connect} from 'react-redux';
 const SecondComp = (props)=>{
    return (
        <div>
            <h2>Result is {props.result}</h2>
            <h4>Async Result is {props.z}</h4>
        </div>
    )
}
const mapStateToProps= (state)=>{
    console.log("Map State to Props Called ... ",state);
    if(state.reducer.output){
        let result2 = state.reducer.output;
        state.reducer.output = undefined;
        return {
            result:result2,
            
        }
    }
    if(state.reducer2.output){
        let result2 = state.reducer2.output;
        state.reducer2.output = undefined;
        console.log("reducer2 Asynch result is ",state.reducer2.resultasync);
        return {
            result:result2,
            z:state.reducer2.resultasync
        }
    }
    return {
        z:state.reducer2.resultasync
    };
    // return {
    //     // PropsName: ReduxState
    //     result : state.reducer.output
    // }
}
export default connect(mapStateToProps)(SecondComp);
