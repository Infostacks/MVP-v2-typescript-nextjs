import Head from "next/head";
import CompanySignUp from '../../components/CompanySignup'

const index = () => {
    return (
        <div>
            <Head>
                <title>Company - Profile Completion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <CompanySignUp/>
                </div>
            </main>
        </div>
    );
}

export default index;