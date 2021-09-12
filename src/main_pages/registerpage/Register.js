import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import LogoImageSource from '../images/klablogo.png'
import GoogleIcon from '../images/googleIcon.svg';
import fetch from 'unfetch';
import { customInputFieldStyle, customInputStyle, customSignGoogle, customSignLogin } from '../SharedStyles';
import { Container,Wrapper, SectionFirst, LogoContainer, LogoImage, SectionSecond, TextContainer, SignGoogleButton,
    WrapperInside, LoginButton, FormContainer, InputField, Input, CheckBox, CheckBoxSection } from './RegisterStyleComponents';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { URL_BACK } from '../../GlobalValues';
import { checkLoginDirect } from '../SharedFunctions';





const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [termsAgreed , setTermsAgreed] = useState(false)
    const [successRegister, setSuccessRegister] = useState(null)
    const [user, setUser] = useState(null);
    

    const register = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${URL_BACK}register/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials : 'include',
                body: JSON.stringify({ email, password })
            })
            const responseStatus = await res.status;
            const json = await res.json();
            setUser(json)
            setSuccessRegister((responseStatus == 200 && termsAgreed == true )? true : false);
            console.log(successRegister);

        } catch (error) {
            console.log(error);

        }

    }

   
      useEffect(() => {
        const token = Cookies.get('AccessT');
        const refreshToken = Cookies.get('AccessRefreshT');
        checkLoginDirect(token).then(res => {
              if (res.status == 200) {
                  setIsLoggedIn(true)
              }
              else {
                  setIsLoggedIn(false)
              }
          })
        
        
      },[])
    return (
        <Container>
            {(isLoggedIn == true && successRegister == null )? <Redirect  to="/"/> : null}
            {(successRegister == true ) ? <Redirect to={{
                pathname: "/app/profile",
                state : {user : user}
            }} /> : null}
            <Wrapper>
                <SectionFirst>
                    <LogoContainer>
                        <LogoImage
                            src={LogoImageSource}
                        />
                    </LogoContainer>
                    <TextContainer>
                        <p>
                            Register now and get full access to everything -
                            unlimited flows, unlimited connectors, unlimited scalability.
                            Build integrations, collaborate with your colleagues and
 access support .</p>
                    </TextContainer>

                </SectionFirst>
                <SectionSecond>
                    <WrapperInside>
                        <SignGoogleButton>
                            <img src={GoogleIcon} />
                            <h4>Sign up with google</h4>
                        </SignGoogleButton>
                        <h4 className="or">Or</h4>
                        <form onSubmit={register} >
                            <hr></hr>
                            <FormContainer>
                                <InputField>
                                    <p>Email</p>
                                    <Input type="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </InputField>
                                <InputField>
                                    <p>Password</p>
                                    <Input type="Password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />

                                </InputField>
                                <CheckBoxSection>
                                    <CheckBox type="checkbox"
                                             onChange ={e => setTermsAgreed(e.target.checked)} />
                                    <p>I agree to <a>terms of service</a> and <a>privacy policy</a></p>
                                </CheckBoxSection>
                            </FormContainer>
                            <LoginButton
                                type="submit"
                            >
                                Sign up
                        </LoginButton>
                        </form>
                  {(successRegister == false && termsAgreed == false ) && <p className="error--section">You must agree on our terms of service in order to be able to register </p>}      
                 
                    </WrapperInside>

                </SectionSecond>
            </Wrapper>
        </Container>
    )
}

export default Register