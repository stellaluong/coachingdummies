function createChart() {
    $("#chart").kendoChart({
        //title: { text: "Customer Journey Map"},
        legend: {
            visible: false
        
        },
        series: [{
            type: "area",
            aggregate: "avg",
            field: "value",
            categoryField: "order",
            line: {
                style: "smooth"
            }

        }],
        categoryAxis: {
            baseUnit: "order"
        },
        valueAxis: {
            majorGridLines: {
                visible: false
            },
            visible: true
        }

    });
}

$(document).ready(createChart);
$("#example").bind("kendo:skinChange", createChart);
$(".box").bind("change", refresh);

function refresh() 

{
    var chart = $("#chart").data("kendoChart"),
        series = chart.options.series,
        categoryAxis = chart.options.categoryAxis,
        baseUnitInputs = $("input:radio[name=baseUnit]"),
        aggregateInputs = $("input:radio[name=aggregate]");

    for (var i = 0, length = series.length; i < length; i++) {
        series[i].aggregate = aggregateInputs.filter(":checked").val();
    };

    categoryAxis.baseUnit = baseUnitInputs.filter(":checked").val();

    chart.refresh();
}
function pastlog(){
    const output = document.getElementById('output');
  // model.datavar.data = note to selv - denne stien er modell stilen 
    `<div> blablalblalblablblablabllablllbablballlala</div>`;
    
    showCustomer();
console.log ("blablablabla", output); }
