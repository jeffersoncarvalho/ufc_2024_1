import { store } from "./store/store"
import { Provider } from "react-redux"
import ContadorRedux from "./ContadorRedux"

const PrincipalRedux = () => {
    return (
        <>
           <Provider store={store}>
                <ContadorRedux />
           </Provider> 
        </>
    )
}

export default PrincipalRedux