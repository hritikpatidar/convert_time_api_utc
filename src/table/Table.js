import React from 'react'
import { useTable } from 'react-table/dist/react-table.development'

export default function Table({columns,data}) {
    //1. state
    const tableInstance = useTable({columns, data})
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = tableInstance 
    //2. function defination
    // 3. return statement

  return (
    <div>
         <table {...getTableProps()} style={{ border: 'solid 5px black' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: 'solid 5px red',
                        background: 'orange',
                        color: 'blue',
                        fontWeight: 'bold',
                      }}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                          }}
                        
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
      </table>  
    </div>
  )
}