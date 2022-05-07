import styled from "styled-components";
import {GrLogout, GrAddCircle, GrSubtractCircle} from 'react-icons/gr';

function Home(){

    const fulano = "fulano";

    return(

        <Main>
            <header>
                <h1>Ola {fulano}</h1>
                <GrLogout color="white"/>
            </header>

            <section>
                <h1>
                    Não há registros de entrada ou de saída!
                </h1>
            </section>

            <footer>
                <div>
                    <GrAddCircle/>
                    <p>Nova entrada</p>
                </div>

                <div>
                    <GrSubtractCircle/>
                    <p>Nova saída</p>
                </div>

            </footer>

    
        </Main>
        
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
        align-items: center;
        text-align: center;
        color: #868686;
        margin-top: 20px;
        height: 75%;
        width: 100%;
        background-color: #FFFFFF;
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