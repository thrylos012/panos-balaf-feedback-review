import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //for unique id

const FeedbakContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			rating: 10,
			text: "This is feedback item 1."
		},
		{
			id: 2,
			rating: 9,
			text: "This is feedback item 2."
		},
		{
			id: 3,
			rating: 7,
			text: "This is feedback item 3."
		}
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	//Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	//Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you wanty to delete.?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	//Update feedback
	const updateFeedback = (id, updItem) => {
		const newFeedback = feedback.map((item) => {
			return item.id === id ? { ...item, ...updItem } : item;
		});
		setFeedback(newFeedback);
	};

	//Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	return (
		<FeedbakContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback
			}}
		>
			{children}
		</FeedbakContext.Provider>
	);
};

export default FeedbakContext;
