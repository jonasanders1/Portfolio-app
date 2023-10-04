import React from "react"

interface HeaderProps {
    name: string
}


const Header: React.FC<HeaderProps> = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default Header