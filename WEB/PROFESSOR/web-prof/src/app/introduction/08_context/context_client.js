'use client'

import { ThemeContext } from "./theme_provider"
import ContextClientClient from "./context_client_client."

const ContextClient = () => {
    return (
        <ThemeContext.Consumer>
            {
                (value) => {
                    return (
                        <>
                            <h1>Context Client Value: {value.mode}</h1>
                            <ContextClientClient />
                        </>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ContextClient