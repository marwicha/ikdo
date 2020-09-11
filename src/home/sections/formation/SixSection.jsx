import React from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

}));

const SixSection = () => {

  const classes = useStyles();

  const imgList = [ 
    {
     link: "/assets/images/formations/ouie.png",
    },

    {
      link: "/assets/images/formations/vue.png",
    },

    {
      link: "/assets/images/formations/gout.png",
    },

    {
      link: "/assets/images/formations/odorat.png",
    },

    {
      link: "/assets/images/formations/toucher.png",
    }
  ]

  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} container justify="flex-start" alignContent="flex-start">
   

    <Grid sm={5} md={5} xs={12}>
     
    1
    <h1>CALIFORNIEN</h1>


    <h4>Méthode des 9 Sens  
    Manoeuvres de base dos - Aromathérapie:</h4>


<p>
Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos 
(mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.
</p> 

      
    </Grid>


    <Grid sm={5} md={5} xs={12}>
    
    1
    <h1>CALIFORNIEN</h1>


    <h4>Méthode des 9 Sens  
    Manoeuvres de base dos - Aromathérapie:</h4>


<p>
Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos 
(mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.
</p> 
    </Grid>


    </Grid>
  </div>
  </div>
 

  );
};

export default SixSection;