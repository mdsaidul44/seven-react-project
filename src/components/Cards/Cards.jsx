 import pasta from '../../assets/image/pasta.jpg'

const Cards = () => {
    return (
        <div>
            <div>
                <div className='border-4 h-2/3 p-8 w-96 rounded-xl bg-slate-100'>
                    <img className='w-72 rounded-xl' src={pasta} alt="" />
                    <h1 className='text-xl font-bold'>Spaghetti Bolognese</h1>
                    <p className='text-slate-500'>Classic Italian pasta dish with savory meat sauce.</p>
                    <h1 className='font-bold'>Ingredients: 6</h1>
                    <ol className='text-slate-500 ml-4'>
                        <li>500g ground beef </li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ol>
                    <div className='flex gap-8 '>
                        <p>30 minutes</p>
                        <p>600 calories</p>
                    </div>
                    <button className='h-10 w-28 rounded-full bg-green-600 font-bold m-4'><small>Want to Cook</small></button>
                </div> 
                <div>

                </div>
            </div>
        </div>
    );
};

export default Cards;