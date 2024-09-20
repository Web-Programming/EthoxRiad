import ScheduleContent from "@pages/Schedule/content";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Hewwo</div>} />
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
