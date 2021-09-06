import React from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import Button from '../button/Button';





const Container = styled.div`
    position: sticky;
    height: 70px;
    width: 100%;
    display: flex;
    padding:10px;
    justify-content:flex-start;
    align-items: center;
    margin-bottom: 5px;
    min-width: 1000px;
    
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .img--link {
        text-decoration: none;
       
    }

    img {
        height: 50px;
        width: 200px;
        object-fit: contain;
    }

    .first--head--section {
        color: #001555;
    }
    .second--head--section {
        color: #990045;
    }
    .logo--text {
        font-size: 2rem;
        font-weight: 400;

    }
`;


const Topbar = ({user , setUser,setShowModal}) => {
    
    return (
        <Container>
          
            <Wrapper>
                <Link className="img--link">
                    <h4 className="logo--text"><span className="first--head--section">Kendra</span><span className="second--head--section">Labs</span></h4>
                    
                </Link>

                <Button 
                    buttonSize='btn--small'
                    buttonColor = 'btn--orange'
                    textGiven = 'LOG OUT'
                    onClick = {setShowModal}
                    argument={true}
                    
                    
                />
    

            </Wrapper>
            
        </Container>
    )
}

export default Topbar
