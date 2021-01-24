import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('{}');
  const [query, setQuery] = useState('636046316036');
  const [url, setUrl] = useState(
    'https://upc.shamacon.us/off/636046316036',
  );
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);

        const obj = Object.entries(result.data.result).map(([key, value]) => ({key, value}))
        console.log(obj);
        const objResult = obj.map((entry, index) => {
          console.log("here is the entry: ");
          console.log(entry);
          return <li key={index}>{entry.key}: {entry.value}</li>;
      });
        setData(objResult);

        console.log("here is the response: ")
        console.log(result.status)


      } catch (err) {
        const errObj = Object.entries(err.response.data.result).map(([key, value]) => ({key, value}))
        const errResult = errObj.map((entry, index) => {
          return <li key={index}>{entry.key}: {entry.value}</li>;
        });
        setData(errResult);

        console.error("Error response:");
        console.error(err.response.data.result);    // ***
        console.log("here is the error status")
        console.error(err.response.status);  // ***
        console.error(err.response.headers); // ***
      } finally {
  
      }
    };

    fetchData();
  }, [url]);
 
  return (
    <Fragment>
      <h1>Enter a barcode number to search for its product name</h1>
      <input
        type="text"
        maxLength="13"
        value={query}
        onChange={event => {
          const targetValue = event.target.value
          if(/^[0-9]+$/.test(targetValue)){
          setQuery(event.target.value)}}}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://upc.shamacon.us/off/${query}`)
        }
      >
        Search
      </button>
      <ul>
      {data}
    </ul> 

    </Fragment>
  );
}

export default App;
