import banner from '../../../assets/images/banner-image-2.png'

const Banner = () => {
    return (
        <div className='md:flex bg-amber-100 justify-between px-10 md:px-28 py-20'>
            <div data-aos="fade-up" className='md:w-1/2 mb-5'>
                <h1 className='text-center text-5xl font-bold mb-10'>Best <span className='text-amber-500'>Toy Cars</span></h1>
                <h4 className='text-3xl'>Welcome to our online toy car store, the ultimate destination for all your toy car enthusiasts! Our website is dedicated to providing an extensive collection of toy cars that will thrill children and adults alike</h4>
                <div className='text-center mt-10'>
                    <button className='bg-amber-500 font-bold px-10 py-4 rounded-xl hover:bg-amber-700 ease-in-out duration-200 text-white'>Explore More</button>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='w-1/2 mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;