export const asyncAction = (actionName, first,second)=>{
    console.log("Call asyncAction Call");
    return (dispatch)=>{
       
        console.log("Dispatch Async Action.... ",actionName);
        fetch("https://raw.githubusercontent.com/brainmentorspvtltd/jsons/master/data.json").then(response=>{
       console.log("Res ",response);    
       response.json().then(data=>{
               console.log("Inside Fetch ",data);
            dispatch({type:actionName,pay:data});
           }).catch(err=>console.log("Error in Ajax Call"));
       }).catch(err=>{
           console.log("Error in Server Call ",err);
       }) 
       
    }
}