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
  TextField,
  FormControl,
  Modal,
} from "@mui/material";
import axios from "../../utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
  background-color: aqua;
  height: 359px;
  width: 100%;
  padding: 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
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

const VenueDetails = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    Ticketprice: null,
    maximumSeats: null,
    image: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/getallvenues");
      setData(response.data.data.filter((itm) => itm._id === id));
    } catch (err) {
      console.error("venue fetching error:", err);
      console.log("Response:", err.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const images = data.length > 0 ? data[0].images : [];

  const imageView = (prop) => {
    setImage(images[prop]?.url);
  };

  // modal feature implementation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("main form data", formData);
  };
  const handleImageUpload = (event) => {
    const files = event.target.file;
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("first");
    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      if (!formData.title || !formData.category || !formData.Ticketprice) {
        alert("Please fill in all required fields!");
        return;
      }
      const response = await axios.post(
        `/api/postevent/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);

      console.log("Submitting form:", formData);
    } catch (error) {
      console.error("Event Registration error:", error);
      console.log("Response:", error.response);
    }
  };

  // Function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainContainer sx={{ padding: { xs: "5px", sm: "15px", lg: "30px" } }}>
        <Button
          sx={{ width: "fit-content", color: "white", outline: "none" }}
          onClick={() => navigate("/organizer")}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <SubContainer sx={{ padding: { xs: "0", sm: "5", lg: "30px" } }}>
          <Grids container spacing={2}>
            <GridItems item xs={12} sm={7}>
              <ImageContainer>
                <MainImage>
                  <img
                    src={image.length == 0 ? images[0]?.url : image}
                    alt=""
                  />
                </MainImage>
                <SubImages>
                  <ImageLists onClick={() => imageView(0)}>
                    <img src={images[0]?.url} alt="" />
                  </ImageLists>
                  <ImageLists onClick={() => imageView(1)}>
                    <img src={images[1]?.url} alt="" />
                  </ImageLists>
                  <ImageLists onClick={() => imageView(2)}>
                    <img src={images[2]?.url} alt="" />
                  </ImageLists>
                  <ImageLists onClick={() => imageView(3)}>
                    <img src={images[3]?.url} alt="" />
                  </ImageLists>
                  <ImageLists onClick={() => imageView(4)}>
                    <img src={images[4]?.url} alt="" />
                  </ImageLists>
                </SubImages>
              </ImageContainer>
            </GridItems>
            <GridItems item xs={12} sm={5}>
              <DetailsContainer>
                <Typography variant="h3">Crown Plaza</Typography>
                <Lists>
                  <ListItems>
                    <ListItemIcon sx={{ color: "white" }}>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Calicut"}></ListItemText>
                  </ListItems>
                  <ListItems>
                    <ListItemIcon sx={{ color: "white" }}>
                      <EventSeatIcon />
                    </ListItemIcon>
                    <ListItemText primary={"200"}></ListItemText>
                  </ListItems>
                  <ListItems>
                    <ListItemIcon sx={{ color: "white" }}>
                      <DownloadDoneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={"AC, Parking lot ..."}
                    ></ListItemText>
                  </ListItems>
                  <ListItems>
                    <ListItemIcon sx={{ color: "white" }}>
                      <CurrencyRupeeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"50000"}></ListItemText>
                    <button onClick={handleOpen}>Book Venue</button>
                  </ListItems>
                </Lists>
                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5220316268196!2d75.8919265!3d11.1489312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6502eed76c9ef%3A0xac780735033a2193!2s4VXR%2BGQR%20Kinfra%20Park%2C%20Kakkanchery%2C%20Chelambra%2C%20Kerala%20673636!5e0!3m2!1sen!2sin!4v1711550541927!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </MapContainer>
              </DetailsContainer>
            </GridItems>
          </Grids>
        </SubContainer>
      </MainContainer>
      <Modal open={open} onClose={handleClose}>
        <Box sx={sx.modalContainer}>
          <form onSubmit={handleSubmit}>
            <Box sx={sx.form}>
              <h2 style={{ color: "#0c1022" }}>Create New Event</h2>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                sx={sx.inputBox}
              />
              <FormControl fullWidth>
                <TextField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  sx={sx.inputBox}
                />
              </FormControl>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                sx={sx.inputBox}
              />
              <TextField
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={sx.inputBox}
              />
              <TextField
                label="Ticket Price"
                name="Ticketprice"
                value={formData.Ticketprice}
                onChange={handleChange}
                type="number"
                required
                sx={sx.inputBox}
              />
              <TextField
                label="Maximum Seats"
                name="maximumSeats"
                value={formData.maximumSeats}
                onChange={handleChange}
                type="number"
                sx={sx.inputBox}
              />
              <TextField
                required={true}
                sx={sx.inputBox}
                type="file"
                name="image"
                accept="image/jpeg, image/webp"
                onChange={handleImageUpload}
                showFileNamesInPreview={true}
                maxFileSize={10000000}
                onDrop={console.log}
                dropzoneText="Add an image here"
              />
              <Button
                sx={sx.submitButton}
                type="submit"
                variant="contained"
                // onClick={handleClose}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default VenueDetails;

const sx = {
  modalContainer: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "auto",
  },
  inputBox: {
    backgroundColor: "white",
    marginTop: "5%",
    borderRadius: "10px",
  },
  submitButton: {
    width: "100%",
    marginTop: "5%",
    boxShadow: "0px 11px 16.799999237060547px rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
    fontSize: { xs: 10, sm: 14, md: 14, lg: 14 },
    textTransform: "none",
    color: "#fff",
    fontFamily: "var(--font-dmsanslight)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "5%",
    background: "#BFBFBF",
    borderRadius: "10px",
  },
};
