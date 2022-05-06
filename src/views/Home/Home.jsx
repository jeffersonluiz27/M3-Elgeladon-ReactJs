import './Home.css';
import PaletaLista from 'components/PaletaLista/PaletaLista';
import Navbar from 'components/Navbar/Navbar';
import AdicionaEditaPaletaModal from 'components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal';
import DeletaPaletaModal from 'components/DeletaPaletaModal/DeletaPaletaModal';

import { useState } from 'react';
import { ActionMode } from 'constants/index';

const Home = () => {
	const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
		useState(false);
	const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
	const [paletaParaEditar, setPaletaParaEditar] = useState();
	const [paletaParaDeletar, setPaletaParaDeletar] = useState();
	const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
	const [paletaEditada, setPaletaEditada] = useState();

	const handleDeletePaleta = (paletaToDelete) => {
		setPaletaParaDeletar(paletaToDelete);
	};

	const handleUpdatePaleta = (paletaToUpdate) => {
		setPaletaParaEditar(paletaToUpdate);
		setCanShowAdicionaPaletaModal(true);
	};

	const handleActions = (action) => {
		const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
		setModoAtual(novaAcao);
	};

	const handleCloseModal = () => {
		setCanShowAdicionaPaletaModal(false);
		setPaletaParaAdicionar();
		setPaletaParaDeletar();
		setPaletaParaEditar();
		setModoAtual(ActionMode.NORMAL);
	};

	return (
		<div className="Home">
			<Navbar
				mode={modoAtual}
				createPaleta={() => setCanShowAdicionaPaletaModal(true)}
				deletePaleta={() => handleActions(ActionMode.DELETAR)}
				updatePaleta={() => handleActions(ActionMode.ATUALIZAR)}
			/>
			<div className="Home__container">
				<PaletaLista
					mode={modoAtual}
					paletaCriada={paletaParaAdicionar}
					paletaEditada={paletaEditada}
					deletePaleta={handleDeletePaleta}
					updatePaleta={handleUpdatePaleta}
				/>
				{canShowAdicionaPaletaModal && (
					<AdicionaEditaPaletaModal
						mode={modoAtual}
						paletaToUpdate={paletaParaEditar}
						onUpdatePaleta={(paleta) => setPaletaEditada(paleta)}
						closeModal={handleCloseModal}
						onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
