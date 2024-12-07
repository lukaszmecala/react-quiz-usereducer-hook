function Options({ questions, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            }`}
            disabled={hasAnswer}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
