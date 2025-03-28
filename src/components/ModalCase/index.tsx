import { useModalActive } from "../../store/modalActive";

import { Blur } from "./style";
import { JSX } from "react";
import LoginModal from "../../templates/Modals/LoginModal";
import OptionsModal from "../../templates/Modals/OptionsModal";

export default function ModalCase() {
    const { isOpen } = useModalActive();
    let modalActive : JSX.Element | null;

    switch ( isOpen ) {
        case "login":
            modalActive = <LoginModal />;
            break;
        case "options":
            modalActive = <OptionsModal />;
            break;
        default:
            modalActive = null;
            break;
    }

    if( modalActive ) {
        return (
            <Blur>
                {
                    modalActive
                }
            </Blur>
        );
    } else {
        return null;
    }
}