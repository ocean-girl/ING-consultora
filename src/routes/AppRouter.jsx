import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Component }) => (
          <Route key={id} path={path} Component={<Component />} />
        ))}
      </Route>
      <Route path="*" element={<h1>No existe</h1>} />
    </Routes>
  );
};

export default AppRouter;
