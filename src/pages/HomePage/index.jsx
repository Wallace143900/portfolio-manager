import img from "../../../public/imagemInicial.jpeg";
import { Header } from "../../components/Header";

export const HomePage = () => {
    return (
        <main>
            <Header />
            <section>
                <div>
                    <h2 className="title2">portify</h2>
                </div>
                <div>
                    <h1 className="title1_mobile">Crie seu portfólio online</h1>
                    <p className="paragraphy">Crie um portfólio para você em minutos</p>
                    <button>cadastre-se</button>
                    <p className="paragraphy">ou</p>
                    <button>acesse seu portfólio</button>
                    <section>
                        <img src={img} alt="Imagem" />
                    </section>
                </div>
            </section>
        </main>
    )
}