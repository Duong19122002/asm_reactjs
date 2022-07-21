import React from 'react'
import { Outlet } from 'react-router'
import Banner from '../components/banner'
import Header from '../components/header'

type Props = {}

const UserLayout = (props: Props) => {
   return (
      <div>
         <Header />
         <Banner />
         <Outlet />
      </div>
   )
}

export default UserLayout