import React from 'react';
import Sidemenue from '@/app/components/Sidemenue';
import Mainmenue from '@/app/components/Mainmenue';

const Page: React.FC = () => {
    return (
        <div>
            <Sidemenue />
            <Mainmenue />
        </div>
    );
};

export default Page;
