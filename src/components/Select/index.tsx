import { RefObject } from "react";
import { SelectBox } from "./style";

interface Options {
    label: string;
    value: string;
}

interface Props {
    selectRef: RefObject<HTMLSelectElement | null>;
    options: Array<Options>;
    onChange?: () => void;
    title?: string;
}

export default function Select({ selectRef, options, onChange, title } : Props ) {
    return (
        <SelectBox
            onChange={ onChange ?? (() => {}) }
            ref={ selectRef }
        >
            <option selected>{ title }</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SelectBox>
    );
}