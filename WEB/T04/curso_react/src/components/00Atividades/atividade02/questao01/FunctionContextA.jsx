import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const cores = {bkgA:"green",bkgB:"yellow",bkgC:"red",bkgD:"gray"}

    return (
         <ColorTheme.Provider value={cores}>
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA