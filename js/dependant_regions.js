$(document).ready(function(){

    //let's create arrays
    var Alsace = [
        {value: "all" , display: "Tous" },
        {value: "65" , display: "Bas Rhin" },   
        {value: "66" , display: "Haut Rhin" }];
        
    var Aquitaine = [
        {value: "all" , display: "Tous" },
        {value: "22" , display: "Dordogne" }, 
        {value: "31" , display: "Gironde" }, 
        {value: "38" , display: "Landes" },
        {value: "45" , display: "Lot et Garonne" },
        {value: "62" , display: "Pyrenees Atlantiques" }];
        
    var Auvergne = [
        {value: "all" , display: "Tous" },
        {value: "3" , display: "Allier" }, 
        {value: "15" , display: "Cantal" }, 
        {value: "41" , display: "Loire (Haute)" },
        {value: "61" , display: "Puy de Dôme" }];

    var Bretagne = [
        {value: "all" , display: "Tous" },
        {value: "27", display: "Finistére" }, 
        {value: "33", display: "Ile et Vilaine" }, 
        {value: "54", display: "Morbihan" },
        {value: "100", display: "Côtes d'armor" }];

    var Basse_Normandie = [
        {value: "all" , display: "Tous" },
        {value: "14", display: "Calvados" }, 
        {value: "48", display: "Manche" }, 
        {value: "59", display: "Orne" }];

    var Bourgogne = [
        {value: "all" , display: "Tous" },
        {value: "56", display: "Niévre" }, 
        {value: "69", display: "Saône et Loire" }, 
        {value: "87", display: "Yonne" },
        {value: "98", display: "Côte d'or" }];

    var Corse = [
        {value: "all" , display: "Tous" },
        {value: "102", display: "Corse du sud" }, 
        {value: "103", display: "Haute corse" }];

    var Centre = [
        {value: "all" , display: "Tous" },
        {value: "18", display: "Cher" }, 
        {value: "26", display: "Eure et Loir" }, 
        {value: "34", display: "Indre" },
        {value: "39", display: "Loir et Cher" },
        {value: "43", display: "Loiret" }];

    var Champagne_Ardenne = [
        {value: "all" , display: "Tous" },
        {value: "8", display: "Ardenne" }, 
        {value: "10", display: "Aube" }, 
        {value: "49", display: "Marne" },
        {value: "50", display: "Haute Marne" }];

    var Ile_De_France = [
        {value: "all" , display: "Tous" },
        {value: "75", display: "Paris" }, 
        {value: "77", display: "Seine et Marne" }, 
        {value: "78", display: "Yvelines" },
        {value: "91", display: "Essone" },
        {value: "92", display: "Hauts de Seine" },
        {value: "93", display: "Seine Saint Denis" }];

    var Franche_Comte = [
        {value: "all" , display: "Tous" },
        {value: "23", display: "Doubs" }, 
        {value: "37", display: "Jura" }, 
        {value: "68", display: "Haute Saône" },
        {value: "88", display: "Belfort" }];

    var Haute_Normandie = [
        {value: "all" , display: "Tous" },
        {value: "25", display: "Eure" }, 
        {value: "74", display: "Seine Maritime" }];

    var Languedoc_Roussillon = [
        {value: "all" , display: "Tous" },
        {value: "11", display: "Aude" }, 
        {value: "28", display: "Gard" }, 
        {value: "32", display: "Hérault" },
        {value: "46", display: "Lozére" },
        {value: "64", display: "Pyrénées Orientales" }];

    var Limousin = [
        {value: "all" , display: "Tous" },
        {value: "19", display: "Corréze" }, 
        {value: "21", display: "Creuse" }, 
        {value: "85", display: "Haute Vienne" }];

    var Lorraine = [
        {value: "all" , display: "Tous" },
        {value: "52", display: "Meurthe et Moselle" }, 
        {value: "53", display: "Meuse" }, 
        {value: "55", display: "Moselle" },
        {value: "86", display: "Vosges" }];

    var Midi_Pyrenees = [
        {value: "all" , display: "Tous" },
        {value: "9", display: "Ariége" }, 
        {value: "12", display: "Aveyron" }, 
        {value: "29", display: "Garonne (Haute)" },
        {value: "30", display: "Gers" },
        {value: "44", display: "Lot" }];

    var Nord_Pas_de_Calais = [
        {value: "all" , display: "Tous" },
        {value: "57", display: "Nord" }, 
        {value: "60", display: "Pas de Calais" }];

    var Picardie = [
        {value: "all" , display: "Tous" },
        {value: "2", display: "Aisne" }, 
        {value: "58", display: "Oise" }, 
        {value: "78", display: "Somme" }];

    var PACA = [
        {value: "all" , display: "Tous" },
        {value: "5", display: "Hautes Alpes" }, 
        {value: "6", display: "Alpes Maritimes" }, 
        {value: "13", display: "Bouches du Rhône" },
        {value: "81", display: "Var" },
        {value: "82", display: "Vaucluse" }];

    var Pays_De_La_Loire = [
        {value: "all" , display: "Tous" },
        {value: "42", display: "Loire Atlantique" }, 
        {value: "47", display: "Maine et Loire" }, 
        {value: "51", display: "Mayenne" },
        {value: "70", display: "Sarthe" },
        {value: "83", display: "Vendée" }];

    var Rhone_Alpes = [
        {value: "all" , display: "Tous" },
        {value: "1", display: "Ain" }, 
        {value: "7", display: "Ardéche" }, 
        {value: "24", display: "Drôme" },
        {value: "36", display: "Isére" },
        {value: "40", display: "Loire" },
        {value: "67", display: "Rhône" },
        {value: "71", display: "Savoie" },
        {value: "72", display: "Haute Savoie" }];

    var Poitou_Charente = [
        {value: "all" , display: "Tous" },
        {value: "16", display: "Charente" }, 
        {value: "17", display: "Charentes Maritimes" }, 
        {value: "77", display: "Deux Sèvres" },
        {value: "84", display: "Vienne" }];


        //If parent option is changed
        $("#parent_selection").change(function() {
                var parent = $(this).val(); //get option value from parent 
                
                switch(parent){ //using switch compare selected option and populate child
                      case '8':
                        list(Alsace);
                        break;
                      case '13':
                        list(Aquitaine);
                        break;              
                      case '21':
                        list(Auvergne);
                        break;
                      case '4':
                        list(Basse_Normandie);
                        break;
                      case '11':
                        list(Bourgogne);
                        break;
                      case '6':
                        list(Bretagne); 
                        break;
                      case '7':
                        list(Champagne_Ardenne);
                        break;
                      case '15':
                        list(Corse);
                        break;
                      case '10':
                        list(Centre); 
                        break;
                      case '5':
                        list(Ile_De_France);  
                        break;
                      case '22':
                        list(Franche_Comte);
                        break;
                      case '3':
                        list(Haute_Normandie);
                        break;
                      case '17':
                        list(Languedoc_Roussillon);
                        break;
                      case '20':
                        list(Limousin);
                        break;
                      case '18':
                        list(Lorraine);
                        break;
                      case '16':
                        list(Midi_Pyrenees);
                        break;
                      case '1':
                        list(Nord_Pas_de_Calais);
                        break;
                      case '2':
                        list(Picardie);
                        break;
                      case '14':
                        list(PACA);
                        break;
                      case '9':
                        list(Pays_De_La_Loire);
                        break;
                      case '12':
                        list(Rhone_Alpes);
                        break;
                      case '19':
                        list(Poitou_Charente);
                        break;
                    default: //default child option is blank
                        $("#child_selection").html('');  
                        break;
                   }
        });

        //function to populate child select box
        function list(array_list)
        {
            $("#child_selection").html(""); //reset child options
            $(array_list).each(function (i) { //populate child options 
                $("#child_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
            });
        }

});

