import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostsList from '../components/PostsList'
import { getPosts } from '../redux/slices/postsSlice'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'

const PostsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)
  const { users } = useSelector((state) => state.users)

  const tableHead = ['id', 'title', 'body']

  useEffect(() => {
    setSearchParams({ id })
    dispatch(getPosts(id))
  }, [])

  return (
    <div>
      <h2> posts</h2>
      <Button onClick={() => navigate(-1)} size='sm'>
        Back
      </Button>
      {posts.length ? (
        <PostsList tableHead={tableHead} list={posts} />
      ) : (
        <Spinner animation='border' variant='primary' />
      )}
    </div>
  )
}

export default PostsPage
