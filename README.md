# React-Toasting

🎉 React-Toasting allows you to add notifications to your app with ease. No more nonsense!

## Installation

```
$ npm install --save react-toasting
$ yarn add react-toasting
```

## The gist

```jsx
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function App(){
    const notify = () => toast({
		title: 'Title',
		message: 'Message',
		duration: 5000,
		type: 'success',
		textColor: '#0000',
		backgroundColor: '#FFFF',
	});

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```

