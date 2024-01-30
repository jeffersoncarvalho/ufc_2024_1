import Link from "next/link";
import { Header, Body as B, Footer } from "./components/my_page";

const MyPage = () => {
    return (
        <>
            <Header />
            <B />
            <Footer />
            <Link href="/">Home</Link>
        </>
    )
}

export default MyPage