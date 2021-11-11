const Slide = () => {
  return (
    <div style={{ 'marginLeft': '40%' }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#home" aria-label="Previous">
              <span aria-hidden="true" style={{ 'color': 'black' }}>&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active text-black"><a className="page-link" href="#home" >1</a></li>
          <li className="page-item text-black"><a className="page-link" href="#home" >2</a></li>
          <li className="page-item text-black"><a className="page-link" href="#home" >3</a></li>
          <li className="page-item">
            <a className="page-link" href="#s" aria-label="Next">
              <span aria-hidden="true" className="text-black">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Slide;