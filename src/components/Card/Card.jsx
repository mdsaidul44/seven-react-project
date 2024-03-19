
import time from '../../assets/image/time.jpg'
import calories from '../../assets/image/calories.jpg'


const Card = ({ card, handleAddToCook }) => {
    const { recipe_img, recipe_name, short_description, Calories, preparing_time, Ingredients } = card;
    return (
        <div className="">
            <div className='border-4  p-8 w-96 rounded-xl bg-slate-100 '>
                <img className='w-72 h-60 rounded-xl' src={recipe_img} alt="" />
                <h1 className='text-xl font-bold mt-4'>{recipe_name}</h1>
                <p className='text-slate-500'>{short_description}</p>
                <h1 className='font-bold'>Ingredients: 6</h1>
                <ol className='text-slate-500 ml-4 my-4'>
                    {
                        Ingredients.map((Ingredient, idx) =>
                            <li key={idx}>{Ingredient}</li> 

                        )

                    }
                </ol>
                <div className='flex gap-8 '>
                    <div className='flex gap-2'>
                    <img className='h-4 w-4 mt-1' src={time} alt="" />
                    <p> {preparing_time}</p>
                    </div>
                    <div className='flex gap-2'>
                    <img className='h-5 ' src={calories} alt="" />
                    <p>{Calories}</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCook(card)} className='h-10 w-28 rounded-full bg-green-600 font-bold m-4'><small>Want to Cook</small></button>
            </div>
        </div >
    );
};

Card.propTypes
export default Card;