import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const wishGetStoredBooks = () => {
    const storedBooks = localStorage.getItem('wish');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return []
}

const wishSaveBooks = id => {
    const storedBooks = wishGetStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if (exist) {
        return toast.error('already exist')
    }
    else {
        storedBooks.push(id);
        localStorage.setItem('wish', JSON.stringify(storedBooks));
        toast.success('Successfully added')
    }

}

export { wishGetStoredBooks, wishSaveBooks }