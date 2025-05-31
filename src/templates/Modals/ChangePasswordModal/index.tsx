import { useRef, FormEvent } from "react";

import InputPassword from "../../../components/Inputs/Password"
import InputSubmit from "../../../components/Inputs/Submit"
import { Container, TitleBox, Title, CloseButton, Form } from "./style";
import { useModalActive } from "../../../store/modalActive";
import { toast } from "react-toastify";
import sendChangePasswordRequest from "../../../services/user/changePassword.service";
import useToken from "../../../store/useToken";
import useUser from "../../../store/useUser";

import closeImg from "../../../assets/close.png";

export default function ChangePasswordModal() {
    const [ oldPasswordRef, newPasswordRef, confirmPasswordRef ] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ];
    const { close : closeModal} = useModalActive();

    async function handleChangePassword(e: FormEvent<HTMLFormElement>) {        
        e.preventDefault();
        const oldPassword = oldPasswordRef.current?.value;
        const newPassword = newPasswordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        if (!oldPassword?.trim() || !newPassword?.trim() || !confirmPassword?.trim()) {
            toast.error("Todos os campos são obrigatórios");
            return;
        } else if (newPassword !== confirmPassword) {
            toast.error("A nova senha e a confirmação não coincidem");
            return;
        }

        try {
            const response = await sendChangePasswordRequest({oldPassword, newPassword, confirmPassword});
            
            if (response) {
                const login = useUser.getState().login;
                if(!login) return
            
                useToken.getState().setHashPassword(login, newPassword);
                toast.success("Senha alterada com sucesso");
                closeModal();
            }
        } catch (error) {
            console.error("Erro ao alterar a senha: ", error);
        }
    }

    return (
        <Container>
            <TitleBox>
                <Title>Alterar senha</Title>
                <CloseButton src={ closeImg } onClick={ closeModal }/>
            </TitleBox>
            <Form onSubmit={ handleChangePassword }>
                <InputPassword placeholder="Senha atual" inputRef={ oldPasswordRef }/>
                <InputPassword placeholder="Nova senha" inputRef={ newPasswordRef }/>
                <InputPassword placeholder="Confirmação" inputRef={ confirmPasswordRef }/>
                <InputSubmit value="Alterar" />
            </Form>
        </Container>
    )
}