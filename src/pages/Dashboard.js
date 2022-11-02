import React, { useState } from "react";
import {
  NavBar,
  NavLinks,
  Content,
  Footer,
  Model,
  Credit,
  QRCodeView,
} from "../components";
import { useSelector } from "react-redux";
import QRCode from "qrcode";
import { constants } from "../util/constant";

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [credit, setCredit] = useState(false);
  const [qr, setQr] = useState(false);
  const [qrCode, setQrCode] = useState("");

  const { user } = useSelector((store) => store.user);

  const modelShow = async (id = constants.ADD_CREDIT_ONLINE_ID) => {
    if (id === constants.GET_DIGITAL_TOKEN_ID) {
      setQr(!qr);
      generateQRCODE();
    }
    if (id === constants.ADD_CREDIT_ONLINE_ID) {
      setModelOpen(!modelOpen);
    }
    if (id === constants.VIEW_AVAILABLE_CREDIT_ID) {
      setCredit(!credit);
    }
    return;
  };

  const showCredit = (id = constants.VIEW_AVAILABLE_CREDIT_ID) => {
    if (id === constants.VIEW_AVAILABLE_CREDIT_ID) {
      setCredit(!credit);
    }
    return;
  };

  const showQR = (id = constants.GET_DIGITAL_TOKEN_ID) => {
    if (id === constants.GET_DIGITAL_TOKEN_ID) {
      setQr(!qr);
    }
    return;
  };

  const generateQRCODE = () => {
    const data = {
      name: user.name,
      userID: user.userId,
      idNumber: user.idNumber,
    };
    QRCode.toDataURL(
      (data.name, data.userID, data.idNumber),
      {
        type: "image/jpeg",
        width: 400,
        margin: 1,
        quality: 0.9,
      },
      (err, url) => {
        if (err) return console.log(err);
        setQrCode(url);
      }
    );
  };

  return (
    <main>
      {modelOpen && <Model modelShow={modelShow} />}
      {credit && <Credit showCredit={showCredit} />}
      {qr && <QRCodeView showQR={showQR} qrCode={qrCode} />}
      <NavBar />
      <NavLinks />
      <section className="main-background">
        <Content modelShow={modelShow} showCredit={showCredit} />
        <Footer />
      </section>
    </main>
  );
};

export default Dashboard;
