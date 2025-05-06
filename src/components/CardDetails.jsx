import React, { useEffect, useState } from 'react';
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
            <NewCardDetails details = {details}></NewCardDetails>
        </div>
    );
};

export default CardDetails;