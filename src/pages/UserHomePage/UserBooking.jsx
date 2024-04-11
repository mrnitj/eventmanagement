import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import axios from "../../utils/AxiosInstance";

import { Box, Card, CardContent, Grid, ListItem, ListItemIcon, ListItemText, styled, List, Chip } from "@mui/material";

import FoundationIcon from "@mui/icons-material/Foundation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import Navbar from "../../components/userComponents/navbar";
import Footer from "../../components/userComponents/Footer";

const MainContainer = styled(Box)`
    padding: 0;
`;

const SubContainer = styled(Box)`
    padding: 0;
    min-height: 100vh;
`;

const Cards = styled(Card)`
    height: fit-content;
    width: 100%;
    cursor: pointer;
    position: relative;
`;
const ImageBox = styled(Box)`
    height: 256px;
    width: 100%;
    display: grid;
    place-items: center;
`;
const CardContents = styled(CardContent)`
    height: fit-content;
    padding: 20px;
    position: relative;
`;

const Lists = styled(List)`
    padding: 0;
    #listSeats {
        width: 250px;
    }
    #listPlace {
        width: 250px;
    }
`;
const ListItems = styled(ListItem)`
    margin-bottom: 10px;
    padding: 0;
    .listIcon {
        min-width: 30px;
    }
    #more {
        display: -webkit-box !important;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 250px, dis;
    }
`;

export const UserBooking = () => {
    const [bookingData, setBookingData] = useState([]);

    console.log("bookingdata", bookingData);

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

    const handleClick = async () => {
        try {
            const amount = bookingData.totalAmount;
            const razorpay_payment_id = bookingData[0].razorpay_payment_id;

            console.log(razorpay_payment_id);

            const response = await axios.post("/api/refund", {
                amount: amount,
                paymentId: razorpay_payment_id,
            });
            console.log("Refund response:", response.data);
        } catch (err) {
            console.error("refund fetching error:", err);
            console.log("Response:", err.response);
        }
    };

    return (
        <MainContainer>
            <Navbar />
            <SubContainer>
                <Grid container spacing={2} p={4}>
                    {bookingData.map((event) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Cards>
                                <ImageBox>
                                    <QRCode size={200} value={event._id} level="H" includeMargin={true} />
                                </ImageBox>
                                <CardContents>
                                    <Lists>
                                        <Box sx={{ display: "flex" }}>
                                            <ListItems id="listPlace">
                                                <ListItemIcon className="listIcon">
                                                    <FoundationIcon />
                                                </ListItemIcon>
                                                <ListItemText id="more" secondary={event.event.title} />
                                            </ListItems>
                                            <ListItems>
                                                <ListItemIcon className="listIcon">
                                                    <LocationOnIcon />
                                                </ListItemIcon>
                                                <ListItemText id="more" secondary={event.event.venue.place} />
                                            </ListItems>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <ListItems id="listSeats">
                                                <ListItemIcon className="listIcon">
                                                    <DateRangeIcon />
                                                </ListItemIcon>
                                                <ListItemText secondary={event.event.date} />
                                            </ListItems>
                                            <ListItems>
                                                <ListItemIcon className="listIcon">
                                                    <PeopleAltIcon />
                                                </ListItemIcon>
                                                <ListItemText id="more" secondary={event.totalTickets} />
                                            </ListItems>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <ListItems>
                                                <ListItemIcon className="listIcon">
                                                    <CurrencyRupeeIcon />
                                                </ListItemIcon>
                                                <ListItemText id="more" secondary={event.totalAmount} />
                                            </ListItems>
                                            <button onClick={handleClick}>Cancel</button>
                                        </Box>
                                    </Lists>
                                </CardContents>
                            </Cards>
                        </Grid>
                    ))}
                </Grid>
            </SubContainer>
            <Footer />
        </MainContainer>
    );
};

// <div>hi</div>
