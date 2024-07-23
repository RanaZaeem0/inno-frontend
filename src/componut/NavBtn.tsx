import React from 'react'
import { useNavigate } from 'react-router'

export default function NavBtn({label,className,href} ) {
  const Naviagte = useNavigate()
    return (
    <button    className={`${className}`}>
<a  href={`${href}`}>
    {label}
</a>
    </button>
  )
}
