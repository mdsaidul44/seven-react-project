  
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

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
        toast('Already data loaded')
      }
      //  const newCart = [...cart,p]
       
    }
//  console.log(cart)

    const handleRemove =(id)=>{
      const newCart = cart.filter(items=>items.recipe_id !== id)
      setCart(newCart)
    }

  return (
    <>
      {/* header section */}
      <Header></Header>
      <Banner></Banner>
      {/* cart description section */}
      <div className='text-center '>
        <h1 className='text-4xl font-bold mb-6'>Our Recipes</h1>
        <p className='text-slate-500 font-medium lg:w-2/4 mx-auto  '>A commis is a basic chef in larger kitchens who works under a chef de partie to learn the stations or ranges responsibilities and operation. This may be a chef who has recently completed formal culinary training or is still undergoing training.</p>
      </div>
      {/* cart section */}
      <div className='lg:flex'>
        <div>
          <Cards handleAddToCook={handleAddToCook}></Cards>
        </div>
        {/* even handler data */}
        <div>
          <div className='border-4 rounded-xl mt-24 lg:w-[500px]'>
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
                  <div key={index} className='flex justify-around mt-4 font-semibold lg:gap-10 bg-gray-100 p-4 rounded-2xl'>
                    <p className='mt-8'>{index+1}</p>
                    <p className='lg:w-12'>{item.recipe_name}</p>
                    <p className=''>{item.preparing_time}</p>
                    <p>{item.Calories}</p>
                    <button onClick={()=>handleRemove(item.recipe_id)} className='h-10 w-24 rounded-full bg-green-600 '>Preparing</button>
                  </div >
                    )
                } 
              </div>
              <div>
                <h1 className='text-2xl font-bold my-8'>Currently cooking: {length}</h1>
                <div className='flex justify-around mt-4 text-slate-500 font-bold'>
                <p className=''>Name</p>
                <p className=''>Time</p>
                <p className='mr-16'>Calories</p> 
              </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}
 
export default App
