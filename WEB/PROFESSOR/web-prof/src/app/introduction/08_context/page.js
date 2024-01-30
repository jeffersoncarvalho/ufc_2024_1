import Link from "next/link";
import ContextClient from "./context_client";

const PageContext = () => {
    return (
        <>
            <ContextClient />
            <Link href="/">Home</Link>
        </>
    )
}

export default PageContext