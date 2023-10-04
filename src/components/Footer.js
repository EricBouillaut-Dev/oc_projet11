import LogoFooter from "../assets/logo_Footer.svg";

//Composant footer
function Footer() {
  return (
    <div className="footer">
      <img src={LogoFooter} alt="Logo-Footer" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  );
}

export default Footer;
