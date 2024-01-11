import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BarChart } from '@mui/icons-material'

const InfoCard = () => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
        <BarChart />
        </Box>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fsale-icon%2F&psig=AOvVaw0-L8zM-aBpMkegkbOdeaGG&ust=1705031484353000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCOi64rK31IMDFQAAAAAdAAAAABAQ"
          alt=""
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Sales Dashboard
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InfoCard;
