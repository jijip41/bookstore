import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <div>
        <Link to="/all">All books</Link>
        <Link to="/add">Add a book</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}
