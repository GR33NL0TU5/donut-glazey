import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElement'

export const Feature = () => {
    return (
        <FeatureContainer>
            <div id= 'donutz'>
            <h1>Donut of the week</h1>
            <p>Sour Cream Donut with Mocha Frappé Coffee</p>
            <FeatureButton> Order Now </FeatureButton>
            </div>
        </FeatureContainer>
    )
}

export default Feature;