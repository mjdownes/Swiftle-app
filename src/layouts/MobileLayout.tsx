import { twMerge } from "tailwind-merge"
import Header from "./Header";
import { Capacitor } from "@capacitor/core";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode,
  allowBack?: boolean,
  className?: string
}

const Layout = ({ children, allowBack, className }: LayoutProps) => {

  // current Theme 

  const statusbar = 24

  return (
    <div className={twMerge("flex flex-col w-screen h-screen overflow-hidden bg-sky-50", className)}
      style={{
        paddingTop: Capacitor.getPlatform() === 'ios' // sorts the padding depending on the device
          ? 'env(safe-area-inset-top)'
          : statusbar,
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}>

      {/* Header with the back button  */}
      {allowBack && (<Header className="text-black text-3xl font-bold text-center z-10 h-25% " />)}

      {/* main area where all the children goes */}
      <main className="flex-1 overflow-y-auto mx-5">
        {children}
      </main>

    </div >
  )
}

export default Layout;