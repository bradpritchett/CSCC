export default {

	tables: function() {
		return fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
			method: 'GET',
			headers: {
				Authorization: 'Api-Key q3MNxtfep8Gt'
			}
		}).then(response => response.json());
	}	
}
