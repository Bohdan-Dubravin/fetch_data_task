import { Table } from 'react-bootstrap'

const TableComponent = ({ tableHead, data }) => {
  return (
    <div className='rounded-2 overflow-hidden card shadow'>
      <Table striped responsive='sm' hover size='sm' className='m-0'>
        <thead className='bg-primary rounded-2 text-white  bg-gradient fw-semibold'>
          <tr>
            {tableHead.map((cell) => {
              return <td key={cell}>{cell}</td>
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {data.length &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  {tableHead.map((field) => {
                    return <td key={field}>{item[field]}</td>
                  })}
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent
