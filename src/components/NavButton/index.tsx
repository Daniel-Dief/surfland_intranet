import { Icon } from "../../common/styles/images";
import { Button, Text } from "./styles";
import { redirect } from "./logic";
import { useModalActive } from "../../store/modalActive";

interface Props {
    text: string;
    imgPath: string;
    hrefText?: string;
    onClick?: () => void;
}

export default function NavButton({ text, imgPath, hrefText, onClick }: Props) {
    return (
        <Button
            onClick={
                hrefText ?
                () => redirect(hrefText) :
                onClick
            }
        >
            <Icon src={imgPath}/>
            <Text>{text}</Text>
        </Button>
    )
}