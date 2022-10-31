import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Y() {
    const [dataResponse, setDataResponse] = useState([]);
    
    useEffect(() => {
        async function getPageData() {
            const apiURLEndpoint =  `http://localhost:3000/api/db2`;
            const response = await fetch(apiURLEndpoint);
            const res = await response.json();
            setDataResponse(res.bookwarmdb);
        }
        getPageData();
    }, []);
    return(
        <div>{
            dataResponse.map((bookwarmdb) => {
            return (
            <div key={bookwarmdb.book_id}>
                <div>{bookwarmdb.title}</div>
                <div>
                <img src={bookwarmdb.cover_source} alt="" />
                </div>
            </div>
            );
        })}
        </div>
    );
}