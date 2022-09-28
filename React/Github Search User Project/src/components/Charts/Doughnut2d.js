// STEP 1 - Include Dependencies
// Include react
import React from 'react'
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'
// Include the fusioncharts library
import FusionCharts from 'fusioncharts'
// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts'
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Stars per language',
        //Set the chart subcaption
        // subCaption: 'In MMbbl = One Million barrels',
        // //Set the x-axis name
        // xAxisName: 'Country',
        // //Set the y-axis name
        // yAxisName: 'Reserves (MMbbl)',
        // numberSuffix: 'K',
        //Set the theme for your chart
        theme: 'candy',
        decimals: 0,
        doughnutRadius: '35%',
        showPercentValues: 0,
        // paletteColors: '#f0db4f, #fe4532, #35ff456',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
