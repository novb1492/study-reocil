import { useEffect } from "react";
import { init,kmapInit } from "./state";
import {useRecoilState } from "recoil";



function App() {
  let [test,setText]=useRecoilState(init);
  let [kmap,setMap]=useRecoilState(kmapInit);
  console.log(kmap);
  useEffect(()=>{
    let dataArr=[{text:'t',id:'1'},{text:'t',id:'1'}];
    setText(dataArr);
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    setMap(new window.kakao.maps.Map(container, options));
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
     <div id="map"></div>
     ------------------
     <button onClick={add}>add</button>
    </div>
  );
}

export default App;
