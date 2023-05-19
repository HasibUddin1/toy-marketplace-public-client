import useTitle from "../../hooks/useTitle";


const Blogs = () => {

    useTitle('Blogs')

    return (
        <div>
            <h1 className="text-4xl text-center">This is Blogs component</h1>
        </div>
    );
};

export default Blogs;