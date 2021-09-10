import axios from "axios";
import { useEffect, useState } from "react"
import { SalePage } from "types/salePage"
import { formatLocalDate } from "utils/formatLocalDate";
import { BASE_URL } from "utils/requests";
import { Pagination } from '../Pagination';

export function DataTable() {

  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
    .then((resp) => {
      setPages(resp.data);
    })
  }, [activePage]);

  const changePage = (index: number) => {
    return setActivePage(index);
  }

  return (
    <>
    <Pagination page={pages} onPageChange={changePage} />
    <div className='table-responsive'>
      <table className='table table-striped table-sm'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {pages.content?.map((page) => (
            <tr key={page.seller.id}>
              <td>{formatLocalDate(page.date, "dd/MM/yyyy")}</td>
              <td>{page.seller.name}</td>
              <td>{page.visited}</td>
              <td>{page.deals}</td>
              <td>{page.amount.toFixed(2)}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    
    </>
  )
}
