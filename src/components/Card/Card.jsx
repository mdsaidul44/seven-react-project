



const Card = ({ card, handleAddToCook }) => {
    const { recipe_img, recipe_name, short_description, Calories, preparing_time, Ingredients } = card;
    return (
        <div className="">
            <div className='border-4  p-8 w-96 rounded-xl bg-slate-100 '>
                <img className='w-72 h-60 rounded-xl' src={recipe_img} alt="" />
                <h1 className='text-xl font-bold mt-4'>{recipe_name}</h1>
                <p className='text-slate-500'>{short_description}</p>
                <h1 className='font-bold'>Ingredients: 6</h1>
                <ul className='text-slate-500 ml-4 my-4'>
                    {
                        Ingredients.slice(0, 3).map((Ingredient, idx) =>
                            <li key={idx}>Sround beef{Ingredient.chicken}</li>
                        )

                    }
                </ul>
                <div className='flex gap-8 '>
                    <p> {preparing_time}</p>
                    <p>{Calories}</p>
                </div>
                <button onClick={() => handleAddToCook(card)} className='h-10 w-28 rounded-full bg-green-600 font-bold m-4'><small>Want to Cook</small></button>
            </div>
        </div >
    );
};

Card.propTypes
export default Card;