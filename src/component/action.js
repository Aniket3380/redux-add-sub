

const setAdd=(data)=>{
    return{
        type:"ADDITION",
        payload:data
    
    }
}

 export const setSub=(data)=>{
    return{
        type:"SUBSTRACTION",
        payload:data

    }
}

export default setAdd