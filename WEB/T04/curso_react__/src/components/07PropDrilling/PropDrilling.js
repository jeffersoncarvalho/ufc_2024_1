//PROP DRILLING
const CompA = () => {

    const variavelDeA = "Variáel de A Alterada"

    return (
        <div>
            <CompB variavelDeA={variavelDeA}/>
            <CompC variavelDeA={variavelDeA}/>
        </div>
    )
}

const CompB = ({variavelDeA}) => {
    return (
        <div>
            <h3>B: {variavelDeA}</h3>
        </div>
    )
}

const CompC = ({variavelDeA}) => {
    return (
        <div>
            <CompD variavelDeA={variavelDeA} />
        </div>
    )
}

const CompD = ({variavelDeA}) => {
    return (
        <div>
            <CompE variavelDeA={variavelDeA} />
        </div>
    )
}

const CompE = ({variavelDeA}) => {
    return (
        <div>
            <h3>E: {variavelDeA}</h3>
        </div>
    )
}

export { CompA, CompB, CompC, CompD, CompE }
