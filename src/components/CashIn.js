import axios from "axios";
import {useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import TokenContext from "./context/TokenContext";

function CashIn(){

    const navigate = useNavigate();
    const {token} = useContext(TokenContext);

    const [datasCashIn, setDatasCashIn] = useState({type:'cashIn', description:'', value:0 });

    useEffect(()=>{
        token === undefined||token ===null? navigate('/'):<></>;

    },[])
    
    function sendCashIn(event){
        event.preventDefault();
        const config = {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post('https://mywalletde.herokuapp.com/movimentation', datasCashIn, config)
                    .then((response)=>{
                        navigate('/home')}) 
                    .catch(err => {
                        console.log('Erro ao cadastrar: ', err);
        });  

    }

    return(
        <Main>

            <h1>Entrada</h1>
            <form onSubmit={sendCashIn} >
                
                <input required type={'text'} placeholder={'breve descrição'} onChange={(e)=>{setDatasCashIn({...datasCashIn, description:e.target.value})}} ></input>
                <input required type={'text'} placeholder={'valor'} onChange={(e)=>{setDatasCashIn({...datasCashIn, value:e.target.value})}} ></input>
                    
                <Link to={"/home"}>
                    <button>cancelar</button>
                </Link>
                
                <button>cadastrar</button>
                
            </form>
        </Main>
    )
}

const Main = styled.main`

    background-color:  #8C11BE;
    width: 375px;
    height: 100vh;
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

export default CashIn;