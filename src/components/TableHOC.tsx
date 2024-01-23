import { useTable,Column, TableOptions , useSortBy, usePagination} from "react-table"
import { FaSortAmountDown } from "react-icons/fa";

import { FaSortAmountUp } from "react-icons/fa";


function TableHOC<T extends Object> (columns:Column<T>[], data:T[], containerClassname:string, 
       heading:string ,
      showPagination:boolean = false,

    
    ) {
        console.log("in tableHOC");
  return  function Hoc(){

    const options:TableOptions<T> = {
        columns, data,

        initialState:{
         pageSize:4
        }
    }

    const table = useTable(options,useSortBy, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups,page, prepareRow, 
    
    nextPage, previousPage, canNextPage, canPreviousPage,
    // gotoPage,
    pageCount, state:{pageIndex}
    } = table
      
console.log(table);

    return <div className={containerClassname}>
         <h2 className="heading">{heading}</h2>
      <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && <span>{column.isSortedDesc?< FaSortAmountUp/>:<FaSortAmountDown/>}</span>}
                    
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          showPagination && <div className="table-pagination">
                           <button disabled={!canPreviousPage} onClick={previousPage}>prev</button>
                           <span> {`${pageIndex+1} page of ${pageCount}`}</span>
                           <button disabled={!canNextPage} onClick={nextPage}>next</button>

          </div>
        }

    </div>

      }
 
}

export default TableHOC