import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Register(){
    const [userInfo, setDataUserToRegister] = useState({name:'', email:'', senha:''});


    function tryCadastrar(event){
        event.preventDefault();

        console.log("obj a cadastrar",userInfo )
    }

    return (
        
        <Main>
            <h1>MyWallet</h1>        
            <form onSubmit={tryCadastrar}>
                <input required type={"text"} placeholder="Nome" onChange={(e)=>{setDataUserToRegister({...userInfo, name:e.target.value})}}></input>
                <input required type={"email"} placeholder="E-mail" onChange={(e)=>{setDataUserToRegister({...userInfo, email:e.target.value})}}></input>
                <input required type={"password"} placeholder="Senha" onChange={(e)=>{setDataUserToRegister({...userInfo, senha:e.target.value})}}></input>
                <input required type={"password"} placeholder="Confirme a senha"></input>
                <button>Cadastrar</button>

            </form>

            <Link to={"/"}>
                <h2>Já tem uma conta? Entre agora!</h2>
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
export default Register;