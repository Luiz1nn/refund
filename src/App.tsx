import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "~/layouts/main.layout";
import { HomePage } from "~/pages/home.page";
import { NewRefundPage } from "~/pages/new-refund.page";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route path="/new-refund" element={<NewRefundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
