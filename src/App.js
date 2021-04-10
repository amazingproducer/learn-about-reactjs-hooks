import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

function App() {
  const [data, setData] = useState('Enter a 12-digit UPC or 13-digit EAN');
  const [code, setCode] = useState('');
  const [inputPrompt, setInputPrompt] = useState("UPC or EAN-13");
  const [isActive, setActive] = useState(false);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('', );
  const spinnerDefault = "Search";
  const spinnerString = <Spinner id="upcSearchSpinner" as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
  const [spinnerDot, setSpinnerDot] = useState(spinnerDefault);

  const handleSubmit = event => {
    event.preventDefault()
    console.log(`Query: ${query}`)
    console.log(`Code: ${code}`)
    if(/^$/.test(query)){
      return
    }
    if(query == +code){
      setInputPrompt("Enter a different number")
      setQuery('')
      console.log(event.target)
      event.target.reset();
      console.log("Query and Code match.")
      return
    }
    //TODO check if query matches previous code
    setActive(true)
    setSpinnerDot(spinnerString)
    setUrl(`https://upc.shamacon.us/grocy/${query}`)
    setInputPrompt("UPC or EAN-13")
    setQuery("")
  };
  const handleBarcodeChange = event => {
    const targetValue = event.target.value
    if(/^[0-9]+$|^$/.test(targetValue)){
    setQuery(targetValue)}};
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(url){
          const result = await axios(url);
          console.log(result)
          setActive(false);
          setSpinnerDot(spinnerDefault)
          const obj = Object.entries(result.data).map(([key, value]) => ({key, value}))
          console.log(obj);
          const objResult = obj.map((entry, index) => {
            console.log("here is the entry: ");
            console.log(entry);
            return <li id="resultMessage" key={index}>{entry.key}: {entry.value}</li>;
        });
          setData(objResult);
          setCode(result.data.upc)
          console.log("here is the response: ")
          console.log(result.status)
          }
      } catch (err) {
        setActive(false);
        setSpinnerDot(spinnerDefault)
        const errObj = Object.entries(err.response.data).map(([key, value]) => ({key, value}))
        const errResult = errObj.map((entry, index) => {
          return <li id="errMessage" key={index}>{entry.key}: {entry.value}</li>;
        });
        setData(errResult);
        setCode(err.response.data.upc)
        console.error("Error response:");
        console.error(err.response.data);    // ***
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
      <label htmlFor='upcSearchForm' class="sr-only" id='upcSearchFormLabel'>UPC Search Form</label>
      <form
        id="upcSearchForm"
        onSubmit={handleSubmit}
        >
      <label htmlFor='upcInput' class="sr-only" id='upcInputLabel'>Barcode</label>
      <input
        id="upcInput"
        type="text"
        autoFocus="true"
        minLength="12"
        maxLength="13"
        value={query}
        placeholder={inputPrompt}
        required
        onChange={handleBarcodeChange}
      />
      <label htmlFor='upcSearchSubmit' class="sr-only" id='upcSearchSubmitLabel'>Search for Product Name</label>
      <Button
        variant="primary"
        id="upcSearchSubmit"
        type="submit"
      >
        {isActive && 'Searching…'}{spinnerDot}
      </Button>
      </form>
      <ul id='upcResultList'>
      {data}
    </ul> 
    </Fragment>
  );
}

export default App;
