import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/pages/Dashboard";
import MonthlyDashboard from "@/components/pages/MonthlyDashboard";
import DailyDashboard from "@/components/pages/DailyDashboard";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/monthly",
      name: "MonthlyDashboard",
      component: MonthlyDashboard
    },
    {
      path: "/daily",
      name: "DailyDashboard",
      component: DailyDashboard
    }
  ]
});
