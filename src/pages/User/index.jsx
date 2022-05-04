import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DivUser } from "./styles"

const User =({user}) =>{
    const params = useParams()
    const history = useHistory()
    return(
        <DivUser>
            <p>{params.name}</p>
            <button onClick={()=>history.push("/")}>Voltar</button >
        </DivUser>
    )
}
export default User