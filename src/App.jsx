
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'

function App() {

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
      <div>
      <Cards></Cards>
      </div>

    </>
  )
}

export default App
