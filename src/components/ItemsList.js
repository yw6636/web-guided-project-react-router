import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom'
export default function ItemsList(props) {
  const { items } = props
  const { url } = useRouteMatch();

  // We'll grab the current URL using the hook

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${url}/${item.id}`}>
          {/* We could do <Link to={'localhost:1234/items-list/${item.id}}/>  */}
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          {/* Link ends */}
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
