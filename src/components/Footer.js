import React from "react";
import { Instagram, Twitter, Facebook } from "@material-ui/icons";
import Link from "@mui/material/Link";
import "../styles/Footer.css";

function Footer() {
  const instaLink = "https://www.instagram.com/frontend_basic/";
  const twitterLink = "https://twitter.com/ashir_makhtim";
  const facebookLink = "https://web.facebook.com/ashyr.ashyr.10";
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href={instaLink} target="_blank">
          <Instagram />
        </Link>
        <Link href={twitterLink} target="_blank">
          <Twitter />
        </Link>
        <Link href={facebookLink} target="_blank">
          <Facebook />
        </Link>
      </div>
      <p>&copy; 2023 website.com</p>
    </div>
  );
}

export default Footer;
