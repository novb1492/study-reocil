import { atom } from "recoil";

const init=atom({
    key:"test",
    default:[]
});
const kmapInit=atom({
    key:"kmap",
    default:[]
});
export{init,kmapInit}