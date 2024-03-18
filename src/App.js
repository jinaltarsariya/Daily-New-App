import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(20);

  const pageSize = 20;
  const country = "in";
  const handleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#0B2447";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };
  return (
    <>
      <BrowserRouter>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Navbar mode={mode} handleMode={handleMode} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                mode={mode}
                country={country}
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
