



const ComFilho = ({mensagem, enviarMensagem}) => {
    return (
        <div>
            <h2>Mensagem do meu pai: {mensagem}</h2>
            <button
                onClick={() => { enviarMensagem("Oi pai! Me empresta uma grana?") }}
            >
                Enviar Mensagem para o Pai!
            </button>
        </div>
    )
}

export default ComFilho