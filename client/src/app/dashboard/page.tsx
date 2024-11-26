"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="custom-grid-rows grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="h-6 w-6 text-blue-600" />}
        dateRange="11 - 17 November 2024"
        details={[
          {
            title: "Customer Growth",
            amount: "170.00",
            changePercentage: 131,
            IconComponent: TrendingUp
          },
          {
            title: "Expense",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown
          }
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="h-6 w-6 text-blue-600" />}
        dateRange="11 - 17 November 2024"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            IconComponent: TrendingUp
          },
          {
            title: "Pending Orders",
            amount: "147.00",
            changePercentage: -56,
            IconComponent: TrendingDown
          }
        ]}
      />
      <StatCard
        title="Sales & Discounts"
        primaryIcon={<Tag className="h-6 w-6 text-blue-600" />}
        dateRange="11 - 17 November 2024"
        details={[
          {
            title: "Sales",
            amount: "1200.00",
            changePercentage: 20,
            IconComponent: TrendingUp
          },
          {
            title: "Discounts",
            amount: "200.00",
            changePercentage: -16,
            IconComponent: TrendingDown
          }
        ]}
      />
    </div>
  );
};

export default Dashboard;
