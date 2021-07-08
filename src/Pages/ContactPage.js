import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'

function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={"Contact"} />
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form className="form-style">
                            <div className="form-field">
                                <label htmlFor="name" >Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="text-area">
                                <label htmlFor="text-area">Enter your message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}


const ContactPageStyled = styled.div`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .left-content{
            .form-style{
                .form-field{
                    margin-top: .2rem;
                    position: relative;
                    label{
                        
                    }
                    input{
                        border: 1px solid var(--border-color);
                        outline: none;
                        background: transparent;
                        height: 1.5rem;
                        padding: 0 15px;
                    }
                }
        }
        }
        
        

    }
`

export default ContactPage
