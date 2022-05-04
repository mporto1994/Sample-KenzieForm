import styled from "styled-components";

export const FormS = styled.div`
    form{
        width:500px;
        height:500px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        /* border:2px solid #CCC; */
        border-radius:4px;
        background-color:var(--darkPurple);
        /* padding:0px 5px; */
        /* color:#335; */
    }
    h2{
        color:var(--lightViolet);
        font-size:30px;
        text-align:center
    }
    .errorsP{
        color:var(--lightViolet);
        margin:10px 0px 0px 5px;
    }
`