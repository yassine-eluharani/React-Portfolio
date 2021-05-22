import React from 'react'
import avatar from '../img/avatar.jpg'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

function Navigation() {
    return (
        <NavigationStyle>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/home' activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/works' activeClassName="active-class">Works</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' activeClassName="active-class">Contact</NavLink>
                </li>                
            </ul>
            <footer className="footer">
                <p>@2021 Copyrights</p>
            </footer>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align : center;
        padding : 2rem ;
        
        img{
            width: 100%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            font-size: 1rem;
        }
    }

    .nav-items{
        width : 100%;
        text-align : center;

        .active-class{
            background-color: var(--primary-color);
            margin: 2px 0px;
        }

        li{
            display: block;
            a{
                display: block;
                padding: .2rem;
                position: relative;
                z-index: 10;
                
                &:hover{
                    cursor: pointer;        
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: ALL 0.4s cubic-bezier(.62,.05,.37,.95);
                    z-index:-1;
                    /* opacity: 0.4; */
                    
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer{
        border-top : 1px solid var(--border-color);
        width: 100%;
        p{
            padding:  2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }


`

export default Navigation
