import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authProvider";

export default function App() {
  return (
    <div>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <BrowserRouter>
            <Toaster position="top-right" />
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
