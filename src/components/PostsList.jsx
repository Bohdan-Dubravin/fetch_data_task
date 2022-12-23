import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getPosts } from '../redux/slices/postsSlice'
import TableComponent from './TableComponent'

const PostsList = () => {
  const dispatch = useDispatch()
  const { status, posts } = useSelector((state) => state.posts)
  const [searchParams] = useSearchParams()
  const tableHead = ['id', 'title', 'body']

  useEffect(() => {
    const userId = searchParams.get('userId')
    dispatch(getPosts(userId))
  }, [])

  if (!status && !posts.length) {
    return <h3>No posts found</h3>
  }

  return (
    <>
      {status === 'loading' ? (
        <Spinner className='mx-auto mt-20' />
      ) : (
        <TableComponent tableHead={tableHead} data={posts} />
      )}
    </>
  )
}

export default PostsList
