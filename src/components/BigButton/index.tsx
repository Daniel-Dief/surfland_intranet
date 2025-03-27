import { Button } from "./styles"

interface Props {
    children: React.ReactNode
    onClick: () => void
    disable?: boolean
}

export default function BigButton({ children, onClick, disable } : Props) {
    return (
        <Button
            onClick={onClick}
            disabled={disable}
        >
            { children }
        </Button>
    )
}