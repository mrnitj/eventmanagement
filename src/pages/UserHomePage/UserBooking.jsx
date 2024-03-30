import React from "react";
import QRCode from "qrcode.react";

export const UserBooking = () => {

  
  return (
    <>
      <QRCode
        size={200}
        value={
          "https://github.com/Rahul-Radhakrishnan789/Wanderguide.com-backend/blob/main/controllers/userController.js"
        }
        level="H"
        includeMargin={true}
      />
      <div>hi</div>
    </>
  );
};
