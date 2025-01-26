import React from 'react'

type ChildrenProps = {
  children: React.ReactNode;
}

export function LemonLimeBorder(props: ChildrenProps) {
  return (
    <div className="border-lemon-lime-500 border-3 rounded-md">
      {props.children}
    </div>
  )
}

export function Margin4(props: ChildrenProps) {
  return (
    <div className="m-4">
      {props.children}
    </div>
  )
}
