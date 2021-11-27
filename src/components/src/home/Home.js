import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Hidden,
} from "@mui/material";
import Arrowimg from "../../../assets/images/arrow.png";
import Ellipse from "../../../assets/images/Ellipse 1.png";
import { useStyles } from "./style";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import BookIcon from "@mui/icons-material/Book";

const Data = [
  { heading: "Ticker", heading2: "Xcad" },
  { heading: "Blockchain Network", heading2: "Zitlliqa" },
  { heading: "Token Supply", heading2: "500,000,000" },
  { heading: "Project Valuation", heading2: "$ 25,000,000" },
  { heading: "Initial Market Capitalization", heading2: "$ 2,300,000" },
  { heading: "Total Raise (All Rounds)", heading2: "$ 12,570,000" },
  { heading: "Platform Raise (Round 1)", heading2: "$ 1,400,000" },
  {
    heading: "Platform Raise (Round 2)",
    heading2: "$ 1,400,000 + $ 50,000 Community Round",
  },
  { heading: "Personal Alocation (Round 1)", heading2: "$ 500,000 " },
  { heading: "Personal Alocation (Round 2)", heading2: "$ 230,000 " },
];

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <>
      <Box py={10} className="bgimg">
        <Container>
          <Hidden smDown>
            <Typography
              variant="h2"
              color="secondary"
              component="div"
              gutterBottom
            >
              Home <img src={Arrowimg} className={classes.imgsetting} />{" "}
              <span className={classes.ksi}> KSI</span>
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography
              sx={{ fontSize: "17px", fontFamily: "GeneralSans-Medium" }}
              textAlign="center"
              color="secondary"
              component="div"
              gutterBottom
            >
              Fan Token Offering
            </Typography>
          </Hidden>
          <Box
            my={6}
            bgcolor="#262626"
            py={2}
            pl={3}
            pr={3}
            borderRadius="10px"
          >
            <Hidden smDown>
              <Grid container>
                <Grid item lg={2} md={2} sm={2}>
                  <img
                    src={Ellipse}
                    className={classes.Ellipse}
                    height="90px"
                    width="90px"
                  />
                </Grid>
                <Grid item lg={3} md={2} sm={1}>
                  <Typography
                    variant="h2"
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    <span className={classes.ksi}> KSI</span>
                  </Typography>
                </Grid>
                <Grid item lg={2} md={3} sm={3}>
                  <Typography
                    variant="h4"
                    color="primary"
                    component="div"
                    gutterBottom
                  >
                    Timeframe
                  </Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={3}>
                  <Typography
                    variant="h4"
                    color="primary"
                    component="div"
                    gutterBottom
                  >
                    Volume
                  </Typography>
                  <Typography
                    variant="h3"
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    $500,000
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={3}>
                  <Box py={3}>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{
                        background: "#181818",
                        color: "#FFFFFF",
                        textTransform: "capitalize",
                        fontSize: "16px",
                        lineHeight: "22px",
                        borderRadius: "25px",
                        padding: "12px 38px",
                      }}
                      className={classes.participate}
                    >
                      Participate{" "}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid container>
                <Grid item xs={4}>
                  <img
                    src={Ellipse}
                    className={classes.Ellipse}
                    height="90px"
                    width="90px"
                  />
                  <Typography
                    variant="h2"
                    textAlign="center"
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    <span className={classes.ksi}> KSI</span>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="h2"
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    <span className={classes.ksi}> Social</span>
                  </Typography>

                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <TelegramIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Telegram
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TwitterIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Twitter
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <RedditIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Reddit
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <YouTubeIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Youtube
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <LanguageIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Website
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <BookIcon color="primary" fontSize="small" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Blog
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Box my={3}>
                <Divider sx={{ border: "1px solid #4D4D4D !important " }} />
              </Box>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    color="primary"
                    component="div"
                    gutterBottom
                  >
                    Timeframe
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    color="primary"
                    component="div"
                    gutterBottom
                  >
                    Volume
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "GeneralSans-Semibold",
                    }}
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    $200,000
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{
                      background: "#181818",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontSize: "8px",
                      lineHeight: "22px",
                      borderRadius: "20px",
                      width: "80px",
                      height: "20px",
                    }}
                    className={classes.participate}
                  >
                    Participate{" "}
                  </Button>
                </Grid>
              </Grid>
            </Hidden>
          </Box>

          <Box my={8} className={classes.descriptionptext}>
            <Grid container spacing={3}>
              <Hidden smDown>
                <Grid item lg={5} md={6} sm={12}>
                  <Typography
                    variant="h1"
                    color="secondary"
                    component="div"
                    gutterBottom
                  >
                    Social
                  </Typography>
                  <Grid container>
                    <Grid item lg={1} md={1} sm={1}>
                      <TelegramIcon color="primary" sx={{ fontSize: "30px" }} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Telegram
                      </Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}>
                      <TwitterIcon color="primary" sx={{ fontSize: "30px" }} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Twitter
                      </Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}>
                      <RedditIcon color="primary" sx={{ fontSize: "30px" }} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                      >
                        Reddit
                      </Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}>
                      <YouTubeIcon
                        color="primary"
                        sx={{ fontSize: "30px", marginTop: "15px" }}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                        sx={{ marginTop: "15px" }}
                      >
                        Youtube
                      </Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}>
                      <LanguageIcon
                        color="primary"
                        sx={{ fontSize: "30px", marginTop: "15px" }}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                        sx={{ marginTop: "15px" }}
                      >
                        Website
                      </Typography>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}>
                      <BookIcon
                        color="primary"
                        sx={{ fontSize: "30px", marginTop: "15px" }}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                        sx={{ marginTop: "15px" }}
                      >
                        Blog
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box my={3} className={classes.descriptionptext}>
                    <Typography
                      variant="h3"
                      color="primary"
                      component="div"
                      gutterBottom
                      sx={{ fontFamily: "GeneralSans-Medium" }}
                    >
                      Description
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      component="div"
                      gutterBottom
                    >
                      Better known as KSI, is a British YouTuber, rapper and
                      singer. In 2019, he was ranked second by The Sunday Times
                      in its list of the top 100 UK influencers.
                    </Typography>
                  </Box>
                </Grid>
              </Hidden>
              <Grid item lg={7} md={6} sm={12} xs={12}>
                <Typography
                  variant="h1"
                  color="secondary"
                  component="div"
                  gutterBottom
                >
                  Metrics
                </Typography>
                {Data.map((data, index) => {
                  return (
                    <>
                      <Box my={3}>
                        <Grid container spacing={2}>
                          <Grid item lg={5} md={5} sm={5} xs={5}>
                            <Typography
                              variant="h5"
                              color="primary"
                              component="div"
                              gutterBottom
                            >
                              {data.heading}
                            </Typography>
                          </Grid>
                          <Grid item lg={7} md={7} sm={7} xs={7}>
                            <Typography
                              variant="h5"
                              color="secondary"
                              component="div"
                              gutterBottom
                              sx={{ fontFamily: "GeneralSans-Medium" }}
                            >
                              {data.heading2}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider
                          sx={{ border: " 1px solid #272727 !important " }}
                        />
                      </Box>
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
