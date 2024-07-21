import login from "../../../public/login.jpeg";

export const Login = () => {
    return (
        <section>
            <div>
                <img src={login} alt="imagem de login" />
            </div>
            <div>
                <h1 className="title1">Login</h1>
                <p className="paragraphy">Acesse o portfólio</p>
                <form>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <button>entrar</button>
                </form>
                <p className="paragraphy">Não possui um cadastro?</p>
            </div>
            <button>Cadastre-se</button>
        </section>
    )
}