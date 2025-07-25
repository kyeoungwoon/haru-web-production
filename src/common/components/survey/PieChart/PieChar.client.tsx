'use client';

import { useEffect, useRef } from 'react';

import { ArcElement, Chart, Legend, PieController, Tooltip } from 'chart.js';

import ChartContainer from '@common/components/survey/ChartContainer/ChartContainer.server';

import { PieChartProps } from './PieChart.types';
import getPieChartConfig from './pie-chart-config';

Chart.register(ArcElement, Tooltip, Legend, PieController);

const PieChart = ({ data, title }: PieChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const config = getPieChartConfig(data);

    chartInstanceRef.current = new Chart(ctx, config);

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [data]);

  return (
    <ChartContainer title={title}>
      <div className="flex h-60 w-75 items-start">
        <canvas ref={chartRef} />
      </div>
      <div className="mt-5 flex justify-center gap-x-3">
        {data.labels.map((label, index) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className="h-3.5 w-3.5 rounded-full"
              style={{ backgroundColor: data.colors[index] }}
            />
            <span className="text-cap1-rg text-black">{label}</span>
          </div>
        ))}
      </div>
    </ChartContainer>
  );
};

export default PieChart;
