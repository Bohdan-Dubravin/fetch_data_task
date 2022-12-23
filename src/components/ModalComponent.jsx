import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router'

const ModalComponent = ({ modalTitle, component }) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
    navigate(-1)
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
