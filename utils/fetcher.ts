const fetcher = async (url: string) => {
	try {
		let response;
		response = await fetch(`${process.env.NEXT_PUBLIC_OPEN_DOTA_API}${url}`, {
			credentials: 'include',
		});

		// if the server replies, there's always some data in json
		// if there's a network error, it will throw at the previous line

		// try to refresh token if server response 401 on first attempt
		// if (response.status === 401) {
		// 	await fetch(process.env.NEXT_PUBLIC_OPEN_DOTA_API + '/auth/refresh', {
		// 		credentials: 'include',
		// 	});
		// 	// second time trying
		// 	response = await fetch(`${process.env.NEXT_PUBLIC_OPEN_DOTA_API}${url}`, {
		// 		credentials: 'include',
		// 	});
		// }

		const data = await response.json();

		if (response.ok) {
			return data;
		}

		const error = new Error(response.statusText);
		throw error;
	} catch (error) {
		if (process.env.NODE_ENV === 'development') {
			console.log(error);
		}
		throw error;
	}
};

export default fetcher;
