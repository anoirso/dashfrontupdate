import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components/macro'
import LogoImageSource from '../images/klablogo.png';
import Cookies from 'js-cookie';
import { checkLoginDirect } from '../SharedFunctions';
import { customInputFieldStyle, customInputStyle, customSignLogin } from '../SharedStyles';
import { Container, TopBar, Image, BottomSection, LeftColumn, InputField, Input,
    WrapperLeft, Inputs, CheckBox, CheckBoxSection, OutsidePuts, ChechBoxes, ProceedButton, RightColumn,
    WrapperRight, BoxProfile, AreaPicture, UploadButton } from './ProfileStyledComponents';
import useForm from './UseForm';

const ProfileSetUp = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userDetails, setUserDetails] = useState(null)
    const {values, handleChange, handleSubmit, updateSucess} = useForm(props.location.state.user, true)
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
    console.log(values)
    return (
        <Container>
            {isLoggedIn == false ? <Redirect path="/" /> : null}
            {updateSucess == true ? <Redirect path="/"  />: null}
            <TopBar>
                <Image
                    src={LogoImageSource} />
                <hr style={{ width: '100%', position: 'absolute', bottom: '0' }} />
            </TopBar>
            <BottomSection>
                <LeftColumn>
                    <form
                        onSubmit = {handleSubmit}
                    >
                        <WrapperLeft>
                            <h3>Let's set up your profile:</h3>
                            <Inputs>
                                <InputField>
                                    <p>First name : </p>
                                    <Input type="text"
                                           name = "firstName" 
                                           value={values.firstName}
                                           onChange={handleChange}  />
                                </InputField>

                                <InputField>
                                    <p>Last name : </p>
                                    <Input type="text"
                                           name = "lastName" 
                                           value={values.lastName}
                                           onChange={handleChange}  />
                                </InputField>
                                <InputField>
                                    <p>Username: </p>
                                    <Input type="text" 
                                           name = "username" 
                                           value={values.username}
                                           onChange={handleChange} />
                                </InputField>
                                <InputField>
                                    <p>Phone number: </p>
                                    <Input type="text" 
                                           name = "phoneNumber" 
                                           value={values.phoneNumber}
                                           onChange={handleChange} />
                                </InputField>
                                <OutsidePuts>
                                    <h4>I would like to register as :</h4>
                                    <ChechBoxes>
                                        <CheckBoxSection>
                                            <CheckBox 
                                                      name = "role"
                                                      type="radio" 
                                                      value = "data scientist"
                                                      onChange={handleChange}
                                            />
                                            <p>Data scientist</p>
                                        </CheckBoxSection>
                                        <CheckBoxSection>
                                            <CheckBox 
                                                      name = "role"  
                                                      type="radio" 
                                                      value = "software engineer" 
                                                      onChange = {handleChange}
                                                        />
                                            <p>Software engineer</p>
                                        </CheckBoxSection>
                                    </ChechBoxes>
                                </OutsidePuts>
                            </Inputs>
                            <div className="note--section">
                                <h5>Notes :</h5>
                                <table className="table--notes">
                                    <tr>
                                        <td>.</td>
                                        <td>It is not mandotary uploading a profile picture but we highly recommend having a profile picture.</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>you are able to login later either with you email or your username.</td>
                                    </tr>
                                </table>

                                <ProceedButton type="submit">
                                    <h6>Proceed </h6>
                                </ProceedButton>

                            </div>
                        </WrapperLeft>
                    </form>
                </LeftColumn>

                <RightColumn>
                    <WrapperRight>
                        <BoxProfile>
                            <AreaPicture />
                          
                            <UploadButton>
                                <h6>Upload a profile picture</h6>
                            </UploadButton>
                        </BoxProfile>
                    </WrapperRight>
                </RightColumn>
            </BottomSection>


        </Container>
    )
}

export default ProfileSetUp
