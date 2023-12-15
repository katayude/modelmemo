import React from 'react';
import Header from '@/app/components/Header';
import HeroImage from '@/app/components/HeroImage';
import Member from '@/app/components/Member';
import Product from '@/app/components/Product';

const Page: React.FC = () => {
    return (
        <div>
            <Header title="this is header" />
            <HeroImage />
            <Product />
            <Member />
        </div>
    );
};

export default Page;
