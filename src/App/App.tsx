import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Loading } from "../components/Loading/Loading";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { RouteConstants } from "../constants/RouteConstants";
import { SearchProvider } from "../context/SearchProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

// lazy load page components so the rest of the app doesn't wait while they load
const FavoritesPage = lazy(() => import("../pages/Favorites/FavoritesPage"));
const SearchPage = lazy(() => import("../pages/Search/SearchPage"));
function App() {
  return (
    <SearchProvider>
      <ThemeProvider theme={theme}>
        <PageLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path={RouteConstants.HOME}
                element={<Navigate to={RouteConstants.SEARCH} />}
              />
              <Route path={RouteConstants.SEARCH} element={<SearchPage />} />
              <Route
                path={RouteConstants.FAVORITES}
                element={<FavoritesPage />}
              />
            </Routes>
          </Suspense>
        </PageLayout>
      </ThemeProvider>
    </SearchProvider>
  );
}

export default App;
