import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.css']
})
export class GraphCardComponent implements OnInit {
  chartOption: EChartsOption 

  constructor() { }

  ngOnInit(): void {
    this.chartOption = {
      title: {
        text: 'Your Studytime This Week',
        subtext: 'Attaboy!'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.returnDataValues(),
          type: 'line',
        },
      ],
    };
  }

  returnDataValues(): number[]{
    return [13, 53, 23, 35, 45, 1, 56]
  }

}
