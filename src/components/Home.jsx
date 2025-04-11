import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const handleOpen = (selection) => {
    setOpen(true);
    setSelected(selection);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: 550,
        height: "82vh",
        overflowY: "scroll",
        scrollbarWidth: "thin",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <>
            <ImageListItem
              key={item.img}
              onClick={() => handleOpen(item.author)}
              style={{ cursor: "pointer" }}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          </>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selected}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, for {selected} est non commodo luctus, nisi erat
            porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

const itemData = [
  // {
  //   img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
  //   title: "Bed",
  //   author: "swabdesign",
  // },
  {
    img: "https://publicdomainvectors.org/tn_img/notabee.webp",
    title: "Bed",
    author: "swabdesign",
  },
  {
    // img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    img: "https://publicdomainvectors.org/tn_img/14thWarrior-Cartoon-Elephant.webp",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    // img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    img: "https://publicdomainvectors.org/tn_img/japanesedoctor.webp",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    //  img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    img: "https://publicdomainvectors.org/tn_img/Cartoonhead7.webp",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    //  img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    img: "https://publicdomainvectors.org/tn_img/Devil_001_Head_Cartoon.webp",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    //  img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    img: "https://publicdomainvectors.org/tn_img/painted_face.webp",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    //  img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    img: "https://publicdomainvectors.org/tn_img/FunDraw_dot_com_Cartoon_Cat_In_Rainbow_Socks.webp",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    // img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    img: "https://publicdomainvectors.org/tn_img/wsnaccad_gloria_the_architect.webp",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    // img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    img: "https://publicdomainvectors.org/tn_img/googley-eye-birds.webp",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    //  img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    img: "https://publicdomainvectors.org/tn_img/010b.webp",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    //  img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    img: "https://publicdomainvectors.org/tn_img/1274533168.webp",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    //  img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    img: "https://publicdomainvectors.org/tn_img/Cartoon_Butterfly_01.webp",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
