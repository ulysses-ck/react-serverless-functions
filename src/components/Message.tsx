import React from 'react';

import useGetMessageRequest from '../hooks/useGetMessageRequest';

const Message = (): JSX.Element => {
	const helloWorld = useGetMessageRequest();

	return <>Message: {helloWorld}</>;
};

export default Message;
