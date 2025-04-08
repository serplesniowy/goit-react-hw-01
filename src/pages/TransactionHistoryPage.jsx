import React from "react";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import transactions from "../transaction.json";

const TransactionHistoryPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default TransactionHistoryPage;
