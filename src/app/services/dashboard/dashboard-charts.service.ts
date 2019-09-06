import { Injectable, NgZone } from '@angular/core';

// For Amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { DashboardApiService } from './dashboard-api.service';

am4core.useTheme(am4themes_animated);

@Injectable({
  providedIn: 'root'
})
export class DashboardChartsService {

  OEEChart: am4charts.GaugeChart;
  AvailabilityChart: am4charts.GaugeChart;
  PerformanceChart: am4charts.GaugeChart;
  QualityChart: am4charts.GaugeChart;
  QualityOkRejectChart: am4charts.GaugeChart;

  HourlyProductionChart: am4charts.XYChart;
  ActivityAnalysisChart: am4charts.PieChart;

  CurrentTrendChart: am4charts.XYChart;
  VoltageTrendChart: am4charts.XYChart;

  CurrentLiveChart: am4charts.XYChart;
  VoltageLiveChart: am4charts.XYChart;


  constructor(public zone: NgZone,
    public dashboardAPIService: DashboardApiService) {
    am4core.options.commercialLicense = true;
  }

  disposeCharts() {
    if (this.OEEChart) {
      this.OEEChart.clearCache();
      this.OEEChart.dispose();
    }

    if (this.AvailabilityChart) {
      this.AvailabilityChart.clearCache();
      this.AvailabilityChart.dispose();
    }

    if (this.PerformanceChart) {
      this.PerformanceChart.clearCache();
      this.PerformanceChart.dispose();
    }

    if (this.QualityChart) {
      this.QualityChart.clearCache();
      this.QualityChart.dispose();
    }

    if (this.QualityOkRejectChart) {
      this.QualityOkRejectChart.clearCache();
      this.QualityOkRejectChart.dispose();
    }

    if (this.HourlyProductionChart) {
      this.HourlyProductionChart.clearCache();
      this.HourlyProductionChart.dispose();
    }

    if (this.ActivityAnalysisChart) {
      this.ActivityAnalysisChart.clearCache();
      this.ActivityAnalysisChart.dispose();
    }

    if (this.CurrentTrendChart) {
      this.CurrentTrendChart.clearCache();
      this.CurrentTrendChart.dispose();
    }

    if (this.VoltageTrendChart) {
      this.VoltageTrendChart.clearCache();
      this.VoltageTrendChart.dispose();
    }

    if (this.CurrentLiveChart) {
      this.CurrentLiveChart.clearCache();
      this.CurrentLiveChart.dispose();
    }

    if (this.VoltageLiveChart) {
      this.VoltageLiveChart.clearCache();
      this.VoltageLiveChart.dispose();
    }
  }

  oeeChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.OEEChart) {
        let chart = am4core.create("OEEChartID", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();

        let hand = chart.hands.push(new am4charts.ClockHand());

        hand.showValue(86, 1000, am4core.ease.cubicOut);

        chart.innerRadius = -20;

        setTimeout(() => {
          let range0 = axis.axisRanges.create();
          range0.value = 0;
          range0.endValue = 50;
          range0.axisFill.fillOpacity = 1;
          range0.axisFill.fill = am4core.color("#dc6967");
          range0.axisFill.zIndex = - 1;

          let range1 = axis.axisRanges.create();
          range1.value = 50;
          range1.endValue = 80;
          range1.axisFill.fillOpacity = 1;
          range1.axisFill.fill = am4core.color("#f3ec98");
          range1.axisFill.zIndex = -1;

          let range2 = axis.axisRanges.create();
          range2.value = 80;
          range2.endValue = 100;
          range2.axisFill.fillOpacity = 1;
          range2.axisFill.fill = am4core.color("#0ebc85");
          range2.axisFill.zIndex = -1;
        }, 2000);

        this.OEEChart = chart;

      } else {
        this.OEEChart.hands.removeIndex(0);
        let hand = this.OEEChart.hands.push(new am4charts.ClockHand());
        hand.showValue(86, 1000, am4core.ease.cubicOut);
      }
    })
  }

  availabilityChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.AvailabilityChart) {
        let chart = am4core.create("AvailabilityChartID", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();

        let hand = chart.hands.push(new am4charts.ClockHand());

        hand.showValue(86, 1000, am4core.ease.cubicOut);

        chart.innerRadius = -20;

        setTimeout(() => {
          let range0 = axis.axisRanges.create();
          range0.value = 0;
          range0.endValue = 50;
          range0.axisFill.fillOpacity = 1;
          range0.axisFill.fill = am4core.color("#dc6967");
          range0.axisFill.zIndex = - 1;

          let range1 = axis.axisRanges.create();
          range1.value = 50;
          range1.endValue = 80;
          range1.axisFill.fillOpacity = 1;
          range1.axisFill.fill = am4core.color("#f3ec98");
          range1.axisFill.zIndex = -1;

          let range2 = axis.axisRanges.create();
          range2.value = 80;
          range2.endValue = 100;
          range2.axisFill.fillOpacity = 1;
          range2.axisFill.fill = am4core.color("#0ebc85");
          range2.axisFill.zIndex = -1;
        }, 2000);

        this.AvailabilityChart = chart;
      } else {
        this.AvailabilityChart.hands.removeIndex(0);
        let hand = this.AvailabilityChart.hands.push(new am4charts.ClockHand());
        hand.showValue(86, 1000, am4core.ease.cubicOut);
      }
    })
  }

  performanceChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.PerformanceChart) {
        let chart = am4core.create("PerformanceChartID", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();

        let hand = chart.hands.push(new am4charts.ClockHand());

        hand.showValue(86, 1000, am4core.ease.cubicOut);

        chart.innerRadius = -20;

        setTimeout(() => {
          let range0 = axis.axisRanges.create();
          range0.value = 0;
          range0.endValue = 50;
          range0.axisFill.fillOpacity = 1;
          range0.axisFill.fill = am4core.color("#dc6967");
          range0.axisFill.zIndex = - 1;

          let range1 = axis.axisRanges.create();
          range1.value = 50;
          range1.endValue = 80;
          range1.axisFill.fillOpacity = 1;
          range1.axisFill.fill = am4core.color("#f3ec98");
          range1.axisFill.zIndex = -1;

          let range2 = axis.axisRanges.create();
          range2.value = 80;
          range2.endValue = 100;
          range2.axisFill.fillOpacity = 1;
          range2.axisFill.fill = am4core.color("#0ebc85");
          range2.axisFill.zIndex = -1;
        }, 2000);

        this.PerformanceChart = chart;
      } else {
        this.PerformanceChart.hands.removeIndex(0);
        let hand = this.PerformanceChart.hands.push(new am4charts.ClockHand());
        hand.showValue(86, 1000, am4core.ease.cubicOut);
      }
    })
  }

  qualityChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.QualityChart) {
        let chart = am4core.create("QualityChartID", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();

        let hand = chart.hands.push(new am4charts.ClockHand());

        hand.showValue(86, 1000, am4core.ease.cubicOut);

        chart.innerRadius = -20;

        setTimeout(() => {
          let range0 = axis.axisRanges.create();
          range0.value = 0;
          range0.endValue = 50;
          range0.axisFill.fillOpacity = 1;
          range0.axisFill.fill = am4core.color("#dc6967");
          range0.axisFill.zIndex = - 1;

          let range1 = axis.axisRanges.create();
          range1.value = 50;
          range1.endValue = 80;
          range1.axisFill.fillOpacity = 1;
          range1.axisFill.fill = am4core.color("#f3ec98");
          range1.axisFill.zIndex = -1;

          let range2 = axis.axisRanges.create();
          range2.value = 80;
          range2.endValue = 100;
          range2.axisFill.fillOpacity = 1;
          range2.axisFill.fill = am4core.color("#0ebc85");
          range2.axisFill.zIndex = -1;
        }, 2000);

        this.QualityChart = chart;
      } else {
        this.QualityChart.hands.removeIndex(0);
        let hand = this.QualityChart.hands.push(new am4charts.ClockHand());
        hand.showValue(86, 1000, am4core.ease.cubicOut);
      }
    })
  }

  qualityOkRejectChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.QualityOkRejectChart) {
        let chart = am4core.create("QualityOkRejectChartID", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();
        let hand = chart.hands.push(new am4charts.ClockHand());

        hand.showValue(86, 1000, am4core.ease.cubicOut);

        chart.innerRadius = -20;

        setTimeout(() => {
          let okRange = axis.axisRanges.create();
          okRange.value = 0;
          okRange.endValue = 86;
          okRange.axisFill.fillOpacity = 1;
          okRange.axisFill.fill = am4core.color("#20ad3e");
          okRange.axisFill.zIndex = - 1;

          let rejectRange = axis.axisRanges.create();
          rejectRange.value = 86;
          rejectRange.endValue = 100;
          rejectRange.axisFill.fillOpacity = 1;
          rejectRange.axisFill.fill = am4core.color("#ad2020");
          rejectRange.axisFill.zIndex = -1;
        }, 2000);

        this.QualityOkRejectChart = chart;
      } else {
        this.QualityOkRejectChart.hands.removeIndex(0);
        let hand = this.QualityOkRejectChart.hands.push(new am4charts.ClockHand());
        hand.showValue(86,1000, am4core.ease.cubicOut);
      }
    })
  }

  hourlyProductionChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.HourlyProductionChart) {

        // Create chart instance
        let chart = am4core.create("HourlyProductionChartID", am4charts.XYChart);

        // Add data
        chart.data = [{
          "country": "USA",
          "visits": 2025
        }, {
          "country": "China",
          "visits": 1882
        }, {
          "country": "Japan",
          "visits": 1809
        }, {
          "country": "Germany",
          "visits": 1322
        }, {
          "country": "UK",
          "visits": 1122
        }, {
          "country": "France",
          "visits": 1114
        }, {
          "country": "India",
          "visits": 984
        }, {
          "country": "Spain",
          "visits": 711
        }, {
          "country": "Netherlands",
          "visits": 665
        }, {
          "country": "Russia",
          "visits": 580
        }, {
          "country": "South Korea",
          "visits": 443
        }, {
          "country": "Canada",
          "visits": 441
        }, {
          "country": "Brazil",
          "visits": 395
        }];

        // Create axes

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;

        this.HourlyProductionChart = chart;
      } else {

      }
    })
  }

  activityAnalysis() {
    this.zone.runOutsideAngular(() => {
      if (!this.ActivityAnalysisChart) {
        // Create chart instance
        let chart = am4core.create("ActivityAnalysisChartID", am4charts.PieChart);

        // Set data
        let selected;
        let types = [{
          type: "Fossil Energy",
          percent: 70,
          color: chart.colors.getIndex(0),
          subs: [{
            type: "Oil",
            percent: 15
          }, {
            type: "Coal",
            percent: 35
          }, {
            type: "Nuclear",
            percent: 20
          }]
        }, {
          type: "Green Energy",
          percent: 30,
          color: chart.colors.getIndex(1),
          subs: [{
            type: "Hydro",
            percent: 15
          }, {
            type: "Wind",
            percent: 10
          }, {
            type: "Other",
            percent: 5
          }]
        }];

        // Add data
        chart.data = generateChartData(types, selected);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "percent";
        pieSeries.dataFields.category = "type";
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.slices.template.propertyFields.isActive = "pulled";
        pieSeries.slices.template.strokeWidth = 0;
        pieSeries.ticks.template.disabled = true;
        pieSeries.alignLabels = false;
        pieSeries.labels.template.text = "{type}";
        pieSeries.labels.template.fontSize = 12;
        pieSeries.labels.template.radius = am4core.percent(-80);
        pieSeries.labels.template.fill = am4core.color("white");
        pieSeries.labels.template.relativeRotation = 90;

        // For Charts Legends
        chart.legend = new am4charts.Legend();

        let markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 12;
        markerTemplate.height = 12;

        chart.legend.labels.template.text = "{type}[/]";
        chart.legend.labels.template.fontSize = 10;

        chart.legend.valueLabels.template.text = "";

        // chart.legend.markers.template.disabled = true;
        chart.legend.itemContainers.template.paddingTop = 3;
        chart.legend.itemContainers.template.paddingBottom = 3;

        chart.data = generateChartData(types, selected);

        this.ActivityAnalysisChart = chart;

      } else {

      }

      function generateChartData(types, selected) {
        let chartData = [];
        for (var i = 0; i < types.length; i++) {
          if (i == selected) {
            for (var x = 0; x < types[i].subs.length; x++) {
              chartData.push({
                type: types[i].subs[x].type,
                percent: types[i].subs[x].percent,
                color: types[i].color,
                pulled: true
              });
            }
          } else {
            chartData.push({
              type: types[i].type,
              percent: types[i].percent,
              color: types[i].color,
              id: i
            });
          }
        }
        return chartData;
      }
    })
  }

  currentTrendChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.CurrentTrendChart) {
        // Create chart
        let chart = am4core.create("CurrentTrendChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Unique visitors";

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        this.CurrentTrendChart = chart;
      } else {
        this.CurrentTrendChart.data = generateChartData();
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          // add data item to the array
          chartData.push({
            date: newDate,
            visits: visits
          });
        }
        return chartData;
      }

    })
  }

  voltageTrendChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.VoltageTrendChart) {
        // Create chart
        let chart = am4core.create("VoltageTrendChartID", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.data = generateChartData();

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Unique visitors";

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        series.fill = new am4core.InterfaceColorSet().getFor("fill");

        series.stroke = am4core.color("#f2bb29");

        series.adapter.add("fill", (fill, target) => {
          return am4core.color("#f9c127");
        })

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 0, end: 1 });
        });

        this.CurrentTrendChart = chart;
      } else {
        this.CurrentTrendChart.data = generateChartData();
      }

      function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
          let newDate = new Date(firstDate);
          // each time we add one minute
          newDate.setMinutes(newDate.getMinutes() + i);
          // some random number
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          // add data item to the array
          chartData.push({
            date: newDate,
            visits: visits
          });
        }
        return chartData;
      }

    })
  }

  currentLiveChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.CurrentLiveChart) {
        let chart = am4core.create("CurrentLiveChartID", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0;

        chart.padding(0, 0, 0, 0);

        chart.zoomOutButton.disabled = true;

        let data = [];
        let visits = 10;
        let i = 0;

        for (i = 0; i <= 30; i++) {
          visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          data.push({ date: new Date().setSeconds(i - 30), value: visits });
        }

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.dateFormats.setKey("second", "ss");
        dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
        dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
        dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
        dateAxis.renderer.inside = true;
        dateAxis.renderer.axisFills.template.disabled = true;
        dateAxis.renderer.ticks.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.interpolationDuration = 500;
        valueAxis.rangeChangeDuration = 500;
        valueAxis.renderer.inside = true;
        valueAxis.renderer.minLabelPosition = 0.05;
        valueAxis.renderer.maxLabelPosition = 0.95;
        valueAxis.renderer.axisFills.template.disabled = true;
        valueAxis.renderer.ticks.template.disabled = true;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.interpolationDuration = 500;
        series.defaultState.transitionDuration = 0;
        series.tensionX = 0.8;

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 1 / 15, end: 1.2 }, false, true);
        });

        dateAxis.interpolationDuration = 500;
        dateAxis.rangeChangeDuration = 500;

        document.addEventListener("visibilitychange", function () {
          if (document.hidden) {
            if (interval) {
              clearInterval(interval);
            }
          }
          else {
            startInterval(interval, visits, series, chart);
          }
        }, false);

        // add data
        let interval;

        startInterval(interval, visits, series, chart);

        // all the below is optional, makes some fancy effects
        // gradient fill of the series
        series.fillOpacity = 1;
        let gradient = new am4core.LinearGradient();
        gradient.addColor(chart.colors.getIndex(0), 0.2);
        gradient.addColor(chart.colors.getIndex(0), 0);
        series.fill = gradient;

        // this makes date axis labels to fade out
        dateAxis.renderer.labels.template.adapter.add("fillOpacity", function (fillOpacity, target) {
          let dataItem = target.dataItem;
          return dataItem.position;
        })

        // need to set this, otherwise fillOpacity is not changed and not set
        dateAxis.events.on("validated", function () {
          am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
            label.fillOpacity = label.fillOpacity;
          })
        })

        // bullet at the front of the line
        let bullet = series.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 5;
        bullet.fillOpacity = 1;
        bullet.fill = chart.colors.getIndex(0);
        bullet.isMeasured = false;

        series.events.on("validated", function () {
          bullet.moveTo(series.dataItems.last.point);
          bullet.validatePosition();
        });
      }

      function startInterval(interval, visits, series, chart) {
        interval = setInterval(function () {
          visits =
            visits + Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
          let lastdataItem = series.dataItems.getIndex(series.dataItems.length - 1);
          chart.addData(
            { date: new Date(lastdataItem.dateX.getTime() + 1000), value: visits },
            1
          );
        }, 1000);
      }
    })
  }

  voltageLiveChart() {
    this.zone.runOutsideAngular(() => {
      if (!this.VoltageLiveChart) {
        let chart = am4core.create("VoltageLiveChartID", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0;

        chart.padding(0, 0, 0, 0);

        chart.zoomOutButton.disabled = true;

        let data = [];
        let visits = 10;
        let i = 0;

        for (i = 0; i <= 30; i++) {
          visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          data.push({ date: new Date().setSeconds(i - 30), value: visits });
        }

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.dateFormats.setKey("second", "ss");
        dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
        dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
        dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
        dateAxis.renderer.inside = true;
        dateAxis.renderer.axisFills.template.disabled = true;
        dateAxis.renderer.ticks.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.interpolationDuration = 500;
        valueAxis.rangeChangeDuration = 500;
        valueAxis.renderer.inside = true;
        valueAxis.renderer.minLabelPosition = 0.05;
        valueAxis.renderer.maxLabelPosition = 0.95;
        valueAxis.renderer.axisFills.template.disabled = true;
        valueAxis.renderer.ticks.template.disabled = true;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.interpolationDuration = 500;
        series.defaultState.transitionDuration = 0;
        series.tensionX = 0.8;

        series.stroke = am4core.color("#f2bb29");

        chart.events.on("datavalidated", function () {
          dateAxis.zoom({ start: 1 / 15, end: 1.2 }, false, true);
        });

        series.fillOpacity = 1;
        let gradient = new am4core.LinearGradient();
        gradient.addColor(am4core.color("#f9c127"), 0.2);
        gradient.addColor(am4core.color("#f9c127"), 0);
        series.fill = gradient;

        dateAxis.interpolationDuration = 500;
        dateAxis.rangeChangeDuration = 500;

        document.addEventListener("visibilitychange", function () {
          if (document.hidden) {
            if (interval) {
              clearInterval(interval);
            }
          }
          else {
            startInterval(interval, visits, series, chart);
          }
        }, false);

        // add data
        let interval;

        startInterval(interval, visits, series, chart);

        // all the below is optional, makes some fancy effects
        // gradient fill of the series
   

        // this makes date axis labels to fade out
        dateAxis.renderer.labels.template.adapter.add("fillOpacity", function (fillOpacity, target) {
          let dataItem = target.dataItem;
          return dataItem.position;
        })

        // need to set this, otherwise fillOpacity is not changed and not set
        dateAxis.events.on("validated", function () {
          am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
            label.fillOpacity = label.fillOpacity;
          })
        })

        // bullet at the front of the line
        let bullet = series.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 5;
        bullet.fillOpacity = 1;
        bullet.fill = am4core.color("#f2bb29");
        bullet.isMeasured = false;

        series.events.on("validated", function () {
          bullet.moveTo(series.dataItems.last.point);
          bullet.validatePosition();
        });
      }

      function startInterval(interval, visits, series, chart) {
        interval = setInterval(function () {
          visits =
            visits + Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
          let lastdataItem = series.dataItems.getIndex(series.dataItems.length - 1);
          chart.addData(
            { date: new Date(lastdataItem.dateX.getTime() + 1000), value: visits },
            1
          );
        }, 1000);
      }
    })
  }

}
