import PostsList from '../components/PostsList'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const PostsPage = () => {
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.users)
  const [searchParams] = useSearchParams()
  const userId = searchParams.get('userId')
  const userName = users.find(
    (user) => user.id.toString() === userId.toString()
  ).name

  return (
    <div>
      <h2>Posts {userName && `of ${userName}`}</h2>
      <Button className='d-block mb-5' onClick={() => navigate(-1)} size='sm'>
        Back
      </Button>
      <PostsList />
    </div>
  )
}

export default PostsPage
