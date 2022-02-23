# React Serverless functions
This app only render the message `hello world` making a request to the following serverless function.

```typescript
import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'hello world!' }),
	};
};

export { handler };
```

## Installation
First, you need install globally the netlify CLI, or also you can do it per project as dev dependencies:
```
$ npm install netlify-cli -g
```
After, clone the repository, install all dependencies:
```
$ git clone https://github.com/ulysses-ck/react-serverless-functions
$ yarn install
```
Then, run:
```
$ netlify dev
```
