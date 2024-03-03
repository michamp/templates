"use client";

import { DonutChart } from '@mantine/charts';
import { data } from './data';

export function DemoDonutChart() {

  return <DonutChart data={data} />;
}
