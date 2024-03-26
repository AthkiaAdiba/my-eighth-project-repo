import line from '../../assets/Line 1.png'
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 border-2 p-2 lg:p-6">
                <figure className="bg-base-200 h-[250px] rounded-xl">
                    <img src={image} className="rounded-xl h-[200px] bg-base-200" />
                </figure>
                <h3 className="mt-8">
                    {
                        tags.map((tag, idx) => <span key={idx} className="text-[#23BE0A] text-base font-medium rounded-[30px] bg-[#23be0a0d] px-2 lg:px-2 py-1 lg:p-2 mr-3"># {tag}</span>)
                    }
                </h3>
                <div>
                    <h2 className="card-title text-2xl font-bold text-[#131313] mt-4">{bookName}</h2>
                    <p className="mt-4 font-medium text-base text-[#131313cc]">By : {author}</p>
                    <img className='mt-5 w-full' src={line} alt="" />
                    <div className="card-actions mt-5 flex justify-between items-center font-medium text-base text-[#131313cc]">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div>
                            <p className='flex items-center justify-between gap-2'>{rating} <FaRegStar></FaRegStar></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;