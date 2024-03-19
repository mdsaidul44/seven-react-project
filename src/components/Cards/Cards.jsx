//  import pasta from '../../assets/image/pasta.jpg'

import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleAddToCook }) => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('cart.json')
            .then(res => res.json())
            .then(data => setCard(data))
    })
    return (
        <div className='ml-24 mt-24 mr-4'>
            <div className='flex justify-between'>
                <div className="grid gap-8 grid-cols-2">
                    {
                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                            handleAddToCook={handleAddToCook}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

Cards.propTypes

export default Cards;