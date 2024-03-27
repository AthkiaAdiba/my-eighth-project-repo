// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Author from "../components/Author/Author";

const Authors = () => {
    // const [] = useState();
    const authors = useLoaderData();
    console.log(authors);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-24 mb-20 gap-6">
            {
                authors.map(author => <Author key={author.bookId} author={author}></Author>)
            }
        </div>
    );
};

export default Authors;