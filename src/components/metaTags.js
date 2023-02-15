import Head from 'next/head'

function MetaTags({tags}) {
    return (
        <div>
            <Head>
                <title>{tags.title}</title>
                <link rel="icon" href='/logo.png'></link>
            </Head>
        </div>
    )
}

export default MetaTags