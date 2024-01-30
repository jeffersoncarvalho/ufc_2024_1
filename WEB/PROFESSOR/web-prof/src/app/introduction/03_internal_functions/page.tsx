import Link from "next/link";

const Calculator = () => {
    
    function sum(x:number,y:number):number{
        return x+y
    }

    const a:number = 10;
    const b:number = 15;

    return(
        <>
            <h1>The sum of {a} and {b} is equal to {sum(a,b)}</h1>
            <Link href="/">Home</Link>
        </>
    )
}

export default Calculator