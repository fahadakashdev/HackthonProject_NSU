
import { Outlet } from 'react-router-dom'
import { StickyNavbar } from '../components/Navbar/Navbar'
import { FooterWithSocialLinks } from '../components/Footer/Footer'

const Main = () => {
  return (
    <div className='max-w-[1440px bg-[#F7ECFF]'>
       <StickyNavbar></StickyNavbar>
       <Outlet></Outlet>
       <FooterWithSocialLinks> </FooterWithSocialLinks>
    </div>
  )
}

export default Main