import RestaurantCard from './RestaurantCard'
import { restaurants } from "../content";
import { useState, useEffect } from "react";

function filterData(searchText, allrestaurants) {
    return allrestaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

function Body() {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    function getRestaurants() {
        setAllRestaurants(restaurants.cards);
        setFilteredRestaurants(restaurants.cards);
    }

    return (
        <>
            <div className='search-container'>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className='restaurant-list'>
                {filteredRestaurants.map(val => {
                    return (
                        <RestaurantCard {...val.data} key={val.data.id} />
                    )
                })}
            </div>
        </>
    )
}

export default Body