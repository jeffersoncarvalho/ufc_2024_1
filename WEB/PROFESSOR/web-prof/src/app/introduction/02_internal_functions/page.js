import Link from "next/link";

const Calculator = () => {

    function sum(x, y) {
        return x + y
    }

    const sub = (x, y) => x - y

    const mul = (x, y) => {
        return x * y
    }

    function div(x, y) {
        return x/y
    }

    const a = 10;
    const b = 15;

    return (
        <>
            <h1>The sum of {a} and {b} is equal to {sum(a, b)}</h1>
            <h1>The subtraction of {a} and {b} is equal to {sub(a, b)}</h1>
            <h1>The multiplication of {a} and {b} is equal to {mul(a, b)}</h1>
            <h1>The division of {a} and {b} is equal to {div(a, b).toFixed(2)}</h1>
            <Link href="/">Home</Link>
        </>
    )
}

export default Calculator