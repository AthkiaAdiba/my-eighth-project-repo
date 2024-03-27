import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBooks } from './localStorage';

const wishGetStoredBooks = () => {
    const storedBooks = localStorage.getItem('wish');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return []
}

const wishSaveBooks = id => {
    // const storedBooks = wishGetStoredBooks();
    const storedReadBooks = getStoredBooks();
    const exist = storedReadBooks.find(bookId => bookId === id);
    if (exist) {
        return toast.error('You have Already read this book!')
    }
    else {
        storedReadBooks.push(id);
        localStorage.setItem('wish', JSON.stringify(storedReadBooks));
        toast.success('Books Added to Wish List')
    }

}

export { wishGetStoredBooks, wishSaveBooks }