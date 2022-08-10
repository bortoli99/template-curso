import Conteudo from "../components/templates/Conteudo";
import Layout from "../components/templates/Layout";

export default function Home() {
  return (
    <Layout titulo="Párgina inicial" subtitulo="Estamos construindo um template Admin">
      <Conteudo>
        <h3>conteudo</h3>
      </Conteudo>
    </Layout>
  )
}
