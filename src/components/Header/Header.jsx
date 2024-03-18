import search from '../../assets/image/search.jpg'
import add from '../../assets/image/add.jpg'
 

const Header = () => {
    return (
        <div className="lg:flex justify-between lg:mx-20 p-8 items-center">
            <h1 className="text-4xl  font-extrabold">Recipe Calories</h1>
            <div className="flex gap-10 text-slate-500 font-medium">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>  
            <img className='-mr-44' src={search} alt="" />
            <input  className="h-8 rounded-full -mr-40 bg-gray-100" type="Search" placeholder="Search..." src={search} />
            <img src={add} alt="" />
        </div>
    );
};

export default Header;