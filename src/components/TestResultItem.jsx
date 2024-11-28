const TestResultItem = ({ result, isOwner }) => {
  return (
    <div>
      <p>ID: {result.id}</p>
      <p>MBTI 결과: {result.result}</p>
      {isOwner && <p>공개 여부: {result.visibility ? '공개' : '비공개'}</p>}
    </div>
  );
};

export default TestResultItem;