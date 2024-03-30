import { Children, cloneElement } from "react"

const Hero = ({name, arena}) => {
    return (
        <>
            <h4>Hero: {name}, lutando no {arena}</h4>
        </>
    )
}

const Enemy = ({name, arena}) => {
    return (
        <>
            <h4>Enemy: {name}, lutando no {arena}</h4>
        </>
    )
}

const Arena = ({children, arena}) => {
    return (
        <>
            <h3>Arena: {arena}</h3>
           {Children.map(
                children,
                (elemento) => cloneElement(elemento,{arena})
           )}
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

export {World, Arena, Hero, Enemy}