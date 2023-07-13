import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import styles from './ErrorPage.module.scss'

function ErrorPage() {
  const error = useRouteError()
  const { status, statusText, data } = error
  return (
    <div className={styles.errorPage}>
      <h1>Oops !</h1>
      <i>{status} : {statusText}</i>
      <div>{data}</div>
      <button>
        <Link to={'/'}>Go back to Home</Link>
      </button>
    </div>
  )
}

export default ErrorPage