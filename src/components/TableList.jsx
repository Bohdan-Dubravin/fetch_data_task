import Table from 'react-bootstrap/Table'

export default function TableList({ head, data }) {
  return (
    <>
      <h3>Dark Variant Small Size Table</h3>

      <Table stripped bordered hover variant='dark' size='sm'>
        <thead>
          <tr>
            {head.length &&
              head.map((cell) => {
                return <td key={cell}>{cell}</td>
              })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rakesh</td>
            <td>1123</td>
            <td>CSE</td>
            <td>Mumbai</td>
            <td>86.9%</td>
          </tr>
          <tr>
            <td>Jackson</td>
            <td>1124</td>
            <td>ECE</td>
            <td>Hyderabad</td>
            <td>72.4%</td>
          </tr>
          <tr>
            <td>Keshav</td>
            <td>1124</td>
            <td>CSE</td>
            <td>Chennai</td>
            <td>88%</td>
          </tr>
          <tr>
            <td>Neilesh Jain</td>
            <td>1125</td>
            <td>EEE</td>
            <td>Gwalior</td>
            <td>66.9%</td>
          </tr>
          <tr>
            <td>Akbar sheikh</td>
            <td>1126</td>
            <td>Mechanical</td>
            <td>Indore</td>
            <td>96.5%</td>
          </tr>
          <tr>
            <td>Sarita</td>
            <td>1127</td>
            <td>CSE</td>
            <td>Delhi</td>
            <td>96.9%</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
