import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" mt-auto mx-5 text-white text-center py-2 bg-stone-900 ">
      @ {date.getFullYear()}{" "}
      <a href="https://mms-it.com" className="underline text-stone-400">
        MMS IT
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
