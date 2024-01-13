import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RecentTransactions = ({ transactions }) => {
  return (
    <Paper elevation={3} style={{ maxHeight: '300px', overflowY: 'auto' }}>
      <Box paddingX={2} paddingY={1}>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>
        {transactions.map((transaction) => (
          <div key={transaction.txId}>
            <Typography variant="subtitle1">{transaction.user} - ${transaction.cost}</Typography>
          </div>
        ))}
      </Box>
    </Paper>
  );
};

export default RecentTransactions;