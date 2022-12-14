import { MoonIcon, SunIcon } from "../icons";

interface BotaoTemaProps{
    tema: string
    alternarTema: () => void
}

export default function BotaoTema(props: BotaoTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={` hidden sm:flex items-center bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full cursor-move `} >
            <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
                {SunIcon("h-5 w-5")}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-white`}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={` hidden sm:flex items-center justify-end  bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full cursor-move `}>
            <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
                {MoonIcon("h-5 w-5")}
            </div>
        </div>
    )
}