//A controller to handle registration dependant dropdowns 

Aplic.controller('testController', function($scope){
    $scope.name = 'reda med';

});


Aplic.controller('CountryCntrl', function($scope){

    $scope.regions = [

                    // Alsace
                    {   'id':'8',
                        'reg':'Alsace',
                        'deps': [ 
                               { "id" : "65", "dep" : "Bas Rhin"}, { "id" : "66", "dep" : "Haut Rhin"}
                                ]},

                    // Aquitaine            
                    {   'id':'13',
                        'reg':'Aquitaine',
                        'deps': [
                                {'id':'22', 'dep': "Dordogne"}, { 'id':'31', 'dep' : "Gironde"}, { 'id' : '38', 'dep' : "Landes"}, { 'id' :'45', 'dep': "Lot et Garonne"}, { 'id' : '62', 'dep': "Pyrenees Atlantiques"}
                                ]},
                    // Auvergne
                    {   'id':'21',
                        'reg':'Auvergne',
                        'deps': [
                                {'id' : '3', 'dep' : "Allier"}, {'id' : '15', 'dep' : "Cantal"}, {'id' : '41', 'dep' : "Loire (Haute)"}, {'id' : '61', 'dep' : "Puy de Dôme"}
                                ]},
                    //Bretagne
                    {   'id':'6',
                        'reg':'Bretagne',
                        'deps': [ 
                                {"id" : "27"  , "dep" : "Finistére"}, {"id" : "33"  , "dep" : "Ile et Vilaine" }, {"id" : "54"  , "dep" : "Morbihan"}, {"id" : "100" , "dep" : "Côtes d'armor"}
                                 ]},

                    // Basse normandie
                    {   'id':'4',
                        'reg':'Basse normandie',
                        'deps': [ 
                                {"id" : "14", "dep" : "Calvados"}, {"id" : "48", "dep" : "Manche"}, {"id" : "59", "dep" : "Orne"}
                                ]},

                     //Bourgogne
                    {   'id':'11',
                        'reg':'Bourgogne',
                        'deps': [
                                 {"id" : "56", "dep" : "Niévre"}, {"id" : "69", "dep" : "Saône et Loire"}, {"id" : "87", "dep" : "Yonne"}, {"id" : "98", "dep" : "Côte d'or"}
                                 ]},
                    // Corse
                    {   'id':'15',
                        'reg':'Corse',
                        'deps': [
                                {"id" : "102", "dep" : "Corse du sud"}, {"id" : "103", "dep" : "Haute corse"}
                                ]},

                    //Centre
                    {   'id':'10',
                        'reg':'Centre',
                        'deps': [ 
                               {"id" : "18", "dep" : "Cher"}, {"id" : "26", "dep" : "Eure et Loir"}, {"id" : "34", "dep" : "Indre"}, {"id" : "35", "dep" : "Indre et Loire"}, {"id" : "39", "dep" : "Loir et Cher"}, {"id" : "43", "dep" : "Loiret"} 
                                ]},
                                
                    // Champagne ardenne
                    {   'id':'7',
                        'reg':'Champagne ardenne',
                        'deps': [
                             {"id" : "8" , "dep"  : "Ardennes"}, {"id" : "10", "dep"  : "Aube"}, {"id" : "49", "dep"  : "Marne"}, {"id" : "50", "dep"  : "Haute Marne"}                                
                                ]},

                    // ile de france
                    {   'id':'5',
                        'reg':'Ile de France',
                        'deps': [ 
                                {"id" : "73", "dep" : "Paris"}, {"id" : "75", "dep" : "Seine et Marne"}, {"id" : "76", "dep" : "Yvelines"}, {"id" : "89", "dep" : "Essonne"}, {"id" : "90", "dep" : "Hauts de Seine"}, {"id" : "91", "dep" : "Seine Saint Denis"}, {"id" : "92", "dep" : "Val de Marne"}, {"id" : "104", "dep": "Val d'oise"}
                                ]}, 

                    // Franche Compte
                    {   'id':'22',
                        'reg':'Franche Compté',
                        'deps': [ 
                                {"id" : "23", "dep" : "Doubs"}, {"id" : "37", "dep" : "Jura"}, {"id" : "68", "dep" : "Haute Saône"}, {"id" : "88", "dep" : "Belfort"}
                                ]},     

                    // Haute Normandie
                    {   'id':'3',
                        'reg':'Haute Normandie',
                        'deps': [ 
                               {"id" : "25", "dep" : "Eure"}, {"id" : "74", "dep" : "Seine Maritime"}
                                ]},    

                     // Languedoc Roussillion
                    {   'id':'17',
                        'reg':'Languedoc Roussillion',
                        'deps': [ 
                                {"id" : "11", "dep" : "Aude"}, {"id" : "28", "dep" : "Gard"}, {"id" : "32", "dep" : "Hérault"}, {"id" : "46", "dep" : "Lozére"}, {"id" : "64", "dep" : "Pyrénées Orientales"}
                                 ]},

                    // Limousin
                    {   'id':'20',
                        'reg':'Limousin',
                        'deps': [ 
                                {"id" : "19", "dep" : "Corréze"}, {"id" : "21", "dep" : "Creuse"}, {"id" : "85", "dep" : "Haute Vienne"}
                                 ]},

                    // Lorraine
                    {   'id':'18',
                        'reg':'Lorraine',
                        'deps': [ 
                                { "id" : "52", "dep" : "Meurthe et Moselle"}, { "id" : "53", "dep" : "Meuse"}, { "id" : "55", "dep" : "Moselle"}, { "id" : "86", "dep" : "Vosges"}
                                ]},

                    // Midi Pyrenes
                    {   'id':'16',
                        'reg':'Midi Pyrénées',
                        'deps': [ 
                                {"id" : "9", "dep" : "Ariége"}, {"id" : "12", "dep" : "Aveyron"}, {"id" : "29", "dep" : "Garonne (Haute)"}, {"id" : "30", "dep" : "Gers"}, {"id" : "44", "dep" : "Lot"}, {"id" : "63", "dep" : "Pyrénées (Hautes)"}, {"id" : "79", "dep" : "Tarn"}, {"id" : "80", "dep" : "Tarn et Garonne"}
                                 ]},

                    //  Nord pas de calais
                    {   'id':'1',
                        'reg':'Nord Pas de Calais',
                        'deps': [ 
                                {"id" : "57", "dep" : "Nord"}, {"id" : "60", "dep" : "Pas de Calais"}
                                 ]},

                    // Picardie
                    {   'id':'2',
                        'reg':'Picardie',
                        'deps': [ 
                                {"id" : "2", "dep":"Aisne"}, {"id" : "58", "dep" : "Oise"}, {"id" : "78", "dep" : "Somme"}
                                 ]},

                    // PACA
                    {   'id':'14',
                        'reg':'PACA',
                        'deps': [ 
                                { "id" : "5", "dep" : "Hautes Alpes"}, {"id" : "6", "dep" : "Alpes Maritimes"}, {"id" : "13", "dep" : "Bouches du Rhône"}, {"id" : "81", "dep" : "Var"}, {"id" : "82", "dep" : "Vaucluse"}
                                 ]},
                    
                    // Pays de la loire
                    {   'id':'9',
                        'reg':'Pays de la loire',
                        'deps': [ 
                                {"id" : "42", "dep":"Loire Atlantique"}, {"id" : "47" ,"dep":"Maine et Loire"}, {"id" : "51" ,"dep":"Mayenne"}, {"id" : "70" ,"dep":"Sarthe"}, {"id" : "83", "dep":"Vendée"}
                                ]},
                    
                    // Rhone alpes
                    {   'id':'12',
                        'reg':'Rhone alpes',
                        'deps': [ 
                                {"id" : "1", "dep" : "Ain"}, {"id" : "7", "dep" : "Ardéche"}, {"id" : "24", "dep" : "Drôme"}, {"id" : "36", "dep" : "Isére"}, {"id" : "40", "dep" : "Loire"}, {"id" : "67", "dep" : "Rhône"}, {"id" : "71", "dep" : "Savoie"}, {"id" : "72", "dep" : "Haute Savoie"}
                                 ]}, 
                                
                    // Poitou charente
                    {   'id':'19',
                        'reg':'Poitou charente',
                        'deps': [ 
                                {"id" : "16" , "dep" : "Charente"}, {"id" : "17" , "dep" : "Charente Maritime"}, {"id" : "77" , "dep" : "Deux Sèvres"}, {"id" : "84" , "dep" : "Vienne"}
                                 ]}
                    
                ];           

    

});





































 
 