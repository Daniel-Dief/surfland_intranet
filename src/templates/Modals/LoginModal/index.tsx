import { useRef, FormEvent } from "react";

import InputPassword from "../../../components/Inputs/Password"
import InputText from "../../../components/Inputs/Text"
import InputSubmit from "../../../components/Inputs/Submit"
import { Container, TitleBox, Title, CloseButton, Form } from "./style";
import { useModalActive } from "../../../store/modalActive";
import { toast } from "react-toastify";
import sendLoginRequest from "../../../services/auth/logIn.service";
import useToken from "../../../store/useToken";
import useUser from "../../../store/useUser";

import closeImg from "../../../assets/close.png";

export default function LoginModal() {
    const [ loginRef, passwordRef ] = [ useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null) ];
    const { close : closeModal} = useModalActive();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {        
        e.preventDefault();
        const login = loginRef.current?.value;
        const password = passwordRef.current?.value;

        if (!login?.trim() || !password?.trim()) {
            toast.error("Login e senha são obrigatórios");
            return;
        }
        
        const hashPassword = btoa(`${login}:${password}`);

        try {
            const response = await sendLoginRequest(hashPassword);
            
            if (response) {
                useToken.getState().setToken(response.token);
                useToken.getState().setHashPassword(login, password);
                useUser.setState({
                    userId: response.user.UserId,
                    name: response.user.Name,
                    login: response.user.Login,
                    accessProfileId: response.user.AccessProfileId,
                    statusId: response.user.StatusId
                });
                
                closeModal();
            }
        } catch (error) {
            console.error("Erro durante login:", error);
        }
    }

    return (
        <Container>
            <TitleBox>
                <Title>Login</Title>
                <CloseButton src={ closeImg } onClick={ closeModal }/>
            </TitleBox>
            <Form onSubmit={ handleLogin }>
                <InputText placeholder="Documento" inputRef={ loginRef }/>
                <InputPassword placeholder="Senha" inputRef={ passwordRef }/>
                <InputSubmit value="Entrar" />
            </Form>
        </Container>
    )
}