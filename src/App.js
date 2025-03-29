
import { connect } from "react-redux";
import setAdd, { setSub } from "./component/action";
import { lazy, Suspense, useState } from "react";

const User=lazy(()=>import("./User"));


function App({count,setAdd,setSub}) {
  const [value,setValue]=useState()
  const[error,setError]=useState("")
  const[show,setShow]=useState(false)

  const handleSubmit=()=>{
   if(value % 5===0)
   {
     setError("divisible by 5")
   }
   else{
    setError("please prvide write")
   }
  }
  
  return (
    <div className="App">
      {
        show ?
        <Suspense fallback={<h3>loading</h3>}><User/></Suspense>
        :null
}
      {
        error && error ?  error:null
      }
      <button onClick={()=>setShow(true)}>on click for lazy loading</button>
    
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
      <h1>hello world</h1>
      <h1>count:{count}</h1>
      <button onClick={setAdd}>addition</button>   
      <button onClick={setSub}>substraction</button>
      <button>reset</button>
      <button>ok</button>
       </div>
  );
}

const mapStateToProps=(state)=>
({
  count:state.count
})
 const mapDispatchToProps=(dispatch)=>
 ({
    setAdd:()=>dispatch(setAdd(10)),
    setSub:()=>dispatch(setSub(10))
 })

export default connect(mapStateToProps,mapDispatchToProps)(App);
