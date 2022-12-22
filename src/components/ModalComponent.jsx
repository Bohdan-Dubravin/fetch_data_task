import { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { getAlbums } from '../redux/slices/albumsSlice'

const ModalComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(true)
  const { status, albums } = useSelector((state) => state.albums)
  const [searchParams] = useSearchParams()
  const tableHead = ['id', 'title']

  const handleClose = () => {
    setShow(false)
    navigate(-1)
  }

  useEffect(() => {
    const userId = searchParams.get('userId')
    dispatch(getAlbums(userId))
    console.log(albums)
  }, [])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status === 'loading' ? (
            <Spinner />
          ) : (
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
                {albums.length &&
                  albums.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
