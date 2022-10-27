import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function X() {
    const [dataResponse, setDataResponse] = useState([]);
    
    useEffect(() => {
        async function getPageData() {
            const apiURLEndpoint =  `http://localhost:3000/api/db`;
            const response = await fetch(apiURLEndpoint);
            const res = await response.json();
            console.log(res.exampledb);
            setDataResponse(res.exampledb);
        }
        getPageData();
    }, []);
    return(
        <div>
            {dataResponse.map((exampledb) => {
            return (
            <div key={exampledb.id}>
                <div>{exampledb.uoh}</div>
                <div>
                (// eslint-disable-next-line @next/next/no-img-element)
                <img src={exampledb.uoh} alt="" />
                </div>
            </div>
            );
        })}
        </div>
    );
}