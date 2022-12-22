import { Outlet } from 'react-router'
import TableList from '../components/TableList'
import UsersList from '../components/UsersList'

const HomePage = () => {
  return (
    <div>
      <UsersList />
      <Outlet />
    </div>
  )
}

export default HomePage
