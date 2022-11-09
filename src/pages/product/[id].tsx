import { useRouter } from 'next/router';
import React, { FC } from 'react';

const Product : FC  = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Product</h1>
        </div>
    );
}

export default Product;