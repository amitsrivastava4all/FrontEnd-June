export const actionCreator = (actionName, firstNumber, secondNumber)=>{
    return {
        type:actionName,
        pay:{first:firstNumber,second:secondNumber}
    };
}

