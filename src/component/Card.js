function Card(props)
{
    return(
        <div className="card">
            <div className="card-header">
                <img src={props.img} className="card-img"></img>
                <p className="rating">{props.rating} Ratings</p>
                <p className={ props.rating > 4 ? "must-try" : "d-none"}>Must Try</p>
            </div>
            <h3>{props.title}</h3>
            <h5 className="m-0">Author: {props.author}</h5>
            <p>{props.desc}</p>
        </div>
    )
}
export default Card;