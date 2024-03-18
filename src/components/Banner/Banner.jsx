
const Banner = () => {
    return (
        <div className="my-8 mx-28">
            <div className="w-[1300px] h-[500px] bg-black rounded-[20px] bg-cover bg-[url('https://i.ibb.co/q1Lm2gh/chefs-demonstrating-cooking-skills-contest.jpg')]">
                <div className="p-36 text-center ">
                <h1 className="text-5xl text-white text-center align-center font-bold mb-8">Discover an exceptional cooking
                
                    class tailored for you!</h1>
                <p className="text-white mb-6">The calories and saturated fat are half that found in traditional potato salad. So light and fresh, its actually safer to serve at picnics since no mayo or dairy are in the recipe. Move over, Grandma, an easy, healthy potato salad is in town!</p> 
                <button className="bg-green-500 font-semibold mr-8 h-10 w-28 rounded-full">Explore</button>
                <button className=" text-white font-semibold h-10 w-36 rounded-full border-2">Our Feedback</button> 
                </div>
            </div>
        </div>
    );
};

export default Banner;