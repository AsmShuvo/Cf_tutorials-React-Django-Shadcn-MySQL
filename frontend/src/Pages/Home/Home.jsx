import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios
      .get('/problems.json')
      .then((response) => setProblems(response.data))
      .catch((error) => console.error('Error fetching problems:', error));
  }, []);

  return (
    <div className=" min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Problemset</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Contest ID</th>
              <th className="border border-gray-300 p-2">Index</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Rating</th>
              <th className="border border-gray-300 p-2">Tags</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-300 p-2 text-center">{problem.contestId}</td>
                <td className="border border-gray-300 p-2 text-center">{problem.index}</td>
                <td className="border border-gray-300 p-2">{problem.name}</td>
                <td className="border border-gray-300 p-2 text-center">
                  {problem.rating ? problem.rating : 'N/A'}
                </td>
                <td className="border border-gray-300 p-2">
                  {problem.tags.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;