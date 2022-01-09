import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import LabelCard from "./LabelCard";

const Labels = () => {
  const [labelInfo, setLabelInfo] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/label/all");
    setLabelInfo(res.data);
  }, []);
  return (
    labelInfo !== null &&
    labelInfo.length > 0 && (
      <Grid container spacing={2} sx={{ m: 1 }}>
        {labelInfo.map((label) => (
          <Grid item xs={12} sm={3}>
            <LabelCard label={label} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Labels;
