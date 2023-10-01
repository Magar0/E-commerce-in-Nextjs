import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";


const Header = () => {

  const myStyle = {
    display: "flex",
    justifyContent: 'space-between',
    padding: "5px",
    backgroundColor: '#e2e2e2',
  }

  return (
    <>
      <header>
        <div style={myStyle}>
          <Link href="/">
            <Image src="/logo.jpg" alt="logo" width={70} height={50} style={{ borderRadius: "2rem" }} />
          </Link>
          <Nav />
        </div>
      </header>
    </>
  )
}


export default Header;
