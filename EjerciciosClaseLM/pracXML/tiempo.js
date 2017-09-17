/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var html = '<div id="days">';
var aPrecipitation = {};
var aTemperature = {};

window.onload = function () {
    var data = xmlGetter("../xml/tiempo.xml"); //obtiene el objeto xml
    var pedictionNode = data.getElementsByTagName("prediccion"); //extrae el nodo prediccion
    var skyConditionsNode = data.getElementsByTagName("estado_cielo");
    var aDays = aDay(pedictionNode); // array de fechas de los dias
    dayHTML(aDays);
    var precipitationNodes = data.getElementsByTagName("precipitacion");
    var temperatureNodes = data.getElementsByTagName("temperatura");
    precipitation(precipitationNodes);
    temperatures(temperatureNodes);
    html += '</div>';

    document.getElementById('container').innerHTML = html;

    skyConditionsHTML(aSkyConditions(skyConditionsNode));

    precipitationTemperatureHTML();
}

function temperatures(temperatureNodes) {
    var aux = 0;
    for (var i = 0; i < 2; i++) {
        aTemperature["day" + (i + 1)] = Object.create(Object.prototype);
        aTemperature["day" + (i + 1)].period0 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period1 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period2 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period3 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period4 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period5 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period6 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period7 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period8 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period9 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period10 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period11 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period12 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period13 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period14 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period15 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period16 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period17 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period18 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period19 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period20 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period21 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period22 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
        aTemperature["day" + (i + 1)].period23 = temperatureNodes[aux].childNodes[0].nodeValue;
        aux++;
    }
    aTemperature["day3"] = Object.create(Object.prototype);
    aTemperature["day3"].period0 = temperatureNodes[(temperatureNodes.length) - 1].childNodes[0].nodeValue;
}

function precipitation(precipitationNodes) {
    var aux = 0;
    for (var i = 0; i < 2; i++) {
        aPrecipitation["day" + (i + 1)] = Object.create(Object.prototype);
        aPrecipitation["day" + (i + 1)].period0 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period1 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period2 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period3 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period4 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period5 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period6 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period7 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period8 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period9 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period10 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period11 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period12 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period13 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period14 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period15 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period16 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period17 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period18 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period19 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period20 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period21 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period22 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
        aPrecipitation["day" + (i + 1)].period23 = precipitationNodes[aux].childNodes[0].nodeValue;
        aux++;
    }
    aPrecipitation['day3'] = Object.create(Object.prototype);
    aPrecipitation['day3'].period0 = precipitationNodes[aux].childNodes[0].nodeValue;
    aux++;
}

function precipitationTemperatureHTML() {
    for (var i = 0; i < 2; i++) {
        document.getElementById('day' + (i + 1)).innerHTML += '<br />';
        document.getElementById('day' + (i + 1)).innerHTML += '<br />';
        document.getElementById('day' + (i + 1)).innerHTML += '<br />';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PRECI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TEMPE </span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<br />';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 1 = Prob: ' + aPrecipitation["day" + (i + 1)].period0 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ' + aTemperature["day" + (i + 1)].period0 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 2 = Prob: ' + aPrecipitation["day" + (i + 1)].period1 + '%   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + aTemperature["day" + (i + 1)].period1 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 3 = Prob: ' + aPrecipitation["day" + (i + 1)].period2 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period2 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 4 = Prob: ' + aPrecipitation["day" + (i + 1)].period3 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period3 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 5 = Prob: ' + aPrecipitation["day" + (i + 1)].period4 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period4 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 6 = Prob: ' + aPrecipitation["day" + (i + 1)].period5 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period5 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 7 = Prob: ' + aPrecipitation["day" + (i + 1)].period6 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period6 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 8 = Prob: ' + aPrecipitation["day" + (i + 1)].period7 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period7 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 9 = Prob: ' + aPrecipitation["day" + (i + 1)].period8 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period8 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 10 = Prob: ' + aPrecipitation["day" + (i + 1)].period9 + '%   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + aTemperature["day" + (i + 1)].period9 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 11 = Prob: ' + aPrecipitation["day" + (i + 1)].period10 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period10 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 12 = Prob: ' + aPrecipitation["day" + (i + 1)].period11 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period11 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 13 = Prob: ' + aPrecipitation["day" + (i + 1)].period12 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period12 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 14 = Prob: ' + aPrecipitation["day" + (i + 1)].period13 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period13 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 15 = Prob: ' + aPrecipitation["day" + (i + 1)].period14 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period14 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 16 = Prob: ' + aPrecipitation["day" + (i + 1)].period15 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period15 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 17 = Prob: ' + aPrecipitation["day" + (i + 1)].period16 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period16 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 18 = Prob: ' + aPrecipitation["day" + (i + 1)].period17 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period17 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 19 = Prob: ' + aPrecipitation["day" + (i + 1)].period18 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period18 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 20 = Prob: ' + aPrecipitation["day" + (i + 1)].period19 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period19 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 21 = Prob: ' + aPrecipitation["day" + (i + 1)].period20 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period20 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 22 = Prob: ' + aPrecipitation["day" + (i + 1)].period21 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period21 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 23 = Prob: ' + aPrecipitation["day" + (i + 1)].period22 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period22 + '&#176 C</span>';
        document.getElementById('day' + (i + 1)).innerHTML += '<span> periodo 24 = Prob: ' + aPrecipitation["day" + (i + 1)].period23 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ' + aTemperature["day" + (i + 1)].period23 + '&#176 C</span>';

    }
    document.getElementById('day' + (i + 1)).innerHTML += '<br />';
    document.getElementById('day' + (i + 1)).innerHTML += '<br />';
    document.getElementById('day' + (i + 1)).innerHTML += '<br />';
    document.getElementById('day' + (i + 1)).innerHTML += '<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PRECI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TEMPE </span>';
    document.getElementById('day' + (i + 1)).innerHTML += '<br />';
    document.getElementById('day3').innerHTML += '<span> periodo 1 = Prob: ' + aPrecipitation["day3"].period0 + '%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ' + aTemperature["day3"].period0 + '&#176 C</span>';
}

function parseOfMonth(month) { //funcion que convierte, dado un entero, en el mes correspondiente devolviendo un String
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var finalMonth = monthNames[parseInt(month) - 1];
    return finalMonth;
}

function aDay(dayNodes) { //recorre el nodo que contiene los dias y devuelve un array con los dias
    var days = [];
    for (var i = 0; i < 3; i++) {
        days[i] = dayNodes[0].getElementsByTagName("dia")[i].getAttribute("fecha");
    }
    return days;
}

function dayHTML(aDays) { //pinta los dias de cabecera en el html;
    var dateParsed;
    var mayusDay;
    for (var i = 0; i < aDays.length; i++) {
        dateParsed = parseOfDate(aDays[i]);
        html += '<div id="day' + (i + 1) + '" class="day"> <div id=headerDay' + (i + 1) + ' class="hDay">' + weekDay(dateParsed[2], dateParsed[1], dateParsed[0]).toUpperCase() + ' ' + parseInt(dateParsed[2]) + '</div></div>';
    }
}

function weekDay(day, month, year) { //funcion que devuelve el dia de la semana como String dado los parametros dia, mes y año
    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    var dt = new Date(month + ' ' + day + ', ' + year + ' 12:00:00');
    var diaSemana = dias[dt.getUTCDay()];
    return diaSemana;
}

function parseOfDate(date) { // dada una String fecha del tipo "YYYY-MM-DD" devuelve un array con estos spliteados
    var dateString = date.split("-");
    return dateString;
}

function aSkyConditions(skyConditionsNode) {
    var aaSkyConditions = [];
    aaSkyConditions[0] = skyConditions(skyConditionsNode[12].childNodes[0].nodeValue);
    aaSkyConditions[1] = skyConditions(skyConditionsNode[35].childNodes[0].nodeValue);
    aaSkyConditions[2] = skyConditions(skyConditionsNode[47].childNodes[0].nodeValue);
    return aaSkyConditions;
}

function skyConditions(skyConditionsNode) { //dado un String asigna un valor al estado del cielo dependiendo de este
    var conditions;
    var rConditions;
    conditions = parseInt(skyConditionsNode.substring(0, 2));
    rConditions = (conditions < 12) ? 1 : rConditions; //despejado
    rConditions = (conditions > 11 && conditions < 20) ? 2 : rConditions; //nuboso
    rConditions = (conditions >= 20) ? 3 : rConditions; //lluvioso
    return rConditions;
}

function skyConditionsHTML(rConditions) { //evalua el valor del estado del cielo y pone una imagen dependiendo de este
    for (var i = 0; i < 3; i++) {
        if (rConditions[i] === 1)
            document.getElementById("day" + (i + 1)).innerHTML += '<img src="../images/tiempo/soleado.png" class="imagen" id="img' + (i + 1) + '"/>';
        if (rConditions[i] === 2)
            document.getElementById("day" + (i + 1)).innerHTML += '<img src="../images/tiempo/nuboso.png" class="imagen" id="img' + (i + 1) + '"/>';
        if (rConditions[i] === 3)
            document.getElementById("day" + (i + 1)).innerHTML += '<img src="../images/tiempo/lluvioso.png" class="imagen" id="img' + (i + 1) + '"/>';
    }
}

function xmlGetter(url) { // generador del objeto xml
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;
    return xmlDoc;
}





