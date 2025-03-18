import { useState, Ref } from "react";
import { Container, Input, VisibleIcon } from "../style";

import eyeOnImg from "../../../assets/eye-on.png";
import eyeOffImg from "../../../assets/eye-off.png";

interface Props {
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
}

export default function InputPassword({ inputRef, placeholder }: Props) {
    const [ visible, setVisible ] = useState<Boolean>(false);
    
    let imagePath = visible ? eyeOnImg : eyeOffImg;

    function handleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Input type={ visible ? "text" : "password" } placeholder={ placeholder } ref={ inputRef } />
            <VisibleIcon onClick={ handleVisible } src={ imagePath }/>
        </Container>
    )
}