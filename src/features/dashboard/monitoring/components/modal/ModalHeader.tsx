const ModalHeader = () => {
	return (
		<div className="p-[18px_22px_14px] border-b border-[rgb(225,232,231)] flex items-start justify-between">
			<div className="space-y-1">
				<p className="text-[10px] font-semibold text-[rgb(122,158,142)] font-poppins uppercase tracking-[0.06em] m-0 mb-1">
					Ficha de Finca · Monitoreo Activo
				</p>
				<p className="text-[18px] font-extrabold text-[rgb(15,31,20)] font-poppins m-0">
					Finca Arrocera Trujillo
				</p>
				<p className="text-[11px] text-[rgb(122,158,142)] font-poppins my-3 mx-0">
					Aurelio Cotrina · La Libertad
				</p>
			</div>
			<button className="bg-transparent border-0 text-[18px] text-[rgb(122,158,142)] cursor-pointer p-0 pl-1 leading-[1] hover:text-gray-600">
				X
			</button>
		</div>
	);
};

export default ModalHeader;
