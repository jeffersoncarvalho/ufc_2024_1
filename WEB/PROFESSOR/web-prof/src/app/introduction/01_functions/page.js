import Link from "next/link"
//v.0
/*function MyFunction () {
    return (
        <>
            <h1>My Classic Function</h1>
            <Link href="/">Home</Link>
        </>
        
    )
}*/

//v.1
/*const MyFunction = () => {
    return (
        <>
            <h1>My Arrow Function</h1>
            <Link href="/">Home</Link>
        </>
    )
}*/

//v.2
/*const MyFunction = () => {
    const pi = 3.14 // instruction #1
    return (
        <>
            <h1>My Arrow Function (PI: {pi})</h1>
            <Link href="/">Home</Link>
        </>
    ) //instruction #2
}//function body
*/

//v.3
const MyFunction = () =>
    <>
        <h1>My Arrow Function One Instruction</h1>
        <Link href="/">Home</Link>
    </>

export default MyFunction