import React from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Hook que hace que wouter use window.location.hash en lugar de la ruta normal
// Esto evita errores 404 en GitHub Pages
function useHashLocation() {
  const getHash = () => {
    const h = window.location.hash || "#/";
    return h.replace(/^#!?/, "") || "/";
  };

  const [path, setPath] = React.useState(getHash);

  React.useEffect(() => {
    const onHashChange = () => setPath(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (to: string) => {
    if (!to.startsWith("#")) {
      window.location.hash = to;
    } else {
      window.location.hash = to;
    }
  };

  return [path, navigate] as const;
}

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
