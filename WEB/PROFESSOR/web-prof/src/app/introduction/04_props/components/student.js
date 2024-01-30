import Image from "next/image"

const Student = (props) =>
    <>
        <Image 
            src={props.image}
            alt="Student picture"
            width={240}
            height={320}
        />
        <h1>Name: {props.name}</h1>
        <h2>University: {props.university}</h2>
        <h2>Course: {props.course}</h2>
        <h2>List of Subjects Enrolled:</h2>
        <ul>
            <li>{props.subjects[0]}</li>
            <li>{props.subjects[1]}</li>
            <li>{props.subjects[2]}</li>
            <li>{props.subjects[3]}</li>
        </ul>
    </>

export default Student