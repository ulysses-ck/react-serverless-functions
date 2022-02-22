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
After clone the repository, install dependencies:
```
$ yarn install
```
Then, run:
```
$ netlify dev
```
