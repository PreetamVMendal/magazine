import React from "react";
import HTMLFlipBook from "react-pageflip";

const MagazineViewer = () => {
    return (
        <div className="flex justify-center p-6">
            <HTMLFlipBook width={300} height={400} className="shadow-lg">
                <div className="page bg-white flex justify-center items-center p-4">Page 1</div>
                <div className="page bg-white flex justify-center items-center p-4">Page 2</div>
                <div className="page bg-white flex justify-center items-center p-4">Page 3</div>
            </HTMLFlipBook>
        </div>
    );
};
<iframe 
    className="mt-4 w-full h-64"
    src="https://www.youtube.com/embed/example-video"
    title="Magazine Video"
    allowFullScreen
></iframe>
import { Quiz } from "react-quiz-component";

const quiz = {
  quizTitle: "Magazine Knowledge Quiz",
  questions: [
    {
      question: "What is the main focus of this digital magazine?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Technology", "Fashion", "Sports", "News"],
      correctAnswer: "1"
    }
  ]
};

<Quiz quiz={quiz} />;

export default MagazineViewer;
