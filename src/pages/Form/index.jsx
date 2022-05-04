import { Input } from "../../components/Input"
import { FormS } from "./styles"
import {Container} from "../../components/Container"
import { useEffect, useState } from "react"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"


const Form =({user, setUser}) =>{
    const history = useHistory()
    const [log, setLog] = useState(false)

    // useEffect(()=>{},[user])

    const formSchema = yup.object().shape({
    name:                     yup.string().required("Nome Obrigatório!"),
    mail:                     yup.string().required("Email Obrigatório!").email(),
    password:                 yup.string().required("Senha Obrigatório!").matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Sua senha deve conter letras, números ao menos um caracter especial."),
    passwordConfirmation:     yup.string().oneOf([yup.ref('password'), null], "Senhas não conferem!")
    })

    const {register, handleSubmit,formState: {errors}}=useForm({
        resolver: yupResolver(formSchema),
    })

    const onSubmitFunction = (data) => {
        setUser(data)
        setLog(true)
    }
    
    if (log===true){
        history.push(`/user/${user.name}`)
    }

    console.log(errors)

    return(
        <FormS>
            <Container>
                <div>

                    <h2>Formulário de Cadastro</h2>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <div>
                            <Input type="text" label="Nome" id="name" placeholder="Digite seu Nome" register={register}/>
                            { errors.name && <p className="errorsP">{errors.name.message}</p>}
                        </div>
                        <div>
                            <Input type="text" label="Email" id="mail" placeholder="Digite seu Email" register={register}/>
                            { errors.mail && <p className="errorsP">{errors.mail.message}</p>}  
                        </div>
                        <div>
                            <Input type="password" label="Senha" id="password" placeholder="Digite sua Senha" register={register}/>
                            { errors.password && <p className="errorsP">{errors.password.message}</p>}  
                        </div>
                        <div>
                            <Input type="password" label="Confirmação de senha" id="passwordConfirmation" placeholder="Confirme sua Senha" register={register}/>
                            { errors.passwordConfirm && <p className="errorsP">{errors.passwordConfirm.message}</p>}
                        </div>
                        <button type="submit">Enviar</button>
                    </form>

                </div>
                
            </Container>
            
        </FormS>
    )
}
export default Form