
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


function Login(){

    const [loginDatas, setDatasLogin ] = useState({email:'', password:''});
    console.log(loginDatas.email);
    console.log(loginDatas.password);

    function tryLogin(event){

        event.preventDefault();
        console.log("Consoleeeee");
        console.log(loginDatas);

            

    }

    

    return(

        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={tryLogin}>
                <input type={"email"} placeholder='E-mail' onChange={(e)=>{setDatasLogin({...loginDatas, email: e.target.value})}}></input>
                <input type={"password"} placeholder='Senha' onChange={(e)=>{setDatasLogin({...loginDatas, password: e.target.value})}}></input>
                <button>Entrar</button>
            </form>
            
            <Link to={"/cadastro"}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
            
        </Main>
            

    )
}

const Main = styled.main`

    background-color:  #8C11BE;
    width: 375px;
    height: 677px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input{
        margin-top: 15px;
        width: 300px;
        height: 45px;
        border-radius: 5px;
        padding: 5px;
    }
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    button{
        margin-top: 15px;
        width: 310px;
        height: 45px;
        border-radius: 5px;
        padding: 5px;
        background: #A328D6;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 25px;
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`

export default Login;