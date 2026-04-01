export interface FarmData {
	id: number;
	producer: string;
	phone: string;
	farm: string;
	region: string;
	activity: string;
	hectares: string;
	amount: number;
	phenologicalPhase: string;
	healthStatus: string;
	healthStatusColor: 'optimal' | 'good' | 'warning';
	ndvi: string;
	ndviChange: string;
	ndviChangeColor: 'positive' | 'negative';
	detectedArea: string;
	estimatedYield: string;
	harvestProbability: string;
	alert: string;
	risk: string;
	riskColor: 'low' | 'medium' | 'high';
	cycleStart: string;
	cycleEnd: string;
}
