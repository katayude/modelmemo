import React from 'react';
import Topmenue from '@/app/components/Topmenue';
import Sidemenue from '@/app/components/Sidemenue';

const Page: React.FC = () => {
    return (
        //TopmenueをSidemenueに変えたらSidemenueもみれます。
        <Topmenue />
    );
};

export default Page;