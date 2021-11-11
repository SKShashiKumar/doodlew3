import Card from "./Card";

const Maincol = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Card
              imgsrc="../../../img/cherries.jpg"
              headline="Cherries, interrupted"
              contents="Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
            />
          </div>
          <div className="col-3">
            <Card
              imgsrc="../../../img/wine.jpg"
              headline="Le French"
              contents="Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
            />
          </div>
          <div className="col-3">
            <Card
              imgsrc="../../../img/popsicle.jpg"
              headline="Cherries, interrupted "
              contents="Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
            />
          </div>
          <div className="col-3">
            <Card
              imgsrc="../../../img/croissant.jpg"
              headline="Le French"
              contents="Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincol;
