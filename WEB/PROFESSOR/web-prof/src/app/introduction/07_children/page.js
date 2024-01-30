import Link from "next/link";
import { Supermarket, Product, SupermarketV2, ProductV2 } from "./components/supermarket";

/*const MyChildren = () => {
    return (
        <>
            <Supermarket name="Tabajara">
                <Product name="Coca Cola 1L" price={10} />
                <Product name="Torradas" price={5.5} />
            </Supermarket>
            <Link href="/">Home</Link>
        </>
    )
}*/

const MyChildren = () => {
    return (
        <>
            <SupermarketV2 name="Tabajara">
                <hr />
                <ProductV2 name="Coca Cola 1L" price={10} />
                <hr />
                <ProductV2 name="Torradas" price={5.5} />
                <hr />
            </SupermarketV2>
            <Link href="/">Home</Link>
        </>
    )
}

export default MyChildren