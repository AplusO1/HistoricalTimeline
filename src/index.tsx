import { createRoot } from 'react-dom/client';
import './index.scss';
import { StrictMode } from 'react';
import HistoricalTimeline from './components/App/HistoricalTimeline';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


root.render(
	<StrictMode>
		<HistoricalTimeline />
	</StrictMode>
);
