import axios from "axios";

export const API_URL = "http://localhost:5000/testResults";

// 테스트 결과 목록을 가져오는 함수
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 새로운 테스트 결과를 생성하는 함수
export const createTestResult = async (result) => {
    try {
      const response = await axios.post(API_URL, { result });
      console.log('Server response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating test result:', error);
      throw error;
    }
  };

// 특정 테스트 결과를 삭제하는 함수
export const deleteTestResult = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`ID가 ${id}인 테스트 결과가 성공적으로 삭제되었습니다.`);
};

// 특정 테스트 결과의 visibility를 업데이트하는 함수
export const updateTestResultVisibility = async (id, visibility) => {
    const response = await axios.patch(`${API_URL}/${id}`, {visibility});
    return response.data;
};
