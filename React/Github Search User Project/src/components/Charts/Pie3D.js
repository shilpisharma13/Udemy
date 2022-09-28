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
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Languages',
        //Set the chart subcaption
        // subCaption: 'In MMbbl = One Million barrels',
        // //Set the x-axis name
        // xAxisName: 'Country',
        // //Set the y-axis name
        // yAxisName: 'Reserves (MMbbl)',
        // numberSuffix: 'K',
        //Set the theme for your chart
        theme: 'fusion',
        decimals: 0,
        pieRadius: '35%',
        // paletteColors: '#f0db4f, #fe4532, #35ff456',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
