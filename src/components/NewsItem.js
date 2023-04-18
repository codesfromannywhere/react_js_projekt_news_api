import { Link } from "react-router-dom";


const NewsItem = (props) => {
    return (
        <section className="item-sec">
            <h1>{props.title}</h1>
            <img src={props.image} alt="" />
            <p>{props.description}</p>
            <Link to={`/${props.id}`} state={props.allarticles}>Read more</Link>
            <hr />
        </section>

    );
}

export default NewsItem;