import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particale';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
        <div>
            <HomePageStyle>
                <div className="particale-con">
                    <Particle />
                </div>
                <div className="typography">
                    <h1>Hi I am <span>Lorem Ipusum</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Esse enim minima neque quae hic
                        necessitatibus similique doloremque sequi accusantium et.
                        Lorem ipsum dolor sit amet.
                     </p>
                     <div className="icons">
                         <a href="#" className="icon i-facebook"><FacebookIcon /></a>
                         <a href="#" className="icon i-github"><GithubIcon /></a>
                         <a href="#" className="icon i-youtube"><YouTubeIcon /></a>
                     </div>
                </div>
            </HomePageStyle>
        </div>
    )
}

const HomePageStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        text-align: center;
        width: 80%;
        
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border:2px solid var(--primary-color);
                    color : var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;

                }
            }
            .i-youtube{
                &:hover{
                    border:2px solid red;
                    color :red;
                }
            }

            .i-facebook{
                &:hover{
                    border:2px solid blue;
                    color :blue;
                }
            }

            .i-github{
                &:hover{
                    border:2px solid #5F4687;
                    color :#5F4687;
                }
            }
        }
    }
`

export default HomePage
