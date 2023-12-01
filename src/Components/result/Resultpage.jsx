import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './resultpage.css'; 

const ResultPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchTerm = location.search.substring(7); // Remove "?query=" from the search query

      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `https://google-search74.p.rapidapi.com/`,
          {
            params: {
              query: searchTerm,
              limit: '10',
              related_keywords: 'true',
            },
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com',
            },
          }
        );

        console.log('Full RapidAPI Response:', response.data);
        setResults(response.data.results || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="google-clone-results-container">
      <h2 className="google-clone-results-heading">Search Results</h2>

      {/* Link to go back to SearchPage */}
      <Link to="/search" className="google-clone-back-link">
        Back to Search
      </Link>
      <ul className="google-clone-results-list">
        {results.map((result, index) => (
          <li key={index} className="google-clone-result-item">
            <div className="google-clone-result-title">
              <strong>Title:</strong> {result.title}
            </div>
            {result.knowledge && (
              <div className="google-clone-result-knowledge">
                <strong>Knowledge:</strong> {result.knowledge.label}
              </div>
            )}
            {result.image && (
              <div className="google-clone-result-image">
                <strong>Image:</strong> {result.image.url}
              </div>
            )}
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;










// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';


// const ResultPage = () => {
//   const location = useLocation();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const searchTerm = location.search.substring(7); // Remove "?query=" from the search query

//       try {
//         // Make request to your backend server
//         const response = await axios.get(`http://localhost:3001/search?q=${encodeURIComponent(searchTerm)}`);
//         console.log('Full Backend Response:', response.data); // Log the full response
//         setResults(response.data.organic_results || []);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     fetchData();
//   }, [location.search]);

//   return (
//     <div>
//       <h2>Search Results</h2>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result.title}</li>
          
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ResultPage;




// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ResultPage = () => {
//   const location = useLocation();
//   const [results, setResults] = useState([]);
//   const [searchType, setSearchType] = useState('web'); // Default to web search

//   useEffect(() => {
//     const fetchData = async () => {
//       const searchTerm = location.search.substring(7); // Remove "?query=" from the search query
//       const apiKey = 'd4f5451bd9msh258b8794bb9de85p1665b0jsn2c9d9b5a3917'; // Replace with your RapidAPI key

//       const options = {
//         method: 'GET',
//         url: 'https://google-search74.p.rapidapi.com/',
//         params: {
//           query: searchTerm,
//           limit: '10',
//           type: searchType,
//         },
//         headers: {
//           'X-RapidAPI-Key': apiKey,
//           'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(`Full RapidAPI ${searchType} Response:`, response.data);
//         setResults(response.data.organic_results || []);
//       } catch (error) {
//         console.error(`Error fetching ${searchType} results:`, error);
//       }
//     };

//     fetchData();
//   }, [location.search, searchType]);

//   const handleSearchTypeChange = (newSearchType) => {
//     setSearchType(newSearchType);
//   };

//   return (
//     <div>
//       <h2>Search Results</h2>

//       {/* Search type selector */}
//       <div>
//         <label>
//           Search Type:
//           <select value={searchType} onChange={(e) => handleSearchTypeChange(e.target.value)}>
//             <option value="web">Web</option>
//             <option value="images">Images</option>
//             {/* Add more options for other search types as needed */}
//           </select>
//         </label>
//       </div>

//       {/* Display search results */}
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result.image_url}</li>
          
//           // Customize this based on the structure of the RapidAPI response
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ResultPage;
