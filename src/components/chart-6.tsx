import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
// @ts-ignore
import china from '../geo/china.json';
import moment from 'moment';

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'广东省': '#BB31F7', '浙江省': '#15B8FD', '福建省': '#06E1EE'};
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '广东省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['广东省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '浙江省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['浙江省'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '福建省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['福建省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
      ]
    }));
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全国犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['广东省']}}/>广城籍
          <span className="icon" style={{background: colors['浙江省']}}/>浙城籍
          <span className="icon" style={{background: colors['福建省']}}/>福城籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
        <span className='text'>实时监控中</span>
        <div className="radar"></div>
        <span className="time">{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    </div>
  );
};