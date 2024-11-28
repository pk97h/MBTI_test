import { useState } from "react";
import { questions } from "../data/questions";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    setShowResult(true);
  };

  const handleNavigateToResults = () => {
    onSubmit(answers, result);
  };

  if (showResult) {
    return (
      <>
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          테스트 결과: {result}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {mbtiDescriptions[result] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
        <button
          onClick={handleNavigateToResults}
          className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
        >
          결과 페이지로 이동하기
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === q.type.split("/")[i]
                    ? "bg-gray-100"
                    : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => handleChange(index, q.type.split("/")[i])}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;