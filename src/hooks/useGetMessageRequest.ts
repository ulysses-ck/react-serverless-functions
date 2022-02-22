import { useMemo, useState } from 'react';

import axios from 'axios';

const useGetMessageRequest = () => {
	//  serverless function url
	const urlPath = '/.netlify/functions/hello-world';

	// state for the message
	const [str, setStr] = useState('');

	/**
	 * getMessage
	 *
	 * @params any
	 *
	 * This function make a request using axios to a serverless function hello-world
	 */
	const getMessage = async () => {
		const response = await axios({
			url: urlPath,
			method: 'get',
		});
		setStr(response.data.message);
	};
	useMemo(() => {
		getMessage();
		return () => {
			setStr('');
		};
	}, []);

	// str contain the message hello world!!!
	return str;
};

export default useGetMessageRequest;
