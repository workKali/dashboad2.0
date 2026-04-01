'use client';

import { Map, Marker } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import MarkerMap from './MarkerMap';
import { useState } from 'react';
import PopupMap from './PopupMap';
import { mockData } from '../../data/temp';
import { useModalStore } from '../../store/modalStore';

const MapMonitoringContainer = () => {
	const [showPopup, setShowPopup] = useState(true);
	const [popupPosition, setPopupPosition] = useState({ longitude: -80.5, latitude: 8.5 });
	const [currentFormData, setCurrentFormData] = useState(mockData[0]);
	const openModal = useModalStore((s) => s.openModal);

	return (
		<Map
			initialViewState={{
				longitude: -80.5,
				latitude: 8.5,
				zoom: 6,
			}}
			style={{ width: '100%', height: '100%' }}
			mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		>
			<MarkerMap
				longitude={-80.5}
				latitude={8.5}
				color="blue"
				onMouseEnter={() => {
					setShowPopup(true);
					setPopupPosition({ longitude: -80.5, latitude: 8.5 });
				}}
				onMouseLeave={() => {
					setShowPopup(false);
				}}
				onClick={() => {
					openModal('monitoring', currentFormData);
				}}
			/>

			{showPopup && <PopupMap data={currentFormData} longitude={popupPosition.longitude} latitude={popupPosition.latitude} />}
		</Map>
	);
};

export default MapMonitoringContainer;
