import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="site-logo">
            Learn Japanese Grammar
          </Link>
          <nav className="site-nav">
            <Link to="/">Lessons</Link>
          </nav>
        </div>
      </header>
      <main className="site-main">{children}</main>
    </>
  );
}
