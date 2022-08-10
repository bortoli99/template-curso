import Router from "next/router"
import { createContext, useEffect, useState } from "react"
import firebase, { auth } from "../../database/FirebaseConfig"
import Usuario from "../../model/Usuario"
import Cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-coder-auth', logado, {
            expires: 2
        })
    } else {
        Cookies.remove('admin-template-coder-auth')
    }
}

export function AuthProvider(props) {

    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    useEffect(() => {
        if (Cookies.get('admin-template-coder-auth')) {
            const cancelar = auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    async function configurarSessao(usuarioFirebase: firebase.User) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            gerenciarCookie(true)
            setUsuario(usuario)
            setCarregando(false)
            return usuario?.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function cadastrar(email: string, senha: string) {
        try {
            setCarregando(true)
            const resposta = await auth().createUserWithEmailAndPassword(email, senha)
            await configurarSessao(resposta.user)
            Router.push("/")
        } finally {
            setCarregando(false)
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true)
            const resposta = await auth().signInWithEmailAndPassword(email, senha)
            await configurarSessao(resposta.user)
            Router.push("/")
        } finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        const resposta = await auth().signInWithPopup(new auth.GoogleAuthProvider())
        await configurarSessao(resposta.user)
        Router.push("/")
    }

    async function logout() {
        try {
            setCarregando(true)
            await auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
            Router.push("/login")
        }
    }

    return (

        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            loginGoogle,
            cadastrar,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext