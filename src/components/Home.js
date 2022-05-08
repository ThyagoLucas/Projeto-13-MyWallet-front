import styled from "styled-components";
import {GrLogout, GrAddCircle, GrSubtractCircle} from 'react-icons/gr';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home(){

    const token = localStorage.getItem('token');

    const [userDatas, setUserDatas] = useState({name:'', transactions:[], total:0});
   
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get('http://localhost:5000/info-account',config)
            .then((response)=>{
                setUserDatas(response.data) })

            .catch(err => {
                console.log('Erro ao buscar dados da api: ', err);
            });  
    },[])

    return(

        <Main>
            <header>
                <h1>Ola {userDatas.name},</h1>
                <GrLogout color="white"/>
            </header>

            <section>
                {userDatas.transactions.length === 0 
                ?   <h1>Não há registros de entrada ou de saída!</h1>

                :  
                <>
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
                        <GrAddCircle/>
                        <p>Nova entrada</p>
                    </div>
                </Link>
                
                <Link to={"/saida"}>
                    <div>
                        <GrSubtractCircle/>
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
    console.log('infoTransitions: ', infoTransition);

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
    height: 677px;
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
        background-color:grey;
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
        color: #868686;
        margin-top: 20px;
        height: 75%;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
    }
    section h1{
        width: 65%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .transactions{
        width: 100%;
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
        background-color: lightblue;
        width: 90%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000000;
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
    footer div{
        width: 155px;
        height: 114px;
        margin-top: 15px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        left: 25px;
        top: 537px;
        background: #A328D6;
        border-radius: 5px;
    }
`
export default Home;