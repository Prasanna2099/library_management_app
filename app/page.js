import Image from "next/image";
import BookForm from './components/BookForm';
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";

export default function Home() {
  return (
    <main>
      <div>
        <header className="header">
          <div className="header-content">
            <h1>Library Management System</h1>
            <p>Welcome to our library! Explore, Learn, Enjoy.</p>
          </div>
        </header>
        <div className="search-bar">
        <BookSearch />
        </div>
        <BookForm />
        <BookList />
      </div>
      <footer className="header mt-4">
          LIBRARY MANAGEMENT SYSTEM | 2024
      </footer>
    </main>
  );
}
