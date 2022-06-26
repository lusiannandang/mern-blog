import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b4 border-green-700 text-center fixed top-0 bg-green-700 font-bold text-lg text-white w-full">
        <ul>
            <li className="inline-block pt-4 pb-4">
                <Link to="/" className="pl-6 pr-8">Home</Link>
            </li>
            <li className="inline-block pt-4 pb-4">
                <Link to="/about" className="pl-6 pr-8">About</Link>
            </li>
            <li className="inline-block pt-4 pb-4">
                <Link to="/article-list" className="pl-6 pr-8">Article</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar