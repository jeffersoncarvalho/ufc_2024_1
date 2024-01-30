'use client'

import ChildComponent from "./child"

const ParentComponent = () => {
    
    function sendMsg(msg) {
        alert("MSG: " + msg)
    }
    
    return (
        <>
            <ChildComponent sendMsg={sendMsg}/>
        </>
    )
}

export default ParentComponent