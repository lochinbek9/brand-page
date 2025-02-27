

function Navigation() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <a href='./index.html' className="logo">
          <img src="./img/logo.png" alt="" />
        </a>
        <ul className='list'>
            <li className="item">
              <a href="#" className="link">MENU</a>
            </li>
            <li className="item">
              <a href="#" className="link">LOCATION</a>
            </li>
            <li className="item">
              <a href="#" className="link">ABOUT</a>
            </li>
            <li className="item">
              <a href="#" className="link">CONTACT</a>
            </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation