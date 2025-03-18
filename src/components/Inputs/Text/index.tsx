import { Ref } from "react";
import { Container, Input } from "../style";

interface Props {
    inputRef: Ref<HTMLInputElement>;
    placeholder?: string;
}

export default function InputText({ inputRef, placeholder }: Props) {
    return (
        <Container>
            <Input type="text" placeholder={ placeholder } ref={ inputRef }/>
        </Container>
    )
}