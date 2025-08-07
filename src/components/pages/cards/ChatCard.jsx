// components/cards/ChatCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CardTransition from '../../TestAnimation/transition/CardTransition';

const ChatCardContent = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gunmetal-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p>Pending Server Integration Due to Cloud storage</p>
            <Link to='/home'>
            <button className='border-2 border-light-500  px-4 py-2 rounded-lg mt-5'>Back to Dashboard</button>
            </Link>
        </div>
    );
};

const ChatCard = CardTransition(ChatCardContent);
export default ChatCard;