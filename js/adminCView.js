let UsesTable = document.getElementById('content');

            function adminControllerShow() {

                console.log(`names : ${namesToBePrinted}`);
                UsesTable.innerHTML = html;
            }
            
            function updateTask(index) {

                const inputTag = document.getElementById(id);
                const Uses = Uses[index];

                Uses.modul1 = inputTag.value;
                Uses.modul2 = inputTag.value;
                
                Uses.modul3 = inputTag.value;
                adminControllerShow();
            }

            function selectValue(choice, value) {
                selectedValues[choice] = value;
            }

            function shownames(clickedHeader) {
                createTableHeader();
                html += `<tr id="row"> `;
                let row = document.getElementById("row");
                for (selected of Uses) {
                    if (selected.modul == clickedHeader) {
                        for (name of selected.names) {
                            const blankColumns = {
                                modul1: 0,
                                modul2: 1,
                                modul3: 2,
                        
                            
                            };
                            let blankColumnCount = blankColumns[selected.modul];
                            html += "<tr>"
                            while (blankColumnCount > 0) {
                                html += '<td style="visibility: hidden !important"></td>';
                                blankColumnCount--;
                            }

                            html += ` <td onclick="selectValue('${selected.modul}','${name}')">${name}<button onclick="ShowEditMod()">edit</button></td>  </tr>  `;
                        }
                    }

                }
                html += `</tr> </table>`;


                adminControllerShow();
            }
//view 
function ShowEditMod() {
    let edit = document.getElementById('edit').value
    
        model.registeredUsers.push({Firstname: firstname, lastName: lastname})
    }