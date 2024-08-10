import { ReactNode } from 'react'
import Headers from './custom/Headers/Headers'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Headers />
      {children}
    </>
  )
}

export default Layout
