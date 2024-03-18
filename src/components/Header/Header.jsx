

const Header = () => {
    return (
        <div className="flex justify-between mx-10 p-8 items-center">
            <h1 className="text-3xl font-extrabold">Recipe Calories</h1>
            <div className="flex gap-10 text-slate-500 font-medium">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <input className="rounded-s-full border-white" type="search" placeholder="Search" />
        </div>
    );
};

export default Header;