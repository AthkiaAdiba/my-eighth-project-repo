
import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../Utility/localStorage";
import { wishSaveBooks } from "../Utility/wishLocalStorage";


const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    // console.log(book)

    const handleAddReadBooks = () => {
        saveBooks(idInt)
    }

    const handleAddWishBooks = () => {
        wishSaveBooks(idInt)
    }
    return (
        <div>
            <div className="card mt-20 mb-20 lg:card-side">
                <figure className="bg-base-200 p-2 lg:p-14 rounded-xl">
                    <img className="h-[340px] lg:h-[550px] w-[3000px]" src={image} alt="Album" />
                </figure>
                <div className="ml-2 lg:ml-8">
                    <h2 className="card-title mt-10 lg:mt-0 text-3xl lg:text-[40px] font-bold text-[#131313]">{bookName}</h2>
                    <p className="mt-5 font-medium text-xl text-[#131313cc]">By : {author}</p>
                    <div className="divider"></div>
                    <p className="font-medium text-xl text-[#131313cc]">{category}</p>
                    <div className="divider"></div>
                    <p><span className="text-base font-bold text-[#131313]">Review:</span> {review}</p>
                    <p className="mt-14"><span className="mr-3 text-base font-bold text-[#131313]">Tag</span> {
                        tags.map((tag, idx) => <span key={idx} className="text-[#23BE0A] text-base font-medium rounded-[30px] bg-[#23be0a0d] px-2 lg:px-2 py-1 lg:p-2 mr-3"># {tag}</span>)
                    }</p>
                    <div className="divider"></div>
                    <div className="space-y-3">
                        <p><span className="text-base">Number of Pages:</span><span className="ml-6 text-base font-bold text-[#131313]">{totalPages}</span></p>
                        <p><span className="text-base">Publisher:</span><span className="ml-20 lg:ml-20 text-base font-bold text-[#131313]">{publisher}</span></p>
                        <p><span className="text-base">Year of Publishing:</span><span className="ml-6 text-base font-bold text-[#131313]">{yearOfPublishing}</span></p>
                        <p><span className="text-base">Rating:</span><span className="ml-28 text-base font-bold text-[#131313]">{rating}</span></p>
                    </div>
                    <div className="card-actions mt-8">
                        <button onClick={handleAddReadBooks} className="text-lg font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6">Read</button>
                        <button onClick={handleAddWishBooks} className="btn bg-[#59C6D2] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;