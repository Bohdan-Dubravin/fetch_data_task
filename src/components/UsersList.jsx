import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { getUsers } from '../redux/slices/usersSlice'
import Button from 'react-bootstrap/Button'
import { ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)
  const tableHead = [
    'Id',
    'Full name',
    'User name',
    'Email',
    'Address',
    'Actions',
  ]

  useEffect(() => {
    dispatch(getUsers())
  }, [])

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
          {users.length &&
            users.map((user) => {
              const { id, name, username, email, address } = user
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>
                    City : {address.city}
                    <br />
                    Street: {address.street} Suite : {address.suite}
                  </td>
                  <td>
                    <ButtonGroup size='sm' className='mt-2'>
                      <Button variant='primary'>
                        <Link to={`/posts/${id}`}>Posts</Link>
                      </Button>
                      <Button variant='primary'>Albums</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default UsersList
