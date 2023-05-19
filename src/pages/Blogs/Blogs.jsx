import useTitle from "../../hooks/useTitle";


const Blogs = () => {

    useTitle('Blogs')

    return (
        <div>
            {/* <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
            </div> */}
            <h1 className='text-5xl text-center p-20 bg-indigo-100 bg-opacity-50 font-bold'>Blog</h1>
            <div className='w-9/12 mx-auto text-xl flex flex-col gap-4 blog-container mt-10'>
                <h2>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <h4><span className='font-bold'>Answer: </span>Tokens are commonly used in authentication and authorization. <br /> Access Token: Access token is used for allowing a client to authorize after successful authentication <br /> Refresh Token: Refresh token is generally used to renew access token</h4>
                <h2>Compare SQL and NoSQL databases</h2>
                <h4><span className='font-bold'>Answer: </span>SQL Database: SQL databases uses tables with rows and columns to store data. Data is stored in structured manner. Each table is connected with the other ones. It is also known as RDMS <br /> NoSQL Database: NoSQL databases doesn&apos;t need tables connection to store their data. It can store data in various ways including key-value-pairs</h4>
                <h2>What is express js? What is Nest JS?</h2>
                <h4><span className='font-bold'>Answer: </span>Express.js: Express is a minimal and flexible node.js web application. It can be used for building single, multi page and hybrid web applications. It provides a routing system, middleware support etc. <br /> Nest.js: Nest.js is a framework for building scalable and maintainable server side applications. It is built on top of the Express.js</h4>
                <h2>What is MongoDB aggregate and how does it work?</h2>
                <h4><span className='font-bold'>Answer: </span>Aggregation is a way of processing a large number of documents. It processes them in a collection and passes them through different pages. This stages can make up pipeline. These stages in pipeline can filter, sort etc. documents</h4>
            </div>
        </div>
    );
};

export default Blogs;