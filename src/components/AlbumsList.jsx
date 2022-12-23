import TableComponent from './TableComponent'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAlbums } from '../redux/slices/albumsSlice'

const AlbumsList = () => {
  const dispatch = useDispatch()
  const { status, albums } = useSelector((state) => state.albums)
  const [searchParams] = useSearchParams()
  const tableHead = ['id', 'title']

  useEffect(() => {
    const userId = searchParams.get('userId')
    dispatch(getAlbums(userId))
  }, [])

  if (!status && !albums.length) {
    return <h3>No albums found</h3>
  }

  return (
    <>
      {status === 'loading' ? (
        <div className='mx-auto mt-20'>
          <Spinner className='' />
        </div>
      ) : (
        <TableComponent tableHead={tableHead} data={albums} />
      )}
    </>
  )
}

export default AlbumsList
