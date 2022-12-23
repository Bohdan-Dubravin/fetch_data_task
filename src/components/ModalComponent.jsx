import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../redux/slices/modalSlice'

const ModalComponent = ({ modalTitle, component }) => {
  const { show } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideModal())
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle || ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{component}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
