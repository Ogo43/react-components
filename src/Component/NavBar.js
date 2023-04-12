import 'boxicons';

const NavBar = () => {
  return (
    <>
      <header className='nav-header'>
        <nav className='nav-style'>
          <a href="https://www.gmail.com">Gmail</a>
          <a href="https://www.google.com.ng/imghp?hl=en&authuser=0&ogbl">Images</a>
          <a href="https://www.google.com.ng/intl/en/about/products"><box-icon type='solid' name='grid'></box-icon></a>
          <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://wwww.google.com/"><box-icon type='solid' name='user-circle'></box-icon></a>
        </nav>
      </header>
    </>
  )
}

export default NavBar;