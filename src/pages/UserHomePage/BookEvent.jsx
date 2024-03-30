import {
  Box,
  Grid,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Modal,
  TextField,
  FormControl,
} from "@mui/material";
import axios from "../../utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FoundationIcon from "@mui/icons-material/Foundation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainContainer = styled(Box)``;
const SubContainer = styled(Box)``;

const Grids = styled(Grid)``;
const GridItems = styled(Grid)``;

const ImageContainer = styled(Box)`
  /* background-color: red; */
  height: 500px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  padding: 0;
`;

const MainImage = styled(Box)`
  /* background-color: aqua; */
  height: 359px;
  width: 100%;
  padding: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
  #swipe {
    width: 100%;
    background-color: red;
    height: 100%;
  }
`;

const SubImages = styled(Box)`
  height: 129px;
  width: 100%;
  display: flex;
  padding: 0;
  justify-content: space-between;

  img {
    height: 100%;
    width: 100%;
  }
`;
const ImageLists = styled(Box)`
  width: calc(100% / 6);
  height: 100%;
`;

// -----

const DetailsContainer = styled(Box)`
  background-color: #00000057;
  height: 500px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
`;

const Lists = styled(List)``;
const ListItems = styled(ListItem)``;
const MapContainer = styled(Box)`
  height: 195px;
  width: 100%;
`;

const BookEvent = () => {
  const [datas, setData] = useState([]);
  const [images, setImages] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/getallevents");
      setData(response.data?.data?.filter((itm) => itm._id === id));

      const eventImage = response.data?.data?.filter((itm) => itm._id === id)[0]
        ?.image;
      const eventImages = response.data?.data?.filter(
        (itm) => itm._id === id
      )[0]?.venue.images;

      setImages([eventImage, ...eventImages]);
    } catch (err) {
      console.error("event fetching error:", err);
      console.log("Response:", err.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(datas);

  //payment integration

  const  handleOrders = () => {
    console.log('poli poli')
  }

  const initPayment = (data) => {
    const options = {
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      image:
        "https://img.freepik.com/premium-vector/fast-play-symbol-logo-with-letter-f_45189-7.jpg?w=740",
      order_id: data.id,
      handler: async (response) => {
        try {
         
         const user = localStorage.getItem("userId")
         
          const { data } = await axios.post(
            `/api/paymentfinal/${id}/${user}`,
            response,
          );
          console.log(data);
          if (data) {
            handleOrders();
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleClick = async () => {
    try {
        const { data } = await axios.post("/api/paymentstart", {
            amount:datas[0].Ticketprice
          });
          console.log(data)
          initPayment(data.data);
    }
     catch(error) {
        console.error("error:", error);
     }
  };

  return (
    <MainContainer sx={{ padding: { xs: "5px", sm: "15px", lg: "30px" } }}>
      <Button
        onClick={() => nav("/user/events")}
        sx={{ width: "fit-content", color: "white", outline: "none" }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <SubContainer sx={{ padding: { xs: "0", sm: "5", lg: "30px" } }}>
        <Grids container spacing={2}>
          <GridItems item xs={12} sm={7}>
            <ImageContainer>
              <MainImage>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  style={{ height: "100%", width: "100%" }}
                >
                  {images.map((img) => (
                    <SwiperSlide id="swipe">
                      <img src={img?.url} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </MainImage>
              <SubImages>
                <Box sx={{ padding: "0", width: "100%" }}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <RadioButtonCheckedIcon />
                    {datas[0]?.description}
                  </Typography>
                  <List sx={{ width: "100%", display: "flex" }}>
                    {datas[0]?.venue.Facilities.map((amenity, index) => (
                      <ListItem key={index} sx={{ width: "fitContent" }}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <CheckCircleIcon
                            sx={{ fontSize: 28, color: "#00ff00" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={amenity} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </SubImages>
            </ImageContainer>
          </GridItems>
          <GridItems item xs={12} sm={5}>
            <DetailsContainer>
              <Typography variant="h3">{datas[0]?.title}</Typography>
              <Lists>
                <ListItems>
                  <ListItemIcon sx={{ color: "white" }}>
                    <FoundationIcon />
                  </ListItemIcon>
                  <ListItemText primary={datas[0]?.venue.title}></ListItemText>
                </ListItems>
                <ListItems>
                  <ListItemIcon sx={{ color: "white" }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={datas[0]?.venue.place}></ListItemText>
                </ListItems>
                <ListItems>
                  <ListItemIcon sx={{ color: "white" }}>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={datas[0]?.date}></ListItemText>
                </ListItems>
                <ListItems>
                  <ListItemIcon sx={{ color: "white" }}>
                    <CurrencyRupeeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={datas[0]?.freeEvent ? "0" : datas[0]?.Ticketprice}
                  ></ListItemText>
                  <button onClick={handleClick}>Book Now</button>
                </ListItems>
              </Lists>
              <MapContainer>
                {/* <iframe
                                    src="{data[0]?.mapUrl}"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "0" }}
                                    loading="lazy"
                                ></iframe> */}
              </MapContainer>
            </DetailsContainer>
          </GridItems>
        </Grids>
      </SubContainer>
    </MainContainer>
  );
};

export default BookEvent;
