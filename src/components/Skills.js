import { useState, useEffect } from 'react' 
import logo from "../images/logo.svg"
import games from "../images/gamecolor.svg"
import webdev from "../images/webdevcolor.svg"
import compsci from "../images/compsci.svg"
import { textRotation } from './Banner.js'

var curImage = games
export {curImage}



export const Skills = (props) => {
    const [curLang, setLang] = useState("Game Developer")
    const [curText, setText] = useState("Directed two game projects through UVA's Student Game Developers Club\nTaught new developers nuances in game engine use\nCreated assets and music for game jam projects")
    const ImageUpdating = props.ImageUpdating
    const setUpdating = props.setUpdating

    function changeSkill(lang) {
        setUpdating(true)
        setTimeout(() => {
            setLang(lang)
            switch(lang) {
                case "Game Developer":
                    setText("Directed two game projects through UVA's Student Game Developers Club\nTaught new developers nuances in game engine use\nCreated assets and music for game jam projects")
                    curImage = games
                    textRotation[0] = "Game Developer "
                    textRotation[1] = "Pixel Artist "
                    textRotation[2] = "Soundtrack Composer "
                    break;
                case "Web Developer":
                    setText("Created animated webpage using basic HTML, CSS, and JS\nCreated a responsive online portfolio using React framework (this website)")
                    curImage = webdev
                    textRotation[0] = "Web Developer "
                    textRotation[1] = "UI Designer "
                    textRotation[2] = "React Enthusiast "
                    break;
                case "Computer Science":
                    setText("Fourth year Computer Science student at the University of Virginia\nUnderstanding of algorithmic analysis and implementation\nExperience programming and debugging in Python, Java, C, and C#")
                    curImage = compsci
                    textRotation[0] = "Computer Scientist "
                    textRotation[1] = " "
                    textRotation [2] = " "
                    break;
            }
            setUpdating(false)
        }, 1000)
    }


    return (
        <div id='skills'>
            <div className='flex'>
                <div onClick={() => changeSkill("Game Developer")} className={curLang === "Game Developer" ? 'activeSkill' : 'pausedSkill'}>
                 <img src={games} alt="GameDev"></img>
                </div>
                <div onClick={() => changeSkill("Web Developer")} className={curLang === "Web Developer" ? 'activeSkill' : 'pausedSkill'}>
                 <img src={webdev} alt="WebDev"></img>
                </div>
                <div onClick={() => changeSkill("Computer Science")} className={curLang === "Computer Science" ? 'activeSkill' : 'pausedSkill'}>
                 <img src={compsci} alt="CS"></img>
                </div>
            </div>
            <div className='skills'>
                <span className={ImageUpdating ? 'updating' : 'finished'}>{curLang}</span>
                <p className={ImageUpdating ? 'updating' : 'finished'}>{curText}</p>
            </div>
        </div>
    )
}