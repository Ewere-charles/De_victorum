import Nav from '../TestAnimation/Nav';
import PageTransitionLeft from '../TestAnimation/transition/PageTransitionLeft.jsx';
import SlideUpText from '../TestAnimation/SlideUpText';
import mb_bg from '../../assets/mobile/mb_bg.png';
import desktop_bg from '../../assets/desktop/desktop_bg.png';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="relative min-h-screen w-full bg-gray-200">
            {/* Mobile Nav Only */}
            <div className="md:hidden">
                <Nav />
            </div>
            
            {/* Responsive Background Images */}
            <img 
                src={mb_bg} 
                alt="Mobile background" 
                className='fixed inset-0 h-screen w-screen object-cover md:hidden'
            />
            <img 
                src={desktop_bg} 
                alt="Desktop background" 
                className='fixed inset-0 h-screen w-screen object-cover hidden md:block'
            />
            
            {/* Mobile Content (unchanged) */}
            <div className="relative z-10 flex flex-col items-start justify-start md:hidden">
                <SlideUpText 
                    className="text-2xl text-white italic font-extralight mb-20 p-2 px-4"
                    delay={1200}
                    springConfig={{
                        type: "spring",
                        damping: 30,
                        stiffness: 100,
                        mass: 0.8
                    }}
                >
                    De victorium
                </SlideUpText>

                <SlideUpText 
                    className="text-white text-[58px] leading-[50px] tracking-wide px-4 inter-thin font-extralight"
                    delay={1500}
                    springConfig={{
                        type: "spring",
                        damping: 15,
                        stiffness: 120,
                        mass: 1.2
                    }}
                >
                    Submit<br /> Your Seminar Report
                </SlideUpText>
            </div>
            
            {/* Desktop Content */}
            <div className="hidden md:flex relative z-10 h-full w-full max-w-[1300px] min-h-screen items-center justify-between mx-auto px-12">
                {/* Left Column */}
                <div className="flex flex-col items-start max-w-md lg:max-w-lg">
                    <SlideUpText 
                        className="absolute top-4 left-12 text-xl lg:text-2xl text-white italic font-extralight mb-8 pl-1"
                        delay={1200}
                        springConfig={{
                            type: "spring",
                            damping: 30,
                            stiffness: 100,
                            mass: 0.8
                        }}
                    >
                        De victorium
                    </SlideUpText>

                    <SlideUpText 
                        className="text-white text-5xl lg:text-6xl leading-[1.1] tracking-wide inter-thin font-extralight mb-8"
                        delay={1500}
                        springConfig={{
                            type: "spring",
                            damping: 15,
                            stiffness: 120,
                            mass: 1.2
                        }}
                    >
                        Submit Your Seminar Report
                    </SlideUpText>
                    
                    <SlideUpText 
                        className="text-white text-base lg:text-lg font-light mb-8 max-w-md"
                        delay={1800}
                        springConfig={{
                            type: "spring",
                            damping: 20,
                            stiffness: 80,
                            mass: 1
                        }}
                    >
                        Streamline your academic reporting with our intuitive submission platform.
                    </SlideUpText>
                    
                    <SlideUpText 
                        delay={2000}
                        springConfig={{
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            mass: 0.8
                        }}
                    >
                        <div className="flex space-x-4">
                            <Link 
                                to="/signup" 
                                className="bg-white/90 hover:bg-white text-gunmetal-700 font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-sm lg:text-base"
                            >
                                Sign Up
                            </Link>
                            <Link 
                                to="/signin" 
                                className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm lg:text-base"
                            >
                                Sign In
                            </Link>
                        </div>
                    </SlideUpText>
                </div>
                
                {/* Right Column */}
                <div className="max-w-sm xl:max-w-md">
                    <SlideUpText 
                        delay={2200}
                        springConfig={{
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            mass: 0.8
                        }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gunmetal-700 mb-3">Key Features</h3>
                            <ul className="space-y-3 text-gunmetal-600 text-sm lg:text-base">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Easy submission process</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Real-time submission tracking</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Secure document storage</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Instant confirmation receipts</span>
                                </li>
                            </ul>
                        </div>
                    </SlideUpText>
                </div>
            </div>
        </div>
    );
}

export default PageTransitionLeft(Welcome);