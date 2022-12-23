import { useSelector } from 'react-redux'
import AlbumsList from '../components/AlbumsList'
import ModalComponent from '../components/ModalComponent'
import UsersList from '../components/UsersList'

const HomePage = () => {
  const { show } = useSelector((state) => state.modal)

  return (
    <div>
      <UsersList />
      {show && (
        <ModalComponent modalTitle='User Albums' component={<AlbumsList />} />
      )}
    </div>
  )
}

export default HomePage
