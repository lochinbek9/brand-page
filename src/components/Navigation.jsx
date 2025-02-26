

function Navigation() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <a href='./index.html' className="logo">
          <img src="./img/logo.png" alt="" />
        </a>
        <ul className='list'>
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">LOCATION</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation