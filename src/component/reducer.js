const initialState={
    count:0
}

 export const Bookreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "ADDITION":
            return{
                ...state,
                count:state.count+action.payload
            }
            case "SUBSTRACTION":
                return{
                    ...state,
                    count:state.count - action.payload
                }
            default:
                return state;
    }
}