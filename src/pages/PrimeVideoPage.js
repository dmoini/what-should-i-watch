import { Button, Grid, Typography } from "@material-ui/core";
import { ToggleButton } from '@material-ui/lab';
import React, { useState } from "react";

export default function PrimeVideoPage() {
    const [selected, setSelected] = useState(false);
    return (
        <ToggleButton
  value="check"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
>
  Movie
</ToggleButton>
    );
}