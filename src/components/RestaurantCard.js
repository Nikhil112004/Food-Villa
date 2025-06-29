const RestrauntCard = ({restaurant}) => {
    return (
    <div className="card">
        <img  src={restaurant.image}></img>
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.cuisines.join(" , ")}</h3>
        <h4>{restaurant.rating} stars</h4>
    </div>
    );
};

export default RestrauntCard;