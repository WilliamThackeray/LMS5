import Header from './header.jsx'
import Footer from './footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout ({title, logo}) {
  return (
    <div>
      <Header title={title} logo={logo}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}