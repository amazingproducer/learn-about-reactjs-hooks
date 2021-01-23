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
      const result = await axios(url);
      console.log("here is the response: ")
      console.log(result.response)
 
      const obj = Object.entries(result.data.result).map(([key, value]) => ({key, value}))
      console.log(obj);
      const objResult = obj.map((entry, index) => {
        console.log("here is the entry: ");
        console.log(entry);
        return <li key={index}>{entry.key}: {entry.value}</li>;
    });
      setData(objResult);
    };

    fetchData();
  }, [url]);
 
  return (
    <Fragment>
      <h1>Enter a barcode number to search for its product name</h1>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
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
