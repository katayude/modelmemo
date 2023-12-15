import type { NextPage } from 'next';
import CustomHeader from '@/app/components/CustomHeader';
import Header from '@/app/components/Header';

const Home: NextPage = () => {
    return (
        <>
            <div>
                <h1>Tutorial</h1>
                <p>Welcome to the tutorial page!</p>
            </div>

            <div>
                <CustomHeader title="Welcom to My App">
                    <p>This is a description under the header.</p>
                </CustomHeader>
            </div>

            <Header title="this is header" />
        </>
    );
};

export default Home;