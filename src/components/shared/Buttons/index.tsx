import React from 'react'

type ButtonTypes = 'sm' | 'md' | 'lg'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: ButtonTypes
}
export default function Button({children, active, onClick, className}: Props) {
  return (
    <button className={`${active ? 'bg-skin-fill-inverted text-skin-inverted fill-skin-inverted' : 'bg-hover-transparent'} p-[6px] rounded ${className && className}`} onClick={onClick ? onClick : () => {}}>
        {children}
    </button>
  )
}
