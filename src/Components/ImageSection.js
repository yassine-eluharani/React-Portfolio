import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpg'
import PrimaButton from './PrimaButton'


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Unde ut reprehenderit dolorum ipsum recusandae ullam fugiat odio incidunt voluptatem harum.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Nationality </p>                        
                        <p>Languages </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info-title">
                        <p>Lorem Ipsum </p>
                        <p>23 </p>
                        <p>Zimbabwe </p>                        
                        <p>French, English, Arabic </p>
                        <p>Namibia </p>
                        <p>Freelance </p>
                    </div>
                </div>
                <PrimaButton title={"Hire Me"}></PrimaButton>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 3em;
    display: flex;
    .left-content{
        width: 100%;
        height : 60vh;
        img{
            width: 95%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0rem;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0rem;
                }
            }
        }
    }
`

    export default ImageSection
