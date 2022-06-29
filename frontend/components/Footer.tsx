import Head from "next/head";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between p-3">
      <div className="flex space-x-4">
        <a href="">CH</a>
        <a className="text-gray-500" href="">
          EN
        </a>
      </div>
      <div>
        <p>© Mei's Bakery {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
