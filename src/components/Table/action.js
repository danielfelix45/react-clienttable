import api from '../../services/api'

export const loadData = async ({ currentPage, limit, totalCount, setTotalCount, setPages, setClients }) => {
  const response = await api.get(`/clients?_page=${currentPage}&_limit=${limit}`);
  setTotalCount(response.headers['x-total-count']) 
  
  const totalPages = Math.ceil(totalCount / limit)
  
  const arrayPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i)       
  }
  
  setPages(arrayPages)
  setClients(response.data)
}

export const handleLimits = (e, { setLimit, setCurrentPage }) => {
  setLimit(e.target.value)
  setCurrentPage(1)
}