import { useEffect } from "react";
import { init } from "./state";
import {useRecoilState } from "recoil";



function App() {
  let [test,setText]=useRecoilState(init);
  useEffect(()=>{
    let dataArr=[{text:'t',id:'1'},{text:'t',id:'1'}];
    setText(dataArr);
  },[]);
  function add() {
    let dataArr2={...test,ff:{text:'t',id:'1'}};
    console.log(dataArr2);
    setText(dataArr2);
  }
  return (
    <div className="App">
     ㄹㅇㄹㅇ
     {JSON.stringify(test)}
     ------------------
     <button onClick={add}>add</button>
    </div>
  );
}

export default App;
