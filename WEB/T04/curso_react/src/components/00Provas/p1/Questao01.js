
const Questao01A = () => {

    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    return (
        <>
            <Questao01B lista={lista} />
        </>
    )
}

const Questao01B = ({lista}) => {
    
    const calcularMaiores = () => {
        let maiores = []
        for (let i=0; i<lista.length; i++){
            if (lista[i].a>lista[i].b && lista[i].a>lista[i].c) maiores[i] = lista[i].a
            else if (lista[i].b>lista[i].a && lista[i].b>lista[i].c) maiores[i] = lista[i].b
            else maiores[i] = lista[i].c
        }
        return maiores
    }

    const exibirMaiores = () =>{
        
        let maiores = calcularMaiores()

        return (
            <>
                <h1>Maiores: {maiores[0]}, {maiores[1]}, {maiores[2]}</h1>
            </>
        )
    }

    return (
        <>
            {exibirMaiores()}
        </>
    )
}

export default Questao01A