const Slide = () => {
  return (
    <div style={{ 'marginLeft': '40%' }}>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true" style={{ 'color': 'black' }}>&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#" style={{ 'color': 'black' }}>1</a></li>
          <li class="page-item"><a class="page-link" href="#" style={{ 'color': 'black' }}>2</a></li>
          <li class="page-item"><a class="page-link" href="#" style={{ 'color': 'black' }}>3</a></li>
          <li class="page-item">
            <a class="page-link" href="#s" aria-label="Next">
              <span aria-hidden="true" style={{ 'color': 'black' }}>&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Slide;