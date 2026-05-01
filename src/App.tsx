import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { MainLayout } from "~/layouts/main.layout";
import { ConfirmationPage } from "~/pages/confirmation.page";
import { HomePage } from "~/pages/home.page";
import { NewRefundPage } from "~/pages/new-refund.page";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster richColors />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route element={<HomePage />} path="/" />
              <Route path="/new-refund" element={<NewRefundPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
