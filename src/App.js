import './scss/App.scss';
// import Typography from '@mui/material/Typography';
import Start from './Component/Start'
import Game from './Component/Game'
import HelpModal from "./Component/HelpModal"
import EndGame from './Component/EndGame'
import LanguageSwitch from './Component/LanguageSwitch';
import github_icon from "./img/icons8-github.svg"
import { useSelector } from 'react-redux'

function App() {
	const status = useSelector((state) => state.counter.status) 
	return (
		<>
			<header>
				<h2 style={{color:"#fff"}}>Played {localStorage.getItem("roundPlayed")||0} times </h2>
				
				<a href="https://github.com/TranXuanPhong25/canIwin50-50/tree/master">
					<img width="52" heigh="52" src={github_icon} alt="github" />
				</a>
				<HelpModal/>
				<LanguageSwitch />
			</header>
			<main>
				
				{
					status==="start"?<Start/>:(status==="game"?<Game/>:<EndGame/>)
				}

			</main>
		</>
	);
}

export default App;
