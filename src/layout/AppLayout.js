import React from 'react'
import { TopNav } from '../components/TopNav'
import { SideNav } from '../components/sideNav'

export const AppLayout = ({ children,isBack,onclick }) => {
  return (
    <>
      <main
          className="
        flex
        h-screen
        w-screen
        overflow-hidden
        "
      >
        <div className="side-nav hidden h-screen min-w-[272px] overflow-y-auto bg-primary xl:block">
            <SideNav />
        </div>
         <div className=" bg-white relative h-screen w-full pt-0 pb-20">
          <TopNav isBack={isBack} onClick={onclick} />
            <div className="h-full overflow-y-auto bg-primary-gray px-10 pt-8 pb-20">
              {children}
            </div>
          </div>
        </main>
    </>
  )
}