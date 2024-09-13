import React from 'react'
import MainComponent from '../components/MainComponent/MainComponent'
import PopularComponent from '../components/popular/PopularComponent'
import OffersComponent from '../components/Offers/OffersComponent'

const Shop: React.FC = () => {
    return (
        <div>
            <MainComponent />
            <PopularComponent />
            <OffersComponent/>
        </div>
    )
}

export default Shop
