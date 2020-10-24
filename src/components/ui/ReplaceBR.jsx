import React from 'react'

const ReplaceBr = ({ string }) => {
  return (
    <>
      {string.split('\\n').map((str, i) => (
        <span key={i}>
          {i !== 0 && <br />}
          {str}
        </span>
      ))}
    </>
  )
}

export default ReplaceBr
