import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

const transformPaleta = (paleta) => {
	return {
		...paleta,
		id: paleta._id,
	};
};

const parseTransformLista = (response) =>
	parseResponse(response).then((paletas) => paletas.map(transformPaleta));

export const PaletaService = {
	getLista: () =>
		fetch(Api.paletaLista(), { method: 'GET' }).then(parseTransformLista),
	getById: (id) =>
		fetch(Api.paletaById(id), { method: 'GET' }).then(parseResponse),
	create: () =>
		fetch(Api.createPaleta(), { method: 'POST' }).then(parseResponse),
	updtateById: (id) =>
		fetch(Api.updatePaletaById(id), { method: 'PUT' }).then(parseResponse),
	deleteById: (id) =>
		fetch(Api.deletePaletaById(id), { method: 'DELETE' }).then(parseResponse),
};
