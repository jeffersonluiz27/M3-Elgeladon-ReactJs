import './Home.css';
import PaletaLista from 'components/PaletaLista/PaletaLista';
import Navbar from 'components/Navbar/Navbar';
import AdicionaPaletaModal from 'components/AdicionaPaletaModal/AdicionaPaletaModal';

const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<div className="Home__container">
				<PaletaLista />
				<AdicionaPaletaModal />
			</div>
		</div>
	);
};

export default Home;
