import { Section, BoxTitle, Title, Link } from './styles';
import { BigIcon } from '../../common/styles/images';

interface Props {
    title: string;
    imgPath: string;
    linkHref: string;
    linkText: string
}

export default function Container( { title, imgPath, linkHref, linkText } : Props ) {
    return (
        <Section>
            <BoxTitle>
                <Title>{ title }</Title>
                <BigIcon src={ imgPath } />
            </BoxTitle>
            <Link href={linkHref}>
                { linkText }
            </Link>
        </Section>
    )
}