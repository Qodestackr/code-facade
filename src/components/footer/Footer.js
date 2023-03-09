import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="larger-screen-warn">
        All features easily visible on a larger screen..
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/Qodestackr"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
        <li>
          <a href="https://github.com/Qodestackr">
            View Code
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wilson-gichuhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Qodestackr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
