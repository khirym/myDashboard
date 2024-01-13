import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { mockTransactions } from "../mockData";

const InfoCard = () => {
  const totalRevenue = mockTransactions.reduce((acc, transaction) => acc + parseFloat(transaction.cost), 0);

  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="subtitle1" component="h2">
            Total Revenue
          </Typography>
          <Typography variant="h5" component="div">
            ${totalRevenue.toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" component="h2" align="center">
            Recent Transactions
          </Typography>
          <List>
            {mockTransactions.slice(0, 5).map((transaction) => (
              <ListItem key={transaction.txId}>
                <ListItemText
                  primary={`User: ${transaction.user}`}
                  secondary={`Date: ${transaction.date} | Cost: $${transaction.cost}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InfoCard;