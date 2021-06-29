import { Component, OnInit, NgZone, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import { HttpClient } from '@angular/common/http';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_australiaHigh from "@amcharts/amcharts4-geodata/australiaHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { map } from 'rxjs/operators'

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-nectar-map-tweets',
  templateUrl: './nectar-map-tweets.component.html',
  styleUrls: ['./nectar-map-tweets.component.css']
})
export class NectarMapTweetsComponent implements OnInit, AfterViewInit {
  VICLab
  VICLib
  QLDLab
  QLDLib
  NSWLib
  NSWLab
  WALab
  WALib
  SALib
  SALab
  NTLib
  NTLab
  TASLib
  TASLab
  ACTLab
  ACTLib
  loading = 0
  private data
  private chart: am4charts.XYChart;
  private _jsonURL = 'assets/results.json';
  private colorSet
  dataArray
  constructor(private zone: NgZone, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this._jsonURL).subscribe((data: any) => this.paintMap(data),
    (error: any) => console.error(error),
    ()=> console.log("done"));
    //this.dataArray = this.createSeriesData(this.data)
    this.colorSet = new am4core.ColorSet();
    

  }

  

  // ngOnChanges() {
  //   console.log(this.dataArray)
  //   this.ngAfterViewInit();
  // }
  // animateBullet(circle): void {
  //   let animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
  //   animation.events.on("animationended", function (event) {
  //     animateBullet(event.target.object);
  //   })
  // }
  mapColors(data){
    if (data == "Labor")
      return am4core.color("#F05C5C")
    else
    am4core.color("#5C5CFF")
  }

  paintMap(data) {
    this.VICLab = data['VIC'].Labor
    this.VICLib = data['VIC'].Liberal
    this.NSWLab = data['NSW'].Labor
    this.NSWLib = data['NSW'].Liberal
    this.ACTLab = data['ACT'].Labor
    this.ACTLib = data['ACT'].Liberal
    this.WALab = data['WA'].Labor
    this.WALib = data['WA'].Liberal
    this.NTLab = data['NT'].Labor
    this.NTLib = data['NT'].Liberal
    this.QLDLab = data['QLD'].Labor
    this.QLDLib = data['QLD'].Liberal
    this.TASLab = data['TAS'].Labor
    this.TASLib = data['TAS'].Liberal
    this.SALab = data['SA'].Labor
    this.SALib = data['SA'].Liberal

    this.zone.runOutsideAngular(() => {
      let map = am4core.create("chartdivmap", am4maps.MapChart);
      map.homeZoomLevel = 1;
      map.homeGeoPoint = {
        latitude: -32,
        longitude: 135
      };
      map.geodata = am4geodata_australiaHigh;
      // this.loading += 20
      map.projection = new am4maps.projections.Miller();

      var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

      polygonSeries.useGeodata = true;
      polygonSeries.exclude = ["antarctica"];

      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.propertyFields.fill = "color";
      // polygonTemplate.fill = am4core.color("#74B266");
      polygonTemplate.polygon.fillOpacity = 0.6;
      // this.loading += 20
      var hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#367B25");


      // Add some data
      // AU-VIC
      // AU-NSW
      // AU-QLD
      // AU-NT
      // AU-WA
      // AU-SA
      // AU-TAS
      console.log("Changing")
      var abc = this.mapColors(data.NSW.Labor > data['NSW'].Liberal? "Labor": "Liberal")
      console.log(JSON.stringify(abc))
      polygonSeries.data = [{
        
        "id": "AU-VIC",
        // "name": "Victoria",
        "color": data['VIC'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-NSW",
        // "name": "New South Wales",
        "color": data['NSW'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-QLD",
        // "name": "New South Wales",
        "color": data['QLD'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-NT",
        // "name": "New South Wales",
        "color": data['NT'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-WA",
        // "name": "New South Wales",
        "color": data['WA'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-SA",
        // "name": "New South Wales",
        "color": data['SA'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }, {
        "id": "AU-TAS",
        // "name": "New South Wales",
        "color": data['TAS'].winner == "Liberal"? am4core.color("#004C99"): am4core.color("red")
      }];
      //smallMap.series.push(polygonSeries);
      // map.series.push(polygonSeries);

    // this.zone.runOutsideAngular(() => {
    //   let map = am4core.create("chartdivmap", am4maps.MapChart);
    //   map.homeZoomLevel = 1;
    //   map.homeGeoPoint = {
    //     latitude: -32,
    //     longitude: 135
    //   };
    //   map.geodata = am4geodata_australiaHigh;
    //   this.loading += 20
    //   map.projection = new am4maps.projections.Miller();
    //   var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    //   polygonSeries.useGeodata = true;
    //   var polygonTemplate = polygonSeries.mapPolygons.template;
    //   polygonTemplate.tooltipText = "{name}";
    //   polygonTemplate.fill = am4core.color("#74B266");
    //   polygonTemplate.polygon.fillOpacity = 0.6;
    //   this.loading += 20
    //   var hs = polygonTemplate.states.create("hover");
    //   hs.properties.fill = am4core.color("#367B25");

    //   let imageSeries = map.series.push(new am4maps.MapImageSeries());
    //   imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    //   imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    //   imageSeries.mapImages.template.tooltipText = "{title}";
    //   imageSeries.mapImages.template.propertyFields.url = "url";
    //   imageSeries.data = this.dataArray
    //   this.loading += 20
    //   let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    //   circle.radius = 3;
    //   circle.propertyFields.fill = "color";
    //   this.loading += 20
    //   let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    //   circle2.radius = 3;
    //   circle2.propertyFields.fill = "color";
    //   this.loading += 20
      // circle2.events.on("inited", function (event) {
      //   animateBullet(event.target);
      // })

      //imageSeries.data = [ {
      //"title": "Brussels",
      //"latitude": 50.8371,
      //"longitude": 4.3676,
      //"color":colorSet.next()


      //map.geodataSource.url = "/path/to/myCustomMap.json";

    });

  }

  ngAfterViewInit() {
    console.log("executed")
  }

  // createSeriesData(data): any {
  //  this.da
  // }

}
