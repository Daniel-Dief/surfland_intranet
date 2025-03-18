import { Button } from '../style';

interface Props {
    value: string;
    onClick?: () => void;
}

export default function InputSubmit( { value, onClick }: Props ) {
    return (
        <Button 
            type="submit"
            value={ value }
            onClick={ onClick }
        />
    )
}