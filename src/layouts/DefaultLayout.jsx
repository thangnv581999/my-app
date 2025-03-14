import React from "react";

function DefaultLayout({ children }) {
  return (
    <div>
      <header>Đây là Header</header>
      <main>{children}</main>
      <footer>Đây là Footer</footer>
    </div>
  );
}

export default DefaultLayout;
