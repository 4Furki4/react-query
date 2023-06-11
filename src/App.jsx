import React, { useEffect } from 'react'
import Posts from './Posts'
import './index.css'
export default function App() {
  const [currentPage, setCurrentPage] = React.useState()
  useEffect(() => {
    setCurrentPage(<Posts setCurrentPage={setCurrentPage} />)
  }, [])
  return (
    <div className='container'>
      {currentPage}
    </div>
  )
}
