import Image from "next/image"

const Planet = ({name,image}) => {
    return (
        <>
            <h1>{name}</h1>
            <Image
                src={`/images/${image}`}
                width={100}
                height={100} 
            />
        </>
    )
}

export default Planet