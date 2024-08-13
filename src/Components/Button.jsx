import React from 'react'

const Button = (props) => {
    console.log(props);
  return (
    <button disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button