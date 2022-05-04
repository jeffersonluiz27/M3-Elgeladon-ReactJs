import './PaletaLista.css';
/* import { paletas } from 'mocks/paletas.js'; */
import { useState, useEffect  } from 'react';
import { PaletaService } from "services/PaletaService";
import PaletaListaItem from 'components/PaletaListaItem/PaletaListaItem';
import PaletaDetalhesModal from 'components/PaletaDetalhesModal/PaletaDetalhesModal';

const PaletaLista = () => {
	const [paletas, setPaletas] = useState([]);
	const [paletaSelecionada, setPaletaSelecionada] = useState({});
	const [paletaModal, setPaletaModal] = useState(false);

	const adicionarItem = (paletaIndex) => {
		const paleta = {
			[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
		};
		setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
	};

	const removerItem = (paletaIndex) => {
		const paleta = {
			[paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
		};
		setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
	};

	const getLista = async () => {
		const response = await PaletaService.getLista();
		setPaletas(response);
	};

	useEffect(() => {
		getLista();
	}, []);

	return (
		<div className="PaletaLista">
			{paletas.map((paleta, index) => (
				<PaletaListaItem
					key={`PaletaListaItem-${index}`}
					paleta={paleta}
					quantidadeSelecionada={paletaSelecionada[index]}
					index={index}
					onAdd={(index) => adicionarItem(index)}
					onRemove={(index) => removerItem(index)}
					clickItem={(paletaId) => setPaletaModal(paleta)}
				/>
			))}
			{paletaModal && (
				<PaletaDetalhesModal
					paleta={paletaModal}
					closeModal={() => setPaletaModal(false)}
				/>
			)}
		</div>
	);
};

export default PaletaLista;
