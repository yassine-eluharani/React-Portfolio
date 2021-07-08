import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'

import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'

function ServicesSection() {
    return (
        <div>
            <InnerLayout>
                <ServicesSectionStyled>
                    <Title title={"Services"} span= {"Services"}></Title>
                    <div className="services">
                        <ServiceCard 
                            image={design} 
                            title={'Web design'} 
                            paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam."}                            
                        />
                       <div className="mid-card">
                            <ServiceCard 
                                image={intelligence} 
                                title={'Artificiel Inteligence'} 
                                paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam."}                            
                            />
                       </div>
                        <ServiceCard 
                            image={gamedev} 
                            title={'Game devolepment'} 
                            paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam."}                            
                        />
                    </div>
                     
                </ServicesSectionStyled>
            </InnerLayout>
        </div>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top : 5rem;
        display: flex;
        justify-content: space-between;
        .mid-card{
            margin: 0 1.2rem;
        }
    }
`

export default ServicesSection
