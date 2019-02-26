var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var countSale =  $("#countSale").val();
var countNormal =  $("#countNormal").val();
var countBorrow =  $("#countBorrow").val();
var nameobject = $('#objectname').val();
var chartColors = window.chartColors;
var color = Chart.helpers.color;
var config = {
    data: {
        datasets: [{
            data: [
                countSale,             
                countBorrow,
                countNormal,
            ],
            backgroundColor: [
                color(chartColors.red).alpha(0.5).rgbString(),
                color(chartColors.yellow).alpha(0.5).rgbString(),
                color(chartColors.blue).alpha(0.5).rgbString(),

            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'จำหน่าย',
            'ยืม',
            'ปกติ'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Polar Area Chart of ' + nameobject
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area');
    window.myPolarArea = Chart.PolarArea(ctx, config);
   
};


var colorNames = Object.keys(window.chartColors);





