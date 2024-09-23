import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProofOfFillingContent from "@pages/ProofOfFilling/content";
import ScheduleContent from "@pages/Schedule/content";
import PrismaOnlineContent from "@pages/PrismaOnline/content";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Hewwo</div>} />
          <Route path="/prisma-online" element={<PrismaOnlineContent />} />
          <Route path="/proof-of-filling" element={<ProofOfFillingContent />} />
          <Route path="/schedule" element={<ScheduleContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <header>{/* <Navbar /> */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
}
