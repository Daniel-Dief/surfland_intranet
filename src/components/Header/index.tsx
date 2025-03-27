import { Container, List } from './styles'
import NavButton from '../NavButton'
import useUser from '../../store/useUser'
import { useModalActive } from '../../store/modalActive'
import logoImg from "../../assets/logo.png"
import ticketImg from "../../assets/ticket.png"
import userImg from "../../assets/user.png"


export default function Header() {
    const { open } = useModalActive()
    const loggedUser = useUser()
    
    return (
        <Container>
            <List>
                <li>
                    <NavButton
                        text="Inicio"
                        imgPath={logoImg}
                        hrefText="Home"
                    />
                </li>
                <li>
                    <NavButton
                        text="Sessões"
                        imgPath={ticketImg}
                        hrefText="MySessions"
                    />
                </li>
                <li>
                    <NavButton
                        text = {loggedUser.name 
                            ? loggedUser.name.split(" ")[0]
                            : "Login"}
                        imgPath={userImg}
                        onClick={
                            loggedUser.userId
                            ? () => open("options")
                            : () => open("login")
                        }
                    />
                </li>
            </List>
        </Container>
    )
}