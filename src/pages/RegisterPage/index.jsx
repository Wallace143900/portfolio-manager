import { FaArrowLeft } from "react-icons/fa6";

export const RegisterPage = () => {
    return (
        <section>
            <button><FaArrowLeft /> Voltar</button>
            <h1 className="title1">Cadastre-se</h1>
            <p className="paragraphy">Preencha os campos abaixo para criar uma conta</p>
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
            </form>
            <button>Cadastre-se</button>
        </section>
    )
}