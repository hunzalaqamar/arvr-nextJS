import Image from "next/image";
import { Navbar, Container } from "react-bootstrap";
import { useRouter } from "next/router";

function Header({
  logo,
  productName,
  productPhrase,
  companyWebsite,
  isViewLarge,
}) {
  const router = useRouter();
  return (
    <nav
      className="autohide navbar navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Container className="mx-auto my-auto">
        {isViewLarge && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              router.push(`/LandingPage`);
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
        )}

        <Navbar.Brand href={companyWebsite}>
          <Image width={60} height={60} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Text>
          <h4 className="text-center navbar-brand">{productName}</h4>
          <div>{productPhrase}</div>
        </Navbar.Text>
      </Container>
    </nav>
  );
}

export default Header;
