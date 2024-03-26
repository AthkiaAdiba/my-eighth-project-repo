import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('book');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return []
}

const saveBooks = id => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if (exist) {
        return toast.error('already exist')
    }
    else {
        storedBooks.push(id);
        localStorage.setItem('book', JSON.stringify(storedBooks));
        toast.success('Successfully added')
    }

}

export { getStoredBooks, saveBooks }