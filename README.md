I'm using this repo to learn how to use react to take a user input and use it to make a request of a remote api -- and return its response.

I'll also deploy the react app to [github pages](https://amazingproducer.github.io/learn-about-reactjs-hooks) as I make progress.

## What's it doing?

Currently, the application is just a form to look up a barcode's product name in [my UPC api](https://upc.shamacon.us/off/000000003333) and a spot to display its results.
It satisfies the following requirements:

- reject all non-numeric text input
- enforce an upper character limit for text input
- enable submission via enter-key
- do not refresh the page upon submission
- make a GET request based on the input field upon submission
- display the GET response with minimal formatting
- label each form element for accessibility
- provide instructional placeholder for textinput field
- display animated feedback when backend operations are taking place