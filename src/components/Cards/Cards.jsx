import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed || !recovered || !deaths || !lastUpdate) {
    return "Loading...";
  }

  const statsData = [
    {
      styling: styles.infected,
      name: "Infected",
      value: confirmed.value,
      description: "Number of active cases of Covid-19",
    },
    {
      styling: styles.recovered,
      name: "Recovered",
      value: recovered.value,
      description: "Number of recoveries from Covid-19",
    },
    {
      styling: styles.deaths,
      name: "Deaths",
      value: deaths.value,
      description: "Number of deaths caused by Covid-19",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {statsData.map((stat, index) => (
          <Grid
            key={index}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, stat.styling)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {stat.name}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{stat.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
