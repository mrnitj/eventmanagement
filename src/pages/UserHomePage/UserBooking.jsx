import React,{useState,useEffect} from "react";
import QRCode from "qrcode.react";
import axios from "../../utils/AxiosInstance"

export const UserBooking = () => {

  const [bookingData, setBookingData] = useState([]);

  console.log("bookingdata",bookingData)

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/fetchallbooking");
      setBookingData(response.data?.data);

   
    } catch (err) {
      console.error("event fetching error:", err);
      console.log("Response:", err.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


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
