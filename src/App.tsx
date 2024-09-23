import Navbar from "@components/Layout/Navbar";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainSection from "@components/Layout/MainSection";
import ContentWrapper from "@components/Layout/ContentWrapper";
import DashboardPage from "@pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route
            path="/jadwal-perkuliahan"
            element={DummyContent("Jadwal Perkuliahan")}
          />
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
    </div>
  );
}

function DummyContent(title: string) {
  return (
    <ContentWrapper title={title}>
      <div className="bg-white p-4 px-8 w-full">
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
      </div>
    </ContentWrapper>
  );
}
