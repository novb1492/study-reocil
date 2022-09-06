import { useEffect } from "react";
import { init } from "./state";
import {useRecoilState } from "recoil";



function App() {
  const [test,setText]=useRecoilState(init);
    console.log(test);
  return (
    <div className="App">
     
     ------------------2
    </div>
  );
}

export default App;
