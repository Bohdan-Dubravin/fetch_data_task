import React from 'react'
import { Table } from 'react-bootstrap'

const PostsList = ({ list, tableHead }) => {
  return (
    <div className='rounded-1 overflow-hidden card shadow'>
      <Table
        stripped
        responsive='sm'
        hover
        size='sm'
        className='table align-items-center table-flush'
      >
        <thead className='thead-light fw-semibold '>
          <tr>
            {tableHead.map((cell) => {
              return <td key={cell}>{cell}</td>
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {list.length &&
            list.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default PostsList
