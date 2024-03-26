import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../components/Utility/localStorage";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    // const books = useLoaderData();
    // const [readBooks, setReadBooks] = useState([]);
    const [tabIndex, setTabIndex] = useState(0)
    // console.log(readBooks)

    // useEffect(() => {
    //     const storedBooksIds = getStoredBooks();
    //     if (books.length > 0) {
    //         const readBook = books.filter(book => storedBooksIds.includes(book.bookId))
    //         // console.log(readBook)
    //         setReadBooks(readBook)
    //     }
    // }, [books])

    return (
        <div>
            {/* title */}
            <div className="bg-base-200 py-9 rounded-xl mt-10">
                <h2 className="font-bold text-3xl text-[#131313] text-center">Books</h2>
            </div>
            {/* dropdown */}
            <div className="text-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            {/* tab */}
            <div className="mt-10 mb-24">
                <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                    <Link to={``} onClick={() => setTabIndex(0)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>
                        <span className="text-lg text-[#131313cc]">Read Books</span>
                    </Link>
                    <Link to={`wishBookLists`} onClick={() => setTabIndex(1)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                        <span className="text-lg text-[#131313cc]">Wishlist Books</span>
                    </Link>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;