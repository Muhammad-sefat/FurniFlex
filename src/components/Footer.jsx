import React from "react";
import logo from "../assets/furni.png";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <footer className="footer content p-10 text-white">
        <aside className="flex items-center">
          <img className="w-[10%] rounded-full" src={logo} alt="logo" />
          <h1 className="text-xl md:text-3xl font-bold">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <hr className="my-4 border-2 border-gray-200" />
      </footer>
      <aside className="py-5">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;
