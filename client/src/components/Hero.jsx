import { Box, Typography } from "@mui/material";
import heroImage from "../assets/hero.png";
import Styles from "../assets/Styles";

export const Hero = () => {
  return (
    <Box
      sx={{
        ...Styles.heroBox,
        backgroundImage: `url(${heroImage})`,
        // backgroundPosition: "center", 
        // backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
        position: "relative",
        textAlign: "center",
        height: "100vh", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", 

        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            ...Styles.asideTitleTypography,
            color: "white",
            fontSize: { xs: "2rem", md: "3rem" },
            
          }}
        >
          Simply Online Survey Software
        </Typography>
        <Typography
          variant="h4"
          sx={{
            ...Styles.asideTitleTypography,
            fontSize: { xs: "2rem", md: "3rem" }
            // position: "absolute",
            // top: "20%",
            // left: 0,
            // right: 0,
            // marginTop: "5%",
          }}
        >
          From Feedback to Strategy: Your Survey Solution
        </Typography>
      </Box>
    </Box>
  );
};
