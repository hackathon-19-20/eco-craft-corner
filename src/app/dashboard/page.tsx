import React from 'react'
import { cookies } from 'next/headers'

export default function Dashboard() {
  // console.log("hi " + cookies().get("userId")?.value);
  
  return (
    <div>Dashboard</div>
  )
}
