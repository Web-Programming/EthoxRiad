import Navbar from "@components/Layout/Navbar";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainSection from "@components/Layout/MainSection";
import DashboardPage from "@pages/Dashboard";
import PrismaOnlinePage from "@pages/PrismaOnline";
import ProofOfFillingPage from "@pages/ProofOfFilling";
import SchedulePage from "@pages/Schedule";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/prisma-online" element={<PrismaOnlinePage />} />
          <Route path="/proof-of-filling" element={<ProofOfFillingPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="bg-primary min-h-[100vh]">
      <header>
        <Navbar />
      </header>
      <main className="mt-10">
        <MainSection>
          <Outlet />
        </MainSection>
      </main>
      <Toaster />
    </div>
  );
}
