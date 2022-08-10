import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon, WarningIcon } from "../components/icons";
import useAuth from "../data/hook/UseAuth";

export default function Login() {

    const { loginGoogle, login, cadastrar } = useAuth()
    const [erro, setErro] = useState(null)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    async function enviar() {
        try{
            if (modo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha)
            }
        } catch(e) {
            exibirErro(e?.message && "Erro Desconhecido!")
        }
    }

    function exibirErro(msg, tempo = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempo * 1000)
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" alt="Imagem da Tela de Login" className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-xl font-bold mb-5`}>{modo === 'login' ? 'Entre com sua Conta' : 'Cadastre-se na Plataforma'}</h1>

                {erro ? (
                    <div className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}>
                        {WarningIcon()}
                        <span className="ml-3">
                        </span>
                            {erro}
                    </div>
                ) : false}


                <AuthInput label="Email" tipo="email" valor={email} onChange={setEmail} obrigatorio />
                <AuthInput label="Senha" tipo="password" valor={senha} onChange={setSenha} obrigatorio />

                <button onClick={enviar} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`} >
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`flex items-center justify-center w-full bg-red-400 hover:bg-red-300 text-white rounded-lg px-4 py-3`} >
                    <div className="flex items-center justify-center mr-2">
                        {GoogleIcon}
                    </div>
                    <div className="flex items-center">
                        <span className="text-xl">
                            Entrar com Google
                        </span>
                    </div>
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`} > Crie um conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`} > Entre com a suas credenciais</a>
                    </p>
                )}

            </div>
        </div>
    )
}