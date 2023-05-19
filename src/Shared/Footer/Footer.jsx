

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-700 h-[200px] footer-container mt-20 text-white">
            <div>
                <div className="w-1/2 mx-auto">
                    <img className="h-[70px] w-[70px] rounded-full" src="https://i.ibb.co/hdkf5Q7/logo.jpg" alt="" />
                </div>
                <p>Toy Cars Ltd.<br />Providing reliable toys since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Shops</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Toys</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;