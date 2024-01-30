import { Children, cloneElement } from "react"

const Supermarket = ({children, name}) => {
    return (
        <>
            <h1>{name}</h1>
            {children}
        </>
    )
}

const SupermarketV2 = ({children, name}) => {
    return (
        <>
            <h1>{name} V2</h1>
            {
                Children.map(
                    children,
                    (child) => cloneElement(child,{supermaket:name})
                )
            }
        </>
    )
}

const Product = ({price, name}) => {
    return (
        <>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
        </>
    )
}

const ProductV2 = ({price, name, supermaket}) => {
    return (
        <>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <h3>Supermarket: {supermaket}</h3>
        </>
    )
}

export {Supermarket, Product, SupermarketV2, ProductV2}