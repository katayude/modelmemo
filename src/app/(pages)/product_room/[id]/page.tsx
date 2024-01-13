import React from 'react';
import Sidemenue from '@/app/components/Sidemenue';
import Mainmenue2 from '@/app/components/Mainmenue2';
import { useRouter } from 'next/router';


type PageProps = {
    params: {
        id: number;
    };
};

const Page: React.FC<PageProps> = ({ params }) => {

    return (
        <div>
            <div style={pageStyle}>
                <Sidemenue />
                <div style={mainMenuStyle}>
                    <Mainmenue2
                        genbaid={Number(params.id)}
                    />
                </div>
            </div>
        </div>
    );
};

const pageStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    background: '#333',
    color: 'white',
    textAlign: 'center' as 'center',

};
const mainMenuStyle = {
    width: '80%'
};

export default Page;
