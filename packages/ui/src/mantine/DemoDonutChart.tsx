"use client";

import { DonutChart } from '@mantine/charts';
import { defaultData } from './data';

export function DemoDonutChart({dataConfig,labelOfChart}:{dataConfig:string,labelOfChart:string}) 
{
	const usersCountryOfOrigin = [
	  { name: 'USA', value: 5000, color: 'indigo.6' },
	  { name: 'India', value: 2000, color: 'yellow.6' },
	  { name: 'Japan', value: 500, color: 'teal.6' },
	  { name: 'China', value: 4000, color: 'gray.6' },
	];


	const dataConfigMap = new Map<string, any>([
		["defaultData", defaultData], 
		["usersCountryOfOrigin", usersCountryOfOrigin], 
	]);
	
	var chartData:string = defaultData;
	if(dataConfig != null && dataConfig != "" && dataConfigMap.get(dataConfig) != null)
	{
		chartData = dataConfigMap.get(dataConfig);
	}

  	return <DonutChart withLabelsLine withLabels  data={chartData} chartLabel={labelOfChart} />;
}
