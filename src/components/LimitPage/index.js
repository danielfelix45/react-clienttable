import React from 'react'

export default function LimitPage({ handleLimits }) {
  return (
    <select style={{ width: 70 }} className="form-control" onChange={handleLimits}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  )
}
