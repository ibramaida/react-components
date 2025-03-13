import React from "react";
import { routes } from "./routes";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-dvh md:grid  md:grid-cols-[auto_1fr] bg-slate-900">
      <header className="flex gap-8 md:flex-col p-4 bg-teal-500">
        <h1 className="text-2xl font-semibold text-slate-800">
          React Components
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="text-slate-800 hover:text-slate-700"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="grid place-items-center">show case</div>
    </main>
  );
};

export default Layout;
