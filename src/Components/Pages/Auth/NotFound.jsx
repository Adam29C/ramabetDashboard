// src/components/ErrorPage.jsx
import React from "react";

const ErrorPage = () => (
  <div>
    <h1>Unexpected Application Error!</h1>
    <p>404 Not Found</p>
    <p>You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.</p>
  </div>
);

export default ErrorPage;
