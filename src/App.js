import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('{}');
  const [query, setQuery] = useState('Enter a 12-digit UPC or 13-digit EAN');
  const [url, setUrl] = useState(
    '',
  );
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(url){
          const result = await axios(url);
        }

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
      <form
        onSubmit={ event => {
          event.preventDefault()
          if(/^$/.test(query)){
            return
          }
          setUrl(`https://upc.shamacon.us/off/${query}`)
          setQuery("")
        }
        }
        >
      <input
        type="text"
        maxLength="13"
        value={query}
        required
        onChange={event => {
          const targetValue = event.target.value
          if(/^[0-9]+$|^$/.test(targetValue)){
          setQuery(targetValue)}}}
      />
      <button
        type="submit"
      >
        Search
      </button>
      </form>
      <ul>
      {data}
    </ul> 

    </Fragment>
  );
}

export default App;
