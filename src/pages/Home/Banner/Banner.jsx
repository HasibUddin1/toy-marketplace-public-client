import banner from '../../../assets/images/banner-image-2.png'

const Banner = () => {
    return (
        <div className='flex bg-amber-100 justify-between px-28 py-20'>
            <div className='w-1/2'>
                <h1 className='text-center text-5xl font-bold mb-5'>Best <span className='text-amber-500'>Toy Cars</span></h1>
                <h4 className='text-3xl'>Welcome to our online toy car store, the ultimate destination for all your toy car enthusiasts! Our website is dedicated to providing an extensive collection of toy cars that will thrill children and adults alike. Whether you&apos;re a passionate collector, a parent searching for the perfect gift, or a car enthusiast looking to share your love for automobiles with your little ones, you&apos;ve come to the right place</h4>
                <div className='text-center mt-5'>
                    <button className='bg-amber-500 font-bold px-10 py-4 rounded-xl hover:bg-amber-700 ease-in-out duration-200'>Explore More</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-1/2 mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;