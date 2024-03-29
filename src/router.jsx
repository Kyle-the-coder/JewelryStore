import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { landingRoute } from "./pages/LandingPage";
import { engagementRoute } from "./pages/EngagementPage";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { weddingRoute } from "./pages/WeddingPage";
import { jewelryRoute } from "./pages/JewelryPage";
import { designersRoute } from "./pages/DesignersPage";
import { serviceRoute } from "./pages/ServicePage";
import { storeFrontRoute } from "./pages/StoreInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/engagement", ...engagementRoute },
      { path: "/wedding", ...weddingRoute },
      { path: "/jewelry", ...jewelryRoute },
      { path: "/designers", ...designersRoute },
      { path: "/services", ...serviceRoute },
      { path: "/storefront", ...storeFrontRoute },
    ],
  },
]);
