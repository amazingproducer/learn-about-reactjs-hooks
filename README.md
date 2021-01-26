## What is this repository?

I'm using this repo to learn how to use react to take a user input and use it to make a request of a remote api -- and return its response.

I'll also deploy the react app to [github pages](https://amazingproducer.github.io/learn-reactjs) as I make progress.

## What's this thing doing?

Currently, the application is just a form to look up a barcode's product name in [my UPC api](https://upc.shamacon.us/off/000000003333) and a spot to display its results. In the process, it's proven to demonstrate why I should test my API for output formatting consistency. The application satisfies the following requirements:

- reject all non-numeric text input
- enforce an upper character limit for text input
- enable submission via enter-key
- do not refresh the page upon submission
- make a GET request based on the input field upon submission
- display the GET response with minimal formatting
- label each form element for accessibility
- provide instructional placeholder for textinput field
- display animated feedback when backend operations are taking place
- automatically focus the cursor onto the text input field

## What's this thing got?
- it has a header (which is boring and verbose)
- it has a form
  - it has a screenreader-exclusive label
  - it has a text input field
    - it automatically becomes the input focus upon loading
    - it only accepts numeric input
    - it has informative placeholder text
    - it is a required field
    - it can activate submission via the enter key
    - it has a 13 character upper limit to match barcode specifications
    - it has a screenreader-exclusive label
  - it has a submit button
    - its text changes while an API call is active
    - it has a screenreader-exclusive label
  - it has a spinner that displays while an API call is active
- it has an area to display api call results

## What is it tracking?
- it keeps track of the contents of the text input field
- it keeps track of the contents of the API result field

## When is it responsive to state changes?
- it responds to text input events
  - it tracks the input event's value
  - it tracks the text input field's value
- it responds to form submission events
  - it tracks the text input field's value
  - it tracks the API result value