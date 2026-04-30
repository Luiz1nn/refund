import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "~/pages/home.page";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
