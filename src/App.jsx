   
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header' 

function App() { 
  const [cart ,setCart] = useState([])
    const handleAddToCook =(p) =>{
      const isExist = cart.find(item=> item.recipe_id == p.recipe_id)
      // console.log(isExist)
      if(!isExist){
        setCart([...cart,p])
      }else{
        alert('already exist')
      }
      //  const newCart = [...cart,p]
       
    }
//  console.log(cart)
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
          <div className='border-4 rounded-xl mt-24 w-[500px]'>
            <div className='text-center p-4'>
              <h1 className='text-2xl font-bold mb-4'>Want to cook:{cart.length}</h1>
              <hr />
              <div className='flex justify-around mt-4 text-slate-500 font-bold'>
                <p className=''>Name</p>
                <p className=''>Time</p>
                <p className='mr-16'>Calories</p>
              </div>
              <div>
                {
                  cart.map((item,index)=>
                  <div  className='flex justify-around mt-4 font-semibold gap-10 bg-gray-100 p-4 rounded-2xl'>
                    <p>{index+1}</p>
                    <p className='w-12'>{item.recipe_name}</p>
                    <p className=''>{item.preparing_time}</p>
                    <p>{item.Calories}</p>
                    <button className='h-10 w-24 rounded-full bg-green-600 '>Preparing</button>
                  </div >
                    )
                } 
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
