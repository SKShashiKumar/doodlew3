const Card = (props) => {
    return (
        <>
            <img src={props.imgsrc} alt="img" height="400px" width="100%"  />
            <br />
            <h4>{props.headline}</h4>
            <p style={{'textAlign':'center'}}>{props.contents}</p>
        </>
    );
}

export default Card;