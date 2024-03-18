   
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header' 

function App() { 

    const handleAddToCook =(p) =>{
       console.log(p)
    }

  return (
    <>
      {/* header section */}
      <Header></Header>
      <Banner></Banner>
      {/* cart description section */}
      <div className='text-center '>
        <h1 className='text-4xl font-bold mb-6'>Our Recipes</h1>
        <p className='text-slate-500 font-medium lg:w-2/4 mx-auto  '>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget
          urna volutpat curabitur elementum mauris aenean neque.</p>
      </div>
      {/* cart section */}
      <div className='flex'>
        <div>
          <Cards handleAddToCook={handleAddToCook}></Cards>
        </div>
        {/* even handler data */}
        <div>
          <div className='border-4 rounded-xl mt-24 w-[450px]'>
            <div className='text-center p-4'>
              <h1 className='text-2xl font-bold mb-4'>Want to cook: 01</h1>
              <hr />
              <div className='flex justify-around mt-4 text-slate-500 font-bold'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div>
 
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
