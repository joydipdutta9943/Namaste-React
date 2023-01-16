import RestaurantCard from './RestaurantCard'
import { restaurants } from "../content";
import { useState, useEffect } from "react";
function Body() {
    return (
        <div className='Restaurants'>
            {restaurants.cards.map(val => {
                return (
                    <RestaurantCard {...val.data} />
                )
            })}
        </div>
    )

}

export default Body