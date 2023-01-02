import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 border border-dotted border-red-900 rounded-2xl p-4 mx-8 my-2">
      <h1 className="text-amber-900 text-4xl p-4 font-bold">Bookstore</h1>
      <div className="flex flex-row gap-4">
        <Link
          className="bg-yellow-700 text-zinc-50 px-2 rounded-md hover:bg-yellow-900"
          to="/all"
        >
          All books
        </Link>
        <Link
          className="bg-yellow-700 text-zinc-50 px-2 rounded-md hover:bg-yellow-900"
          to="/add"
        >
          Add a book
        </Link>
        <Link
          className="bg-yellow-700 text-zinc-50 px-2 rounded-md hover:bg-yellow-900"
          to="/Login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
