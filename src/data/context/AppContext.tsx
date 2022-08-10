import { createContext, useEffect, useState } from "react";


interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){  

    const [tema, setTema] = useState('')

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    function alternarTema(){
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer uma forma de consumir