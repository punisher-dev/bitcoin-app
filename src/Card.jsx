import React from 'react'

const styles = {
    background: 'lightgray',
    padding: '2rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    color: 'Black',
    boxShadow: '2px 2px 4px #000000'
}

const Card = ({ children }) => {
  return (
    <div style={styles}>{children}</div>
  )
}

export default Card