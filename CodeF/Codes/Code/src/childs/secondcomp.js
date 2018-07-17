import React from 'react';
import {connect} from 'react-redux';
 const SecondComp = (props)=>{
    return (
        <div>
            <h2>Result is {props.result}</h2>
        </div>
    )
}
const mapStateToProps= (state)=>{
    return {
        // PropsName: ReduxState
        result : state.output
    }
}
export default connect(mapStateToProps)(SecondComp);
