import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import { HttpClient } from '@angular/common/http';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_australiaHigh from "@amcharts/amcharts4-geodata/australiaHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { map } from 'rxjs/operators'

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-nectar-map-twitter',
  templateUrl: './nectar-map-twitter.component.html',
  styleUrls: ['./nectar-map-twitter.component.css']
})
export class NectarMapTwitterComponent implements OnInit {
  loading = 0
  totalTweets
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
  TASLib
  TASLab
  private data
  private chart: am4charts.XYChart;

  private _jsonURLVICLab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/daniel_positive';
  private _jsonURLVICLib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/daniel_negative';
  private _jsonURLQLDLab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/annastacia_positive';
  private _jsonURLQLDLib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/annastacia_negative';
  private _jsonURLNSWLib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/gladys_positive';
  private _jsonURLNSWLab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/gladys_negative';
  private _jsonURLWALab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/mark_positive';
  private _jsonURLWALib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/mark_negative';
  private _jsonURLSALib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/steven_positive';
  private _jsonURLSALab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/steven_negative';
  private _jsonURLTASLib = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/peter_positive';
  private _jsonURLTASLab = 'http://172.26.129.164:5984/tweets/_design/analysis/_view/peter_negative';
  private colorSet
  dataArray

  constructor(private zone: NgZone, private http: HttpClient) { }

  ngOnInit(): void {
    var counter = 0
    this.http.get(this._jsonURLVICLab).subscribe(
      (data: any) => {
      this.VICLab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLVICLib).subscribe(
      (data: any) => {
      this.VICLib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLQLDLab).subscribe(
      (data: any) => {
      this.QLDLab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLQLDLib).subscribe(
      (data: any) => {
      this.QLDLib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLNSWLib).subscribe(
      (data: any) => {
      this.NSWLib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLNSWLab).subscribe(
      (data: any) => {
      this.NSWLab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLWALab).subscribe(
      (data: any) => {
      this.WALab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLWALib).subscribe(
      (data: any) => {
      this.WALib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLSALib).subscribe(
      (data: any) => {
      this.SALib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLSALab).subscribe(
      (data: any) => {
      this.SALab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLTASLab).subscribe(
      (data: any) => {
      this.TASLab = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    this.http.get(this._jsonURLTASLib).subscribe(
      (data: any) => {
      this.TASLib = data.rows[0].value
        counter++
      },
      (error) => console.log(error),
      () => {if (counter == 12) 
        this.paintMap()}
    );
    console.log(this.VICLab + ':' + this.VICLib + ":" + this.QLDLab + ";" + this.QLDLib + ";" + this.NSWLab + ';' + this.NSWLib)
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
  mapColors(labour, liberal) {
    console.log('Comparing : ' + labour + ' and ' + liberal)
    if (labour > liberal) {

      return am4core.color("red")
    }
    else if (liberal >= labour)
      return am4core.color("#004C99")
  }

  paintMap() {
    this.totalTweets = this.VICLib + this.VICLab + this.WALab + this.WALib + this.SALab + this.SALib + this.TASLab + this.TASLib + this.NSWLib + this.NSWLab + this.QLDLab + this.QLDLib
    this.zone.runOutsideAngular(() => {
      let map = am4core.create("chartdivtwittermap", am4maps.MapChart);
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
      // var abc = this.mapColors(data.NSW.Labor > data['NSW'].Liberal? "Labor": "Liberal")
      // console.log(JSON.stringify(abc))
      polygonSeries.data = [{

        "id": "AU-VIC",
        // "name": "Victoria",
        "color": this.mapColors(this.VICLab, this.VICLib)
      }, {
        "id": "AU-NSW",
        // "name": "New South Wales",
        "color": this.mapColors(this.NSWLab, this.NSWLib)
      }, {
        "id": "AU-QLD",
        // "name": "New South Wales",
        "color": this.mapColors(this.QLDLab, this.QLDLib)
      }, {
        "id": "AU-WA",
        // "name": "New South Wales",
        "color": this.mapColors(this.WALab, this.WALib)
      }, {
        "id": "AU-SA",
        // "name": "New South Wales",
        "color": this.mapColors(this.SALab, this.SALib)
      }, {
        "id": "AU-TAS",
        // "name": "New South Wales",
        "color": this.mapColors(this.TASLab, this.TASLib)
      }, {
        "id": "AU-NT",
        // "name": "New South Wales",
        "color": am4core.color("red")
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
    // this.paintMap()
  }

  // createSeriesData(data): any {
  //  this.da
  // }

}
