// components/cards/ChatCard.jsx
import { motion } from 'framer-motion';
import CardTransition from '../../TestAnimation/transition/CardTransition';

const ChatCardContent = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gunmetal-600 text-white">
            {/* Chat card specific content */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const ChatCard = CardTransition(ChatCardContent);
export default ChatCard;