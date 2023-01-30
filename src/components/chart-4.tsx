import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {time: '0', number: 0.15},
    {time: '2', number: 0.13},
    {time: '4', number: 0.11},
    {time: '6', number: 0.13},
    {time: '8', number: 0.14},
    {time: '10', number: 0.15},
    {time: '12', number: 0.16},
    {time: '14', number: 0.18},
    {time: '16', number: 0.21},
    {time: '18', number: 0.19},
    {time: '20', number: 0.17},
    {time: '22', number: 0.16},
    {time: '24', number: 0.15},
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {time: '0', number: Math.random() * 0.5},
        {time: '2', number: Math.random() * 0.5},
        {time: '4', number: Math.random() * 0.5},
        {time: '6', number: Math.random() * 0.5},
        {time: '8', number: Math.random() * 0.5},
        {time: '10', number: Math.random() * 0.5},
        {time: '12', number: Math.random() * 0.5},
        {time: '14', number: Math.random() * 0.5},
        {time: '16', number: Math.random() * 0.5},
        {time: '18', number: Math.random() * 0.5},
        {time: '20', number: Math.random() * 0.5},
        {time: '22', number: Math.random() * 0.5},
        {time: '24', number: Math.random() * 0.5},
      ];
      x(newData)
    }, 2000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i => i.time),
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data.map(i => i.number),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};