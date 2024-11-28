import React, { useState, useEffect } from 'react';
import { getTestResults } from '../api/testResults';
import TestResultItem from "../components/TestResultItem";

const TestResult = ({ user }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        console.error("결과를 가져오는 중 오류 발생:", error);
        setResults([]);
      }
    };

    fetchResults();
  }, []);

  if (results === null) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <h2>테스트 결과 목록</h2>
      {results.length > 0 ? (
        results.map(result => (
          <TestResultItem 
            key={result.id} 
            result={result} 
            isOwner={user && result.userId === user.id}
          />
        ))
      ) : (
        <p>표시할 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default TestResult;