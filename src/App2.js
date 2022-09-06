import { useEffect } from "react";
import { init,kmapInit } from "./state";
import {useRecoilState } from "recoil";


function App() {
  const [test,setText]=useRecoilState(init);
  const [kmap,setMap]=useRecoilState(kmapInit);
    console.log(kmap);
  return (
    <div className="App">
     
     ------------------2
    </div>
  );
}

export default App;
