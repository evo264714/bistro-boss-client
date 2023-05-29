
const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col  items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-50 border-0 border-b-4 border-orange-400 mt-4 text-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;