import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";
import RoiLogo from "../../assets/roi.png";
import FeeLogo from "../../assets/fee.png";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  marginLeft: "5%",
  marginTop: "2%",
  border: "3px solid white",
  width: "37%",
  paddingRight: "0",
  [theme.breakpoints.down("md")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

export default function NutritionFacts() {
  return (
    <CardWrapper>
      <CardContent>
        <Box marginLeft={-2} marginRight={-2}>
          <Grid container alignItems="center" display="flex">
            <img src={RoiLogo} alt="" height={30}></img>
            <Typography variant="body7" width={"60%"}>
              Daily ROI:<br/>
            </Typography>
            <Typography variant="body7">11%</Typography>
          </Grid>
          <Grid container alignItems="center" display="flex">
            <img src={FeeLogo} alt="" height={30}></img>
            <Typography variant="body6" width={"80%"}>
              *DEP.FEE: 5% (5% FOR DEV./MAR.)<br/>
              *WITHD.FEE: 10% (4% FOR DEV./MAR.<br/>
              AND 6% FOR SMART CONTRACT)
            </Typography>
          </Grid>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
