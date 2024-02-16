import Quill from "quill";
import { useEffect } from "react";
import "quill/dist/quill.snow.css";



function TextEditor(){

    useEffect(()=>{
        new Quill('#container' , {theme : "snow"})
    } , [])

return(
    <div id="container"></div>
);


}

export default TextEditor;