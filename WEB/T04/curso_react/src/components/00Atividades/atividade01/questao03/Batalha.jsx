import { Children, cloneElement } from "react"

const Hero = ({name, arena}) => {
    return (
        <>
            <h3>Hero: {name}, lutando em {arena}</h3>
        </>
    )
}

const Enemy = ({name, arena}) => {
    return (
        <>
            <h3>Enemy: {name}, lutando em {arena}</h3>
        </>
    )
}

const Arena = ({name, children}) => {
    return (
        <>
            <h3>Arena: {name}</h3>
            {
                Children.map(
                    children,
                    ( filho ) => {
                       return cloneElement(filho,{arena:name})
                    }
                )
            }
        </>
    )
}

const World = ({children}) => {
    return (
        <>
            {children}
        </>  
    )
}

export {Hero, Enemy, Arena, World}