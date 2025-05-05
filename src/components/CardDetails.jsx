import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewCardDetails from './NewCardDetails';

const CardDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [details , setDetails] = useState({});

    // console.log(data , id , details);

    useEffect(() => {
        const cardDetails = data.find(singleData => singleData.id == id);
        setDetails(cardDetails);
    } , [data , id]);

    return (
        <div>
            <Suspense fallback ={<h1>LOADING.........</h1>}>
            <NewCardDetails details = {details}></NewCardDetails>
            </Suspense>
        </div>
    );
};

export default CardDetails;