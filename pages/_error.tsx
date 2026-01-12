import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{statusCode ? `${statusCode}` : 'An error occurred'}</h1>
      <p>{statusCode === 404 ? 'Page not found' : 'Server error'}</p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
