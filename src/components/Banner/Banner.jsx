import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mt-14 mb-24'>
            <div className="h-[680px] lg:h-[600px] bg-base-200 pt-0 lg:pt-16 rounded-3xl">
                <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
                    <img src={banner} />
                    <div className='ml-5 lg:ml-20'>
                        <h1 className="text-5xl font-bold text-[#131313] mb-8 lg:mb-12">Books to freshen <br /> up your bookshelf</h1>
                        <Link to='/listedBooks'><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;