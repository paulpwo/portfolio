import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Dirección</span> Bogotá D.C, Colombia
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Correo</span>{" "}
        <a href="mailto:steve@mail.com">paul@devpwo.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Teléfono</span>{" "}
        <a href="Tel: 3193552985">319 355 2985</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
