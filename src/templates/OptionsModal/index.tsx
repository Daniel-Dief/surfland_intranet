import { Container, TitleBox, Title, CloseButton, OptionBox } from "./style";
import { useModalActive } from "../../store/modalActive";

import BigButton from "../../components/BigButton";

import closeImg from "../../assets/close.png";

export default function OptionsModal() {
    const { close : closeModal} = useModalActive();

    function handleOptions() {
        alert("opcoes gestor")
    }
    
    function handleChangePassword() {
        alert("alterar senha")
    }
    
    function handleExit() {
        alert("sair")
    }

    return (
        <Container>
            <TitleBox>
                <Title>Configurações</Title>
                <CloseButton src={ closeImg } onClick={ closeModal }/>
            </TitleBox>
            <OptionBox>
                <BigButton
                    onClick={handleOptions}
                >
                    Opções de Gestor
                </BigButton>
                <BigButton
                    onClick={handleChangePassword}
                >
                    Alterar Senha
                </BigButton>
                <BigButton
                    onClick={handleExit}
                >
                    Sair
                </BigButton>
            </OptionBox>
        </Container>
    )
}