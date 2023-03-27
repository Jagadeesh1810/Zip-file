import { Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit{
  ngOnInit(){
    this.getChart()
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartOptionsBar:Highcharts.Options = {  }
  chartOptionsPie:Highcharts.Options = {  }


  getChart(){
    let length:any = [];
    let io = Math.round(Math.random()*10);
    let io1 = Math.round(Math.random()*10);
    let io2 = 8;
    for(let i=0;i<io;i++){
        length.push(Math.round(Math.random()*10))
    }
    this.chartOptions = { chart:{
      backgroundColor:'#000'
    },
    series:[{
      data:length,
      type:'line',
      color:'#f24841'
    }],
    title:{
      text:''
    }
  }
  let length1:any = [];
  for(let i=0;i<io1;i++){
      length1.push(Math.round(Math.random()*10))
  }
  this.chartOptionsBar = { chart:{
    backgroundColor:'#000'
  },
  series:[{
    data:length1,
    type:'column',
    color:'gold'
  }],
  title:{
    text:''
  }
}
let length2:any = [];
for(let i=0;i<io2;i++){
    length2.push(Math.round(Math.random()*10))
}
this.chartOptionsPie = { chart:{
  backgroundColor:'#000'
},
series:[{
  data:length2,
  type:'pie',
  color:'#f24841'
}],
title:{
  text:''
}
}
}

}
