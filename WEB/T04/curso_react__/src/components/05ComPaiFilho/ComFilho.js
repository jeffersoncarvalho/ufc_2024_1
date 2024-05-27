const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {
    
    //let {mensagem} = props

    return (
        <>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button
                onClick={
                    () => {
                        enviarMensagemParaOPai("Oi pai, tudo bom?")
                    }
                }
            >
                Enviar mensagem para o pai!
            </button>
        </>
    )
}

export default ComFilho