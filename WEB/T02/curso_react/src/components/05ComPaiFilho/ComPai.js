import ComFilho from "./ComFilho"

const ComPai = () => {

    function receberMensagem(mensagem){
        alert("Meu filho falou: " + mensagem)
    }

    return (
        <div>
            <ComFilho 
                mensagem = "Oi filho, tudo bom?"
                enviarMensagem = {receberMensagem}
            />
        </div>
    )
}

export default ComPai