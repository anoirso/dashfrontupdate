import React from 'react'
import { Route, Switch } from 'react-router-dom';
import styled ,{css} from 'styled-components/macro'
import Measure from '../../dash_pages/Measure';


const Container = styled.div`
    height : 100%;
    min-height: 600px;
    width: ${({primary}) => (primary ? 'calc(100% - 360px)' : 'calc(100% - 55px)')};
    border: 2.5px solid #7A838C;
    border-radius: 3px;
    transition: all 400ms ease-out;
`;

const MainContentContainer = ({showMenu}) => {
    return (
        <Container
            primary={showMenu}
        >
            <Switch>
                <Route path="/dash/measure" component={Measure} />
            </Switch>
            
        </Container>
    )
}

export default MainContentContainer
