
Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'JAMCO TLS Sales'
    },
    subtitle: {
        text: 'Source: Megan\'s Random Info'
    },
    colors: ['#ff5050', '#00cc00', '#0099ff'],

    xAxis: {
        type: 'datetime',
        dateLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%Y'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Amount in Dollars (Thousands)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%b %Y}: {point.y:.0f}'
    },
    
  

    
    

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
        name: "University of Kansas Health System",
        data: [
            [Date.UTC(2017, 8), 10],
            [Date.UTC(2017, 9), 9],
            [Date.UTC(2017, 10), 320],
            [Date.UTC(2017, 11), 120],
            [Date.UTC(2018, 0), 130],
            [Date.UTC(2018, 1), 8],
            [Date.UTC(2018, 2), 15],
            [Date.UTC(2018, 3), 80],
            [Date.UTC(2018, 4), 90],
            [Date.UTC(2018, 5), 120],
            ]
    }, {
        name: "Blue Cross Blue Shield",
        data: [
            [Date.UTC(2017, 8), 80],
            [Date.UTC(2017, 9), 70],
            [Date.UTC(2017, 10), 100],
            [Date.UTC(2017, 11), 250],
            [Date.UTC(2018, 0), 300],
            [Date.UTC(2018, 1), 90],
            [Date.UTC(2018, 2), 57],
            [Date.UTC(2018, 3), 89],
            [Date.UTC(2018, 4), 54],
            [Date.UTC(2018, 5), 99],
            
        ]
    }, {
        name: "Others",
        data: [
            [Date.UTC(2017, 8), 187],
            [Date.UTC(2017, 9), 172],
            [Date.UTC(2017, 10), 155],
            [Date.UTC(2017, 11), 70],
            [Date.UTC(2018, 0), 297],
            [Date.UTC(2018, 1), 290],
            [Date.UTC(2018, 2), 87],
            [Date.UTC(2018, 3), 77],
            [Date.UTC(2018, 4), 15],
            [Date.UTC(2018, 5), 10],
          
            
        ]
    }]
});
