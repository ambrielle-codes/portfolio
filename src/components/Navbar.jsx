function Navbar() {

  return (
    <nav className="w-full fixed top-5 flex align-center justify-around">
      <div className="flex gap-3">
        <a href="">github</a>
        <a href="">linked in</a>
      </div>
        <div className="flex gap-5">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    </nav>
  )
}

export default Navbar
