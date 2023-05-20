

const AboutUs = () => {
    return (
        <div className="w-9/12 mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center mb-10">About <span className="text-amber-500">Us</span></h1>
            <div className="md:flex gap-10 items-center justify-between px-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-5">Welcome to <span className="text-amber-500">Toy Cars</span></h2>
                    <p className="text-xl mb-5">Your ultimate destination for all things toy cars! Explore our wide range of high-quality toy cars that will ignite your child&apos;s imagination and provide hours of thrilling playtime. From sleek sports cars to rugged monster trucks and futuristic transforming vehicles, we have the perfect toy car to suit every little racer&apos;s preference</p>
                    <ul className="list-disc list-inside font-semibold">
                        <li>Customer satisfaction is our main priority</li>
                        <li>We provide best quality toys</li>
                        <li>You can find quality toys here</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mt-5">
                    <img className="h-[500px] w-[500px]" src="https://i.ibb.co/pRKDmq7/image-for-extra-last-section.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;