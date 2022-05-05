import './Home.css';
import PaletaLista from 'components/PaletaLista/PaletaLista';
import Navbar from 'components/Navbar/Navbar';
import AdicionaEditaPaletaModal from 'components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal';

import { useState } from 'react';

const Home = () => {
	const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
		useState(false);
	const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();

	return (
		<div className="Home">
			<Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
			<div className="Home__container">
				<PaletaLista paletaCriada={paletaParaAdicionar} />
				{canShowAdicionaPaletaModal && (
					<AdicionaEditaPaletaModal
						closeModal={() => setCanShowAdicionaPaletaModal(false)}
						onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
