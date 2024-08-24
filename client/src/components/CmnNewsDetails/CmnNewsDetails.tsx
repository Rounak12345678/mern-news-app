import React from "react";
import { CmnNewsDetailsStyled } from "styles/StyledComponents/CmnNewsDetailsStyled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import assest from "json/assest";
interface cardProp{
  image1: any;
  image2:any;
}
const CmnNewsDetails = ({image1,image2}:cardProp) => {
  return (
    <CmnNewsDetailsStyled>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        alignItems="center"
      >
        <Grid item xs={12} md={6} className="newsPara">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            sodales orci. Etiam turpis ante, pellentesque in velit in, consequat
            ullamcorper augue. Ut non mattis ipsum. Cras tellus est, tincidunt
            et dolor eu, luctus sagittis dui. Nunc ornare eros diam, at gravida
            neque viverra eu. Praesent nisi purus, finibus a urna in, ultricies
            faucibus augue. Vivamus fringilla ipsum cursus, egestas arcu ut,
            vehicula eros. Donec ac augue nisl. Aenean dapibus ultrices laoreet.
            Sed sagittis aliquet lectus.
            <br />
            <br />
            Nam interdum quis tellus at feugiat. Mauris et enim at elit
            ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
            euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum et
            pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
            ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
            sapien volutpat, ut convallis tortor elementum ulla facilisi. Proin
            id euismod felis.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="newsImg">
          <figure className="newsDetilsImg">
            <img src={image1} alt="" />
          </figure>
        </Grid>
        <Grid item xs={12} md={6} className="">
          <figure className="newsDetilsImg">
            <img src={image2} alt="" />
          </figure>
        </Grid>
        <Grid item xs={12} md={6} className="newsPara">
          <Typography variant="body1">
            Nam interdum quis tellus at feugiat. Mauris et enim at elit
            ullamcorper vehicula aliquet vitae metus. Nulla facilisi. Proin id
            euismod felis. Quisque vel dapibus dui. Nam erat libero, interdum et
            pellentesque vitae, tincidunt quis ligula. Maecenas rutrum enim
            ante, id porttitor urna volutpat et. Vivamus fermentum nibh nec
            sapien volutpat, ut convallis tortor elementum ulla facilisi. Proin
            id euismod felis.
            <br />
            <br />
            Sed id risus quam. Duis gravida vulputate ante, ut molestie purus
            luctus nec. In tincidunt pharetra nibh, eu sollicitudin nisl
            vehicula vel. Nullam rutrum nunc arcu, ac blandit dolor malesuada
            vitae. Sed dapibus nisi sapien, at venenatis sapien suscipit
            bibendum. Nam fringilla gravida sapien, ut tincidunt lorem
            consectetur quis. Nunc facilisis, tellus a porta consequat, arcu dui
            porttitor mauris, sed ultricies diam ex sit amet odio. Aliquam
            pellentesque, sapien eget egestas pulvinar, quam est aliquet mauris,
            pulvinar maximus odio neque sed elit.
          </Typography>
        </Grid>
      </Grid>
    </CmnNewsDetailsStyled>
  );
};

export default CmnNewsDetails;
