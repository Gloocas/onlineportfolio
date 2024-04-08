import { useState, useEffect } from 'react'; 
import logo from "./logo.svg";
import Clang from "../c-program-icon.svg"
import CSharp from "../CSharp.svg"
import java from "../Java.svg"
import JavaScript from "../JS.svg"
import pyt from "../pythontest.svg"
import TS from "../TypeScript.svg"


export const Skills = () => {
    const [curLang, setLang] = useState("This will display a language")
    const [curText, setText] = useState("This will display experience I have with above language")
    
    return (
        <div>
            <div className='flex'>
                <div>
                 <img src={Clang} alt="cPlus"></img>
                </div>
                <div>
                 <img src={CSharp} alt="cSharp"></img>
                </div>
                <div>
                 <img src={java} alt="Java"></img>
                </div>
                <div>
                 <img src={JavaScript} alt="JS"></img>
                </div>
                <div>
                 <img src={pyt} alt="python"></img>
                </div>
            </div>
            <div>
                <span>{curLang}</span>
                <p>{curText}</p>
            </div>
        </div>
    )
}