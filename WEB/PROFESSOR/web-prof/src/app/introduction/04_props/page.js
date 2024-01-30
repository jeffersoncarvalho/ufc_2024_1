/*Atenção, você deve configurar o next.config para renderizar imagens externas!*/
import Link from "next/link"
import Student from "./components/student"

const MyProps = () => {
    return (
        <>
            <Student 
                image = "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-240x320.png"
                name = "Jefferson"
                university = "UFC Quixadá"
                course = "Computer Science"
                subjects = {[
                    "Desenvolvimento WEB",
                    "Fundamentos de Programação",
                    "Programação OO",
                    "Gerência de Projetos"
                ]}
            />
            <Link href="/">Home</Link>
        </>
    )
}

export default MyProps