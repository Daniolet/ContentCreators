import Grid from "@mui/material/Grid";

import dcIcon from "../assets/DCIcon.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";

export default function Footer() {
  return (
    <Grid container display="flex" justifyContent="space-between" spacing={2}>
      <Grid item>
        <a href="https://t.me/contentcreators6" target="__blank">
          <img src={tgIcon} alt="" height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://discord.gg/CuVWJgbu" target="__blank">
          <img src={dcIcon} alt="" height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://twitter.com/MaxTheCreator6" target="__blank">
          <img src={twIcon} alt="" height={48} />
        </a>
      </Grid>
    </Grid>
  );
}
