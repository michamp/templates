"use client";

import { DonutChart } from '@mantine/charts';
import { data } from './data';

export function DemoDonutChart() {

  return <DonutChart withLabelsLine withLabels  data={data} chartLabel="By Country" />;
}
