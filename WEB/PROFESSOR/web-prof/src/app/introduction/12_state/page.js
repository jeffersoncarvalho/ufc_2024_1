import Link from "next/link"
import UseState from "./use_state"

const MyState = () => {
    return (
        <>
            <UseState /> <br />
            <Link href="/">Home</Link>
        </>
    )
}

export default MyState