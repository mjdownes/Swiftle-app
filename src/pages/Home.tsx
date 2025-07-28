import Layout from '../layouts/MobileLayout.tsx'

function Home() {
    return (
        <Layout allowBack={false} className="">
            <h1 className='font-[quicksand] font-bold'> Quicksand </h1>
            <h1 className='font-pistilli '> SWIFTLE </h1>
        </Layout>
    )
}

export default Home
