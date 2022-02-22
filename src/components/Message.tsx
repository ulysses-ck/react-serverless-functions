import useGetMessageRequest from '../hooks/useGetMessageRequest';

function Message() {
	const helloWorld = useGetMessageRequest();

	return <>Message: {helloWorld}</>;
}

export default Message;
