import { Suspense } from 'react';
import NavBar from 'components/NavBar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <main>
    <NavBar/>
        <Suspense fallback={null}>
          <Outlet />
          </Suspense>
    </main>
    </>
  )
}
