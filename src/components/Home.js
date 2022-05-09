import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { IoAddCircleOutline, IoExitOutline } from 'react-icons/io5';
import{ IoIosRemoveCircleOutline } from 'react-icons/io'

import TokenContext from "./context/TokenContext";

function Home(){

    const navigate = useNavigate();

    const {token, setToken} = useContext(TokenContext);
    
    const [userDatas, setUserDatas] = useState({name:'', transactions:[], total:0});
   
    function logout(){
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'));
        navigate('/');
    }

    useEffect(()=>{
        token === null? navigate('/'):<></>;

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get('https://mywalletde.herokuapp.com/info-account',config)
            .then((response)=>{
                setUserDatas(response.data) })

            .catch(err => {
                console.log('Erro ao buscar dados da api: ', err);
            });  
    },token);

    return(

        <Main>
            <header>
                <h1>Olá {userDatas.name},</h1>
                
                <IoExitOutline size={'35px'} onClick={()=>logout()}/>
            </header>

            <section>
                {userDatas.transactions.length === 0 
                ?<h1>Não há registros de entrada ou de saída!</h1>
                :<>
                <div className="transactions">
                    {userDatas.transactions.map((value, index) => <Values key={index} infoTransition={value} />)}

                </div>
                <h1 className="total">Saldo: <span className={`${userDatas.total > 0? 'cashIn':'cashOut'}`}>{userDatas.total.toFixed(2)}</span></h1>
                </>         
                }
                
            </section>

            <footer>

                <Link to={"/entrada"}>
                    <div>
                        <IoAddCircleOutline size={'35px'}/>
                        <p>Nova entrada</p>
                    </div>
                </Link>
                
                <Link to={"/saida"}>
                    <div>
                        <IoIosRemoveCircleOutline size={'35px'}/>
                        <p>Nova saída</p>
                    </div>
                </Link>
                
            </footer>
        </Main>
    )
}

function Values ({infoTransition}){

    const {day, month, typeOperation, description, value} = infoTransition;
    const newValue = value.toFixed(2).toString().replace('.',',');

    return(
        <div className="transaction">
            <span>
                <h4 className="data">{day}/{month}</h4>
                <p className="description">{description}</p>
            </span>
            
            {typeOperation === 'cashIn' ? <h4 className="cashIn">{newValue}</h4>:<h4 className="cashOut">{newValue}</h4>}
        </div>  
    )
}

const Main = styled.main`

    background-color:  #8C11BE;
    width: 375px;
    height: 100vh;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    header{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        display: flex;
        align-items: center;                        
        justify-content: space-between;  
        margin-top: 35px;
        width:100%;
    }
    section{ //Alterar essa section
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        height: 500px;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
        overflow-x: hidden;
    }
    section h1{
        color: #868686;
        width: 65%;
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
    }
    .transactions{
        overflow-x: hidden;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .transaction{
        font-size: 18px;
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3px;
    }
    .transaction span{
        width: 75%;
        display: flex;
        flex-direction: row;
    }
    .transaction span p{
        margin-left: 10px;
    }
    .cashIn{
        color: green;
    }
    .cashOut{
        color:red;
    }
    .description{  
        color: #000000;
    }
    .total{
        width: 95%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000000;
        border-top: #000000 solid 1px;
        font-weight: bold;
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin-top: 5px;
    }
    footer div{
        margin-top: 15px;
        padding: 40px;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        background-color: #A328D6;
        border-radius: 5px;
    }
`
export default Home;