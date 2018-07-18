export const reducer2 = (state={},action)=>{
    if(action.type=='MUL'){
        let result = action.pay.first * action.pay.second;
        console.log("Inside Multiply ",result);
        return {...state,output:result};
    }
    else
    if(action.type=='ASYNC'){
        console.log("Inside Async REDUCER..... ",action);
        return {...state,resultasync:(action.pay.firstNumber * action.pay.secondNumber)};
    }
    return state;
}