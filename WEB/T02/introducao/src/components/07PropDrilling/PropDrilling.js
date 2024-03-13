const CompA = () => {

    let funcaoDeC = null

    function receberRefDeC(ref) {
        funcaoDeC = ref
    }

    return (
        <div>
            <CompB acaoDeD={funcaoDeC}/>
            <CompC enviarRefParaA={receberRefDeC}/>
        </div>
    )
}

const CompB = ({acaoDeD}) => {
    return (
        <div>
            <button
                onClick={() => typeof(acaoDeD)}
            >
                Disparar ação em D
            </button>
        </div>
    )
}

const CompC = ({enviarRefParaA}) => {

    let funcaoDeD = null

    function receberRefDeD(ref) {
        funcaoDeD = ref
        enviarRefParaA(funcaoDeD)
    }

    return (
        <div>
            <CompD enviarRefParaC={receberRefDeD}/>
        </div>
    )
}

const CompD = ({enviarRefParaC}) => {

    enviarRefParaC(acaoEmD)

    function acaoEmD(){
        alert("Estou em D")
    }

    return (
        <div>
            
        </div>
    )
}

export {CompA, CompB, CompC, CompD}