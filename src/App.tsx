import { Suspense, useEffect, useState } from "react";

import { LinearProgress } from "@mui/material";

import Header from "./components/Header/Header";
import MainPage from "./pages/main/MainPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LinearProgress color="inherit" />;
  }
  return (
    <Suspense fallback={<LinearProgress color="inherit" />}>
      <Header />
      <MainPage />
    </Suspense>
  );
}

export default App;
