import React from "react";
import { FiX } from "react-icons/fi";

const QRCodeView = ({ showQR, qrCode }) => {
  return (
    <section className="model">
      <div className="qr-model">
        <FiX className="close-icon" onClick={() => showQR()} />
        <div className="qrcode">
          <img src={qrCode} alt="qrcode" />
          <div>
            <a
              href={qrCode}
              download="qrcode.jpeg"
              className="btn qrcode-download"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeView;
