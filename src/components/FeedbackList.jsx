import { motion, AnimatePresence } from "framer-motion"; //for animation
import { useContext } from "react";

import FeedbackItem from "./FeedbackItem";
import FeedbakContext from "../context/FeedbackContext";

function FeedbackList() {
	const { feedback } = useContext(FeedbakContext);
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opcaity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// return (
	// 	<div className="feedback-list">
	// 		{feedback.map((item) => (
	// 			<FeedbackItem
	// 				key={item.id}
	// 				item={item}
	// 				handleDelete={handleDelete}
	// 			/>
	// 		))}
	// 	</div>
	// );
}

export default FeedbackList;
