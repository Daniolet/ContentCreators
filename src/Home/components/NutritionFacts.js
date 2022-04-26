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
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

const nutritionFacts = [
  {
    label: "Daily ROI:",
    value: "11%",
    logo: RoiLogo,
  },
  {
    label: "DEV/MARKETING FEE 4%",
    value: "= 4%",
    logo: FeeLogo,
  },
];

export default function NutritionFacts() {
  return (
    <CardWrapper>
      <CardContent>
        <Box marginLeft={-2} marginRight={-2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} alignItems="center">
              <img src={f.logo} alt="" height={30}></img>
              <Typography variant="body7">
                {f.label}
              </Typography>
              <Typography variant="body7" marginLeft="10%">{f.value}</Typography>
            </Grid>
          ))}
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
