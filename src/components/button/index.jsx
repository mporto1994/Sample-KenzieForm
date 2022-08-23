import { StyledDivButton } from "./styles"


export const Button = ({
    children,
    name,
    ...props
  }) => {
    return (
        <StyledDivButton>
            <button {...props}>Enviar</button>
        </StyledDivButton>
    )
}