import React from 'react'
import styled from 'styled-components'

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
`

export default ServiceCard
