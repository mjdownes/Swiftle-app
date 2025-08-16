import { twMerge } from "tailwind-merge"
import Header from "./Header";
import { Capacitor } from "@capacitor/core";
import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

type LayoutProps = {
  children?: ReactNode,
  allowBack?: boolean,
  allowTitle?: boolean,
  className?: string,
  isHome?: boolean,
}

const Layout = ({ children, allowBack, allowTitle, className, isHome }: LayoutProps) => {

  // current Theme 

  const statusbar = 24;
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={twMerge("flex flex-col w-screen h-screen overflow-hidden", className)}
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.secondary,
        paddingTop: Capacitor.getPlatform() === 'ios' // sorts the padding depending on the device
          ? 'env(safe-area-inset-top)'
          : `${statusbar}`,
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}>

      {/* Header with the back button  */}
      <Header className="z-10 h-[10%] "
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.secondary
        }} allowBack={allowBack} allowTitle={allowTitle} isHome={isHome} />

      {/* main area where all the children goes */}
      < main className="flex flex-col flex-1 overflow-y-auto">
        {children}
      </main>

    </div >
  )
}

export default Layout;