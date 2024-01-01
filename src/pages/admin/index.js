/* eslint-disable @next/next/no-sync-scripts */
import { Grid } from "@mui/material";
import BlogCard from "../../../trc/components/dashboard/BlogCard";
import SalesOverview from "../../../trc/components/dashboard/SalesOverview";
import DailyActivity from "../../../trc/components/dashboard/DailyActivity";
import ProductPerfomance from "../../../trc/components/dashboard/ProductPerfomance";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Card from "../admin/Card";
export default function Index() {
  const router = useRouter();
const getuser=async(token)=>{
    const data ={token:token};
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getadmin`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await pr.json();
   if(res.data==null){
      router.push('/admin/adminlogin');
   }
}
useEffect(()=>{
  try{
    let user = JSON.parse(localStorage.getItem('innovateUadmin')).token;
    getuser(user);
  }
  catch(err){
    router.push("/admin/adminlogin")
  }

},[])
  return (
    <ThemeProvider theme={theme}>
       <Head>
      <title>Admin Panel - Ps App</title>
      <meta name="description" content="Effortlessly manage reservations and streamline culinary services with our Hotel Booking and Food Delivery Admin Panel. Take control of bookings, track orders, and ensure seamless operations for your hotel and food delivery services. Simplify your administrative tasks and optimize your hospitality and dining experiences with our comprehensive admin panel."/>
      <meta name="keywords" content="hotel booking, food delivery, accommodation, online reservations, gourmet dining, seamless service, delightful stay, convenient hospitality, doorstep delivery, culinary experience, vacation getaway, top-rated hotel, comfortable accommodations, exquisite cuisine, memorable retreat" />
      <script src="https://unpkg.com/@zegocloud/zego-uikit-prebuilt/zego-uikit-prebuilt.js"></script>
     </Head>
       <style jsx global>{`
        .footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
      `}</style>
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <Card/>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
    
  );
}

