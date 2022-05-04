import { InputDivS } from "./styles"


export const Input = ({ label , id ,register ,...rest }) => {
    return (
        <InputDivS>
            <label htmlFor="id" >{label}</label>
                <input id={id} {...register(id)}  {...rest}/>
        </InputDivS>
    )
}