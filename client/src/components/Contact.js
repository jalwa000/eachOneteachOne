import React from "react";

function Contact() {
  return (
    <div className="container col-6 center " style={{ marginTop: "200px" }}>
      <div
        className="container m-3 p-3 col-12 p-5 "
        style={{ backgroundColor: "#006600", color: "#e6e600" }}
      >
        <div style={{ textAlign: "center" }}>
          <h1> " KnowLedge ShaRing CoMMuNITy " </h1>
          <h2>GraFenbeGer Allee 87</h2>
          <h3>40237 DüsseLdorF</h3>
          <h5>Phone: 123456789</h5>
          <h6>info@knowledgesharingcom.de</h6>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;Abdul Hafeez Khattak" }} />
        </div>
      </div>

    </div>
  );
}

export default Contact;
