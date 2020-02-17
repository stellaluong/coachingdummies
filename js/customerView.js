function showCustomer() {
    model.screen.current = "customerScreen";
    console.log("hei showCustomer kjører!", model.screen.current);
    if (model.screen.current = 'customerScreen') {
        document.getElementById('content').innerHTML = `
        <div class="w3-main"> 
        <div class="w3-content w3-margin-top" style="max-width:1400px;">
            <div class="w3-row-padding">
            <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                    <div class="w3-display-container">
                    <h4 class="w3-center">${model.registeredUsers[0].firstname} ${model.registeredUsers[0].lastname}</h4>
                    <p class="w3-center"><img src="avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
                    <hr>
                    <p class="w3-container w3-margin-bottom"><i class="fas fa-building fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].company}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].birthday}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fas fa-mobile-alt fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].contactno}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fa fa-fw fa-envelope fa-fw w3-margin-right w3-text-theme"></i>${model.registeredUsers[0].email}</p>
                    <p class="w3-container w3-margin-bottom"><i class="fas fa-user-friends fa-fw w3-margin-right w3-text-theme"></i> Mentor: Per Eftang</p>
                </div>
                <hr>
                    <div class="w3-third">
                     <div class="w3-white w3-text-grey w3-card-4">
                      <div class="w3-display-container">
                    <button onclick="pastlogs()" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-history fa-fw"></i> History Log</button>
                    <button onclick="historyQuestions()" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-history fa-fw"></i> Question Log</button>
            </div>
            </div>
            </div>
            </div>
        </div>
          <div class="w3-main"> 
       <div class="w3-twothird">
       <div class="w3-container w3-card w3-white w3-margin-bottom">
            <div class="w3-container w3-padding">
            <h2 class="w3-text-grey w3-padding-16">INSIGHT</h2>
            <hr>
            <h5 class="w3-text-grey w3-padding-16">NEW LOG</h5>
                <div class="sample-toolbar">
                 <a href="javascript:void(0)" onclick="format('bold')"><span class="fa fa-bold fa-fw"></span></a>
                 <a href="javascript:void(0)" onclick="format('italic')"><span class="fa fa-italic fa-fw"></span></a>
                 <a href="javascript:void(0)" onclick="format('insertunorderedlist')"><span class="fa fa-list fa-fw"></span></a>
                </div>
                    <div oninput="updateLogText(this.innerHTML)" class="editor2" id="sampleeditor" contenteditable="true"></div>
                    <button type="button" onclick="newConversationLog()" class="w3-button w3-theme"><i class="fas fa-edit"></i>  Post</button>
                    <thead>
                    <hr>
                    <h2 class="w3-text-grey w3-padding-16">Customer Journey</h2>
            </thead>
            <tbody>
            <tr>
            </tr>
            <!--<tr>
                            <td scope="row" data-label="Account">Visa - 6076</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="Account">Corporate AMEX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>-->
                </tbody>
            </table>
            
    <div id="example" >
        <div class="demo-section k-content wide" class="w3-border w3-padding">
            <div id="chart"class="w3-card w3-round w3-white"></div><br>
        
     </div>
   </div>
    `;


    }

    function createChart() {
        $("#chart").kendoChart({
            //title: { text: "Customer Journey Map"},
            legend: {
                visible: false
            },
            dataSource: {
                data: [{
                    value: 30,
                    order: "uke 1"
                }, {
                    value: 20,
                    order: "uke 2"
                }, {
                    value: 40,
                    order: "uke 3"
                }, {
                    value: 15,
                    order: "uke 4"
                }, {
                    value: 40,
                    order: "uke 5"
                }, ]
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

    function refresh() {
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

}