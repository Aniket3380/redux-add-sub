
import { connect } from "react-redux";
import setAdd, { setSub } from "./component/action";
function App({count,setAdd,setSub}) {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h1>count:{count}</h1>
      <button onClick={setAdd}>addition</button>   
      <button onClick={setSub}>substraction</button>
      <button>reset</button>
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
