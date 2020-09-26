import React from "react"; 
import { Grid, Typography, Divider, CardContent, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import clsx from "clsx";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    fontSize: 16,
    fontFamily: theme.typography.fontFamily,
    background: `${palette.second} !important`,
    color: "white",
    width: "200px",
    height: "60px",
    borderRadius: "100px"
  },

  center: {
   display: "flex",
   flexWrap: "wrap",
   justifyContent: "center",
   alignItems: "center",
   fontSize: "14px"
  },

  card: {
    maxWidth: "500px",
    cursor: "pointer"
  },

  content: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
  },

  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },

  avatar: {
    display: "inline-block",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },

  textContainer: {
    display: "flex",
    width: "100%",
    marginBottom: "10px",
    position: "relative"
  },

  titleText: {
  position: "inline-block",
  width: "100%",
  padding: "10px",
  outline: "none"
  }
}));

const Massages = () => {
  const classes = useStyles();

  const formationsList = [
    {
      title: "Massage sur chaise assise",
      imgUrl: "/assets/images/logos/e.png",
      text: "Devenez praticien en massage sur chaise assise Amma",
      buttonTitle: "En savoir plus"

    },
    {
      title: "Massage des 9 sens",
      imgUrl: "/assets/images/logos/a.png",
      text: ".",
      buttonTitle: "En savoir plus"
    },

    {
      title: "Meditation pleine consciense",
      imgUrl: "/assets/images/logos/z.png",
      text: "Différents type de massages adapté au besoin de la  personne massée et des consigne sanitaire.",
      buttonTitle: "En savoir plus"
    },
  ];

  return (
    <section className="section">
    <div className="container text-center">
   

    <div className="container-formations">

    <h1 className="font-bold text-32 text-fourth pt-7">
    IKDO
  </h1>
  <p className="mx-auto text-18 pb-7">
    Formations
  </p>
  

    <Grid container spacing={0} justify="center" alignItems="center">
    {formationsList.map((item) => (

    <Grid sm={3} xs={12}>
    <div className={classes.card}>

    <img
     src={item.imgUrl}
     className="h-200 w-200"
     alt=""
    />

    <CardContent className={classes.content}>
     <div className={classes.textContainer}>
       
     <h5 className={classes.titleText}>
      {item.title}
      </h5>
     </div>
      <div>
      <Typography
        variant={"caption"}
      >
     {item.text}

      </Typography>
      </div>
      <Divider className={classes.divider} light />
      <div className={classes.center}>

      <Button  className={clsx(
        "p-4",
        classes.button

      )} size="large"> 

      <NavLink to="/Formations"> 
        En savoir plus 
      </NavLink>

      </Button>

      </div>
    </CardContent>
  </div>
</Grid>
  ))}
  </Grid>
  </div>
  </div>
  
    </section>
  );
};

export default Massages;
