
import { connect } from "react-redux";
import setAdd, { setSub } from "./component/action";
import { lazy, Suspense, useState } from "react";

const User=lazy(()=>import("./User"));


function App({count,setAdd,setSub}) {
  const [value,setValue]=useState()
  const[error,setError]=useState("")
  const[show,setShow]=useState(false)
  const[data,setData]=useState();
  const [user,setUser]=useState()
  const[pass,setPass]=useState()
  const[err,seterr]=useState()
  const handleSubmit=()=>{
   if(value % 5===0)
   {
     setError("divisible by 5")
   }
   else{
    setError("please prvide write")
   }
  }

  const inputSubmit=()=>
  {
      let res=`@${data+data.length}`
      setData(res)
  }

  const submitForm=(e)=>
  {
    e.preventDefault();
    if(!pass & !user )
    {
      seterr("pleaee provifr data")
    }
    else if (pass.length<=6)
      {
        seterr("pass is leass than 6")

      }
      else{
        seterr("done")
      }
    
  }
  
  


  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="text" onChange={(e)=>setData(e.target.value)} value={data}/>
      <button onClick={inputSubmit}>submit me </button>
      
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
      {
        err?err:null
      }
      <form>
        <label>Username</label>
        <input type="text" onChange={(e)=>setUser(e.target.value)} value={user}/>
        <label>Password</label>
        <input type="password" onChange={(e)=>setPass(e.target.value)}value={pass}/> 
        <button onClick={submitForm}> submit</button>
      </form>
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
