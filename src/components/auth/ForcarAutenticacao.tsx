import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/UseAuth'

export default function ForcarAutenticacao(props) {

    const { usuario, carregando } = useAuth()

    function renderizarContudo() {
        return (
            <>
                {/* uma outra forma de protejar as paginas */}
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("admin-template-coder-auth")){
                                window.location.href = "/autenticacao"
                            }
                        `
                    }} />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className="flex justify-center items-center h-screen">
                <Image src={loading} />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarContudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        Router.push('/login')
        return null
    }

}