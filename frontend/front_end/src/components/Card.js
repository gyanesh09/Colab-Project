import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div class="card card-style" >
            <img class="card-img-top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fwallpapers%2Fnature%2Fscenery&psig=AOvVaw3Wa4ddiehOZdEikPDDokWE&ust=1634650789244000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCW7fGK1PMCFQAAAAAdAAAAABAD" alt="Card image cap" />
            <div class="card-body" >
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
