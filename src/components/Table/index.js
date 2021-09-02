import React, { useEffect, useState } from 'react'
import { currencyFormat } from '../../utils/functions'
import { loadData, handleLimits } from './action'
import { CardContainer, TotalsContainer } from './styles'

import Paginate from '../Paginate'
import LimitPage from '../LimitPage'

export default function Table() {
  const [clients, setClients] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(5)
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    loadData({
      currentPage,
      limit,
      totalCount,
      setTotalCount,
      setPages,
      setClients
    })
  }, [currentPage, limit, totalCount])

  return (
    <div className="container">
      <h3>Lista de Clientes</h3>
      <CardContainer className="table-responsive">
        <LimitPage
          handleLimits={e => handleLimits(e, { setLimit, setCurrentPage })}
        />

        <br />

        <table
          className="table table-striped table-hover"
          style={{ minWidth: 700 }}
        >
          <thead>
            <tr>
              <th>Nº CLIENTE</th>
              <th>CLIENTE</th>
              <th>QTD. CHARGEBACK</th>
              <th>VALOR CHARGEBACK</th>
              <th>QTD VENDAS</th>
              <th>VALOR TOTAL</th>
              <th>% CHARGEBACK</th>
              <th>% TOTAL CHARGEBACK</th>
              <th>
                <nav>
                  <a className="navbar-brand" href="#"></a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">︙</span>
                  </button>
                </nav>
              </th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty_chargeback}</td>
                  <td>{currencyFormat(item.value_chargeback)}</td>
                  <td>{item.qty_sales}</td>
                  <td>{currencyFormat(item.value_total)}</td>
                  <td>{item.perc_chargeback}</td>
                  <td colSpan="2">{item.perc_total_chargeback}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <TotalsContainer>
          Total de Paginas: {currentPage} de {totalCount}
        </TotalsContainer>

        <Paginate
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CardContainer>
    </div>
  )
}
