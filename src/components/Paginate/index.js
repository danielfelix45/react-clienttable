import React from 'react'

export default function Paginate({ pages, currentPage, setCurrentPage }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <a href="#" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}
        {pages.map(item => (
          <li className="page-item" key={item}>
            <a className="page-link" href="#" onClick={() => setCurrentPage(item)}>{item}</a>
          </li>           
        ))}   
        {currentPage < pages.length && (
          <li>
            <a href="#" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}
