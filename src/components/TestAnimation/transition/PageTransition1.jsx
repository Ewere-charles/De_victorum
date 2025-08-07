import { motion } from 'framer-motion';

const PageTransition1 = (OgComponent) => (props) => {
    return (
        <>
            <OgComponent {...props} />
            
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 w-screen h-screen origin-bottom bg-black z-50"
            />

            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 w-screen h-screen origin-top bg-black z-50"
            />
        </>
    );
};

export default PageTransition1;