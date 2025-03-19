import Container from '../../components/Container';
import sunshadeImg from '../../assets/sunshade.png';
import surfImg from '../../assets/surf.png';
import { Main } from './styles';
import Header from '../../components/Header';

export default function Home() {
    return(
        <>
            <Header />
            <Main>
                <Container
                    title="Minhas Sessões"
                    imgPath={sunshadeImg}
                    linkHref="MySessions"
                    linkText="Minhas sessões"
                />
                <Container
                    title="Bora surfar!"
                    imgPath={surfImg}
                    linkHref="Schedule"
                    linkText="Agendar"
                />
            </Main>
        </>
    )
}