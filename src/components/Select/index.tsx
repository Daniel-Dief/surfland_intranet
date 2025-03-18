import { RefObject } from "react";
import { SelectBox } from "./style";

interface Options {
    label: string;
    value: string;
}

interface Props {
    selectRef: RefObject<HTMLSelectElement>;
    options: Array<Options>;
}

export default function Select({ selectRef, options } : Props ) {
    return (
        <SelectBox
            ref={ selectRef }
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SelectBox>
    );
}