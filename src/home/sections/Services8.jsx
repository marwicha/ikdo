import React from "react";
import { Grid, Box } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    paddingTop: "1rem !important",
    paddingBottom: "1rem !important",
    fontSize: 14,
    fontFamily: theme.typography.fontFamily
  },
  image: {
    maxWidth: "150px"
  },
  section: {
    background: "rgba(var(--primary),0.05)"
  },
}));


const Services8 = () => {

  const classes = useStyles();
  const serviceList = [
    {
      id:"1",
      title: "Coaching",
      imgSrc: "/assets/images/logos/coaching.png"
    },
    {
      id:"2",
      title: "Massages",
      imgSrc: "/assets/images/logos/ID12.png"
    },
    {
      id:"3",
      title: "Formations",
      imgSrc: "/assets/images/logos/ID123.png"
    },
  ];
  
const getImgSrc = (id,imgSrc,imageClass) => {
  if (id==="2")
  return <img src={imgSrc} className={ clsx(imageClass,"mt--6")} alt=""/>
  else if (id === "1")
  return <img src={imgSrc} className={ clsx(imageClass,"mt--6")} alt=""/>
  else
  return <img src={imgSrc} className={ imageClass} alt=""/>
}
  return (
    <section className={clsx("section", classes.section)} id="booking1">
    <div className="container">
    <Grid container spacing={6} justify="center">
    {serviceList.map((item, ind) => (
      <Grid key={ind} item sm={3} xs={12}>
        <div className="text-center max-w-160 mx-auto">
           {getImgSrc(item.id,item.imgSrc,classes.image)}
          <Box className={ classes.button } bgcolor="third"> 
          {item.title}
          </Box>
        </div>
      </Grid>
    ))}
  </Grid>
    </div>
  </section>

  );
};

export default Services8;
