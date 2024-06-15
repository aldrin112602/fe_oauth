import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-center md:text-left">
            Contact
          </h2>
          <ul className="flex items-center justify-center gap-7">
            <li>
              <a
                href="mailto:caballeroaldrin02@gmail.com"
                className="hover:underline"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aldrin112602"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aldrin_11.26/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aldrin-caballero-aa6b25257"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Aldrin Caballero. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;