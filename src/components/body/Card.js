const Card = (props) => {
    return (
        <>
            <img src={props.imgsrc} alt="img" height="400px" width="100%" />
            <br />
            <h4 className="text-center m-3">{props.headline}</h4>
            <p className="text-center m-3">{props.contents}</p>
        </>
    );
}

export default Card;