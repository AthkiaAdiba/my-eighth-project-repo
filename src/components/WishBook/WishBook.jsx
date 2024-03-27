import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TfiBook } from "react-icons/tfi";

const WishBook = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="flex flex-col lg:flex-row ml-0 lg:ml-20 gap-8 mb-8 mt-6 border-2 p-6 rounded-xl">
                <img className="h-[260px] bg-base-200 p-5 rounded-xl" src={image} alt="" />
                <div className="space-y-5">
                    <h2 className="text-2xl font-bold text-[#131313]">{bookName}</h2>
                    <p className="font-medium text-base">By: {author}</p>
                    <div className="flex gap-4">
                        <p><span className="mr-3 text-base font-bold text-[#131313]">Tag</span> {
                            tags.map((tag, idx) => <span key={idx} className="text-[#23BE0A] text-base font-medium rounded-[30px] bg-[#23be0a0d] px-2 lg:px-2 py-1 lg:p-2 mr-3"># {tag}</span>)
                        }</p>
                        <p className="text-base flex items-center"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-2 lg:gap-6 text-base">
                        <p className="text-base flex items-center"><GoPeople className="text-2xl mr-2"></GoPeople> Publisher: {publisher}</p>
                        <p className="text-base flex items-center"><TfiBook className="text-2xl mr-2"></TfiBook> Page {totalPages}</p>
                    </div>
                    <div className="divider w-full"></div>
                    <div className=" flex flex-col lg:flex-row gap-5">
                        <p className="bg-[#328eff26] px-5 py-2 rounded-[30px] text-[#328EFF] text-base">Category: {category}</p>
                        <p className="px-5 py-2 text-base rounded-[30px] text-[#FFAC33] bg-[#ffac3326]">Rating: {rating}</p>
                        <p className="px-5 py-2 rounded-[30px] text-lg font-medium text-[#FFFFFF] bg-[#23BE0A]">View Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishBook;