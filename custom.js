async function fetchPopulationDataByYearStateCounty(year, stateCode, countyCode) {
    const url = `http://127.0.0.1:5000/api/population/${year}/${stateCode}/${countyCode}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchPopulationDataByYearState(year, stateCode) {
    const url = `http://127.0.0.1:5000/api/population/${year}/${stateCode}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchStateData() {
    let checkedItems = getCheckedItems();
    let items = checkedItems.join(',');
    const url = `http://127.0.0.1:5000/api/state/${items}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchStateDataByYear(geoid, item) {
    const url = `http://127.0.0.1:5000/api/state/${geoid}/${item}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getCheckedItems() {
    let checkedItems = [];
    document.querySelectorAll(".menu-container input[type='checkbox']:checked").forEach(checkbox => {
        let labelText = checkbox.nextElementSibling.nextSibling.nodeValue.trim();
        checkedItems.push(labelText);
    });

    return checkedItems;
}


mapboxgl.accessToken = 'pk.eyJ1IjoiZ2ljb2RlcmdhbCIsImEiOiJjazcxODNscXYwM3R3M2V0aGcwMWxvcWV0In0.s246-Q7mSmCOOeqwP-HGtA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-96, 37.8],
    zoom: 4.5,
    minZoom: 4.5,
    maxZoom: 15,
    attributionControl: false
});
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
const statesBoundariesUrl = 'https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json';
const countiesBoundariesUrl = 'https://raw.githubusercontent.com/joelwolfgang/GEOJson-US-Counties/master/usCounties.geojson';
const zipcodeUrl = 'https://raw.githubusercontent.com/talentdev0314/zip-code/main/zips-by_county.json';
const metroBoundariesUrl = 'https://raw.githubusercontent.com/loganpowell/census-geojson/refs/heads/master/GeoJSON/20m/2017/metropolitan-statistical-area!micropolitan-statistical-area.json';

let currentPopup = null;
let highlightedCityId = null;

let stateData = [];
let countyData = [];
let metroData = [];
let modalTitle = "";
let dataPoint = "Population";
let category = "Demographics";

const rangeSlider = document.getElementById('rangeSlider');

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector("select");
    async function enableStateEvents() {
        map.on('mousemove', 'state-areas-layer', onStateMouseMove);
        map.on('mouseleave', 'state-areas-layer', onStateMouseLeave);
        map.on('click', 'state-areas-layer', onStateMouseClick);
    }
    function disableStateEvents() {
        map.off('mousemove', 'state-areas-layer', onStateMouseMove);
        map.off('mouseleave', 'state-areas-layer', onStateMouseLeave);
        map.off('click', 'state-areas-layer', onStateMouseClick);
    }
    function enableMetroEvents() {
        map.on('mousemove', 'metro-areas-layer', onMetroMouseMove);
        map.on('mouseleave', 'metro-areas-layer', onMetroMouseLeave);
        map.on('click', 'metro-areas-layer', onMetroMouseClick);
    }
    function disableMetroEvents() {
        map.off('mousemove', 'metro-areas-layer', onMetroMouseMove);
        map.off('mouseleave', 'metro-areas-layer', onMetroMouseLeave);
        map.off('click', 'metro-areas-layer', onMetroMouseClick);
    }
    function enableCountyEvents() {
        map.on('mousemove', 'city-areas-layer', onCityMouseMove);
        map.on('mouseleave', 'city-areas-layer', onCityMouseLeave);
        map.on('click', 'city-areas-layer', onCityMouseClick);
    }
    function disableCountyEvents() {
        map.off('mousemove', 'city-areas-layer', onCityMouseMove);
        map.off('mouseleave', 'city-areas-layer', onCityMouseLeave);
        map.off('click', 'city-areas-layer', onCityMouseClick);
    }
    function enableZipcodeEvents() {
        map.on('mousemove', 'city-areas-layer', onCityMouseMove);
        map.on('mouseleave', 'city-areas-layer', onCityMouseLeave);
        map.on('click', 'city-areas-layer', onCityMouseClick);
    }
    function disableZipcodeEvents() {
        map.off('mousemove', 'city-areas-layer', onCityMouseMove);
        map.off('mouseleave', 'city-areas-layer', onCityMouseLeave);
        map.off('click', 'city-areas-layer', onCityMouseClick);
    }

    selectElement.addEventListener("change", function () {
        const selectedValue = this.value;
        map.setLayoutProperty("state-borders-layer", "visibility", "none");
        map.setLayoutProperty("state-areas-layer", "visibility", "none");
        map.setLayoutProperty("city-areas-layer", "visibility", "none");
        map.setLayoutProperty("metro-areas-layer", "visibility", "none");
        disableCountyEvents();
        disableStateEvents();
        disableMetroEvents();

        const investorTrendsCheckboxes = document.querySelector('.investor-trends');
        const demographicsCheckboxes = document.querySelector('.demographics');
        const affordabilityCheckboxes = document.querySelector('.affordability');
        const marketTrendsCheckboxes = document.querySelector('.market-trends');

        if (selectedValue === "state") {
            map.setLayoutProperty("state-borders-layer", "visibility", "visible");
            map.setLayoutProperty("state-areas-layer", "visibility", "visible");
            investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventory %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration Total</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration % of Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Building Permits</label>
            `;
            demographicsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();" checked/><span></span> Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Household Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Population Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Income Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Remote Work %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Homeownership Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgaged Home %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Age</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Poverty Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units Growth Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> College Degree Rate</label>
            `;
            affordabilityCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Overvalued %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Value/Income Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgage Payment</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Salary to Afford a House</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mtg Payment as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Property Tax Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> % Crash from 2007-12</label>
            `;
            marketTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> For Sale Inventory</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count (YoY)</label>
            `;

            enableStateEvents();
        } else if (selectedValue === "metro") {
            // map.setLayoutProperty("state-borders-layer", "visibility", "visible");
            map.setLayoutProperty("metro-areas-layer", "visibility", "visible");
            console.log(investorTrendsCheckboxes);
            investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventor %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Building Permits</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration Total</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration % of Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent Growth (YoY)</label>
            `;
            demographicsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();" checked/><span></span> Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Household Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Population Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Income Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Remote Work %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Homeownership Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgaged Home %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Age</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Poverty Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units Growth Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> College Degree Rate</label>
            `;
            affordabilityCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Overvalued %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Value/Income Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgage Payment</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Salary to Afford a House</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mtg Payment as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Property Tax Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Buy v Rent Differential</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> % Crash from 2007-12</label>
            `;
            marketTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> For Sale Inventory</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count (YoY)</label>
            `;
            enableMetroEvents();
        } else if (selectedValue === "county") {
            map.setLayoutProperty("state-borders-layer", "visibility", "visible");
            map.setLayoutProperty("city-areas-layer", "visibility", "visible");
            investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventor %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Building Permits</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration Total</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Migration % of Population</label>
            `;
            demographicsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();" checked/><span></span> Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Household Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Population Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Income Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Remote Work %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Homeownership Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgaged Home %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Age</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Poverty Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units Growth Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> College Degree Rate</label>
            `;
            affordabilityCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Overvalued %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Value/Income Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgage Payment</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Salary to Afford a House</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mtg Payment as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Property Tax Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Buy v Rent Differential</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> % Crash from 2007-12</label>
            `;
            marketTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> For Sale Inventory</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count (YoY)</label>
            `;
            enableCountyEvents();
        } else if (selectedValue === "zip") {
            // map.setLayoutProperty("state-borders-layer", "visibility", "visible");
            map.setLayoutProperty("zip-areas-layer", "visibility", "visible");
            investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventor %</label>
            `;
            demographicsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();" checked/><span></span> Population</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Household Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Population Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Income Growth</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Remote Work %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Homeownership Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgaged Home %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Age</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Poverty Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Housing Units Growth Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> College Degree Rate</label>
            `;
            affordabilityCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Overvalued %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Value/Income Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mortgage Payment</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Salary to Afford a House</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Mtg Payment as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Property Tax Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Buy v Rent Differential</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> % Crash from 2007-12</label>
            `;
            marketTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> For Sale Inventory</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Sale Inventory Growth (MoM)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count (YoY)</label>
            `;
            enableMetroEvents();
        }
    });

    noUiSlider.create(rangeSlider, {
        start: [1, 12],
        connect: true,
        step: 1,
        range: {
            min: 1,
            max: 12
        },
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });
});

const selectElement = document.querySelector("select");
map.on('load', () => {
    showLoading();
    map.addSource('city-borders', {
        type: 'geojson',
        data: countiesBoundariesUrl
    });
    map.addSource('state-borders', {
        type: 'geojson',
        data: statesBoundariesUrl
    });
    map.addSource('metro-borders', {
        type: 'geojson',
        data: metroBoundariesUrl
    });
    map.addLayer({
        id: 'city-areas-layer',
        type: 'fill',
        source: 'city-borders',
        paint: {
            'fill-color': '#00FF47',
            'fill-opacity': 0.3,
            'fill-outline-color': '#000000'
        }
    });
    map.addLayer({
        id: 'state-areas-layer',
        type: 'fill',
        source: 'state-borders',
        paint: {
            'fill-color': '#2A2A2A',
        }
    });
    map.addLayer({
        id: 'state-borders-layer',
        type: 'line',
        source: 'state-borders',
        paint: {
            'line-color': '#000000',
            'line-width': 2
        }
    });

    const features = map.querySourceFeatures('state-borders');
    const stateLabels = features.filter((feature) => {
        // Calculate the area of each feature
        const area = turf.area(feature); // Using Turf.js to calculate the area
        return area > 100000;  // Only show labels for larger areas, adjust threshold as needed
    });

    map.addLayer({
        id: 'state-names-layer',
        type: 'symbol',
        source: 'state-borders',
        layout: {
            'text-field': ['get', 'NAME10'], // Display the state name
            'text-size': [
                'case',
                ['>', ['get', 'area'], 50000],  // Adjust the area threshold as needed
                18,  // Large size for bigger areas
                0   // Hide text for small areas
            ],
            'text-anchor': 'center', // Center the text
            'text-allow-overlap': false,
        },
        paint: {
            'text-color': '#FFFFFF', // Set text color
            'text-halo-color': '#000000', // Set halo (background) color
            'text-halo-width': 2 // Set halo width for visibility
        }
    });

    map.addLayer({
        id: 'metro-areas-layer',
        type: 'fill',
        source: 'metro-borders',
        paint: {
            'fill-color': '#ff0000',
            'fill-outline-color': '#000000'
        }
    });
    hideLoading();
    map.setLayoutProperty("city-areas-layer", "visibility", "none");
    map.setLayoutProperty("metro-areas-layer", "visibility", "none");
    map.on('mousemove', 'state-areas-layer', onStateMouseMove);
    map.on('mouseleave', 'state-areas-layer', onStateMouseLeave);
    map.on('click', 'state-areas-layer', onStateMouseClick);
});

function onlyOneSelect() {
    const checkboxes = document.querySelectorAll('.my-dropdown-menu input[type="checkbox"]');
    const e = window.event;
    checkboxes.forEach(checkbox => {
        if (checkbox !== e.target) {
            checkbox.checked = false;
        }
    });
    e.target.checked = true;
    let data = [];
    const label = e.target.closest('label');
    const text = label.childNodes[2];
    dataPoint = text.nodeValue.trim();
    if (label.parentElement.classList.contains('investor-trends')) {
        category = "Investor Trends";
    } else if (label.parentElement.classList.contains('demographics')) {
        category = "Demographics";
    } else if (label.parentElement.classList.contains('affordability')) {
        category = "Affordability";
    } else if (label.parentElement.classList.contains('market-trends')) {
        category = "Market Trends";
    }
    stateData = data;
}

async function onCityMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const cityName = e.features[0].properties.COUNTY_STATE_NAME;
    const geoid = e.features[0].properties.GEOID;
    let thisStateData = stateData[geoid] ? stateData[geoid] : {};
    thisStateData = {
        'Home Value': 'N/A',
        'Home Value': 'N/A',
        'Home Value': 'N/A'
    }
    if (currentPopup) {
        currentPopup.remove();
    }
    let html = `<strong>${cityName}</strong><br>`;
    let temp = Object.entries(thisStateData).map(([key, value]) => `${key}:${value}<br>`).join("");
    html += temp;
    currentPopup = new mapboxgl.Popup({ closeButton: false, offset: [0, -20], className: 'no-arrow-popup' })
        .setLngLat(e.lngLat)
        .setHTML(html)
        .addTo(map);

    if (highlightedCityId && highlightedCityId !== geoid) {
        map.setPaintProperty('city-areas-layer', 'fill-opacity', 0.3);
    }

    highlightedCityId = geoid;
    map.setPaintProperty('city-areas-layer', 'fill-opacity', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        0.6,
        0.3
    ]);
}
function onCityMouseLeave(e) {
    map.getCanvas().style.cursor = '';  // Reset cursor
    map.setPaintProperty('city-areas-layer', 'fill-opacity', 0.3);
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
    highlightedCityId = null;
}
async function onCityMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    console.log(e.features[0])

    const cityName = e.features[0].properties.COUNTY_STATE_NAME;
    const fipsCode = e.features[0].properties.FIPS_CODE;
    const year = 2023;
    const stateCode = fipsCode.split('-')[0];
    const countyCode = fipsCode.split('-')[1];

    let checkedItems = getCheckedItems();
    const result = await fetchData(checkedItems, stateCode, countyCode);

    openGraphModal();
    console.log('Population Data:', population);

}
async function onStateMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const stateName = e.features[0].properties.NAME10;
    const geoid = e.features[0].properties.GEOID10;
    let thisStateData = stateData[geoid] ? stateData[geoid] : {};
    if (currentPopup) {
        currentPopup.remove();
    }
    let html = `<div>
    <div class="hover-pin-title">
        <p>${stateName}</p>
        <div class="container">
            `;

    let temp = Object.entries(thisStateData).map(([key, value]) => `<div class="row"><span>${key}:</span><span>${value}</span></div>`).join("");
    html += temp + `</div></div></div>`;
    currentPopup = new mapboxgl.Popup({ closeButton: false, offset: [0, -20], className: 'no-arrow-popup' })
        .setLngLat(e.lngLat)
        .setHTML(html)
        .addTo(map);

    // if (highlightedCityId && highlightedCityId !== geoid) {
    //     map.setPaintProperty('state-areas-layer', 'fill-opacity', 0.3);
    // }
    highlightedCityId = geoid;
    map.setPaintProperty('state-areas-layer', 'fill-color', [
        'case',
        ['==', ['get', 'GEOID10'], highlightedCityId],
        '#00ff00',
        '#2A2A2A'
    ]);
    map.setPaintProperty('state-borders-layer', 'line-width', [
        'case',
        ['==', ['get', 'GEOID10'], highlightedCityId],
        7,
        2
    ]);
}
function onStateMouseLeave(e) {
    map.getCanvas().style.cursor = '';  // Reset cursor
    // map.setPaintProperty('state-areas-layer', 'fill-opacity', 0.3);
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
    highlightedCityId = null;
}

function showLoading() {
    document.getElementById("loadingSpinner").style.display = "block";
    document.getElementById("loadingOverlay").style.display = "block";
    document.body.style.pointerEvents = "none";
}

function hideLoading() {
    document.getElementById("loadingSpinner").style.display = "none";
    document.getElementById("loadingOverlay").style.display = "none";
    document.body.style.pointerEvents = "auto";
}
async function onStateMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }

    const cityName = e.features[0].properties.NAME10;
    modalTitle = cityName;



    openGraphModal();
}

async function onMetroMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const metroName = e.features[0].properties.NAME;
    const geoid = e.features[0].properties.GEOID;
    let homeValue = 'N/A';
    console.log(geoid);
    if (currentPopup) {
        currentPopup.remove();
    }
    currentPopup = new mapboxgl.Popup({ closeButton: false, offset: [0, -20], className: 'no-arrow-popup' })
        .setLngLat(e.lngLat)
        .setHTML(`
      <strong>${metroName}</strong><br>
      Home Value: ${homeValue}
    `)
        .addTo(map);

    // if (highlightedCityId && highlightedCityId !== geoid) {
    //     map.setPaintProperty('metro-areas-layer', 'fill-opacity', 0.3);
    // }

    highlightedCityId = geoid;
    map.setPaintProperty('metro-areas-layer', 'fill-opacity', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        0.6,
        1
    ]);
}
function onMetroMouseLeave(e) {
    map.getCanvas().style.cursor = '';  // Reset cursor
    // map.setPaintProperty('metro-areas-layer', 'fill-opacity', 0.3);
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
    highlightedCityId = null;
}
async function onMetroMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    console.log(e.features[0])

    const cityName = e.features[0].properties.NAME;
    const geoid = e.features[0].properties.GEOID;

    let checkedItems = getCheckedItems();
    const result = await fetchData(checkedItems, stateCode, countyCode);


    openGraphModal();
    console.log('Population Data:', population);

}

let fullLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let fullData = [12, 19, 3, 5, 2, 3, 10, 15, 8, 12, 6, 9];
let chartInstance = null;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shareModal").style.display = "none";
});

function openShareModal() {
    document.getElementById("shareModal").style.display = "flex";
    document.getElementById("shareURL").value = window.location.href; // Set current URL
}

function closeShareModal() {
    document.getElementById("shareModal").style.display = "none";
}

function copyToClipboard() {
    var copyText = document.getElementById("shareURL");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function updateChart(rangeValues) {
    const [minValue, maxValue] = rangeValues.map(val => parseInt(val, 10));
    const newLabels = fullLabels.slice(minValue - 1, maxValue);
    const newData = fullData.slice(minValue - 1, maxValue);
    if (chartInstance) {
        chartInstance.data.labels = newLabels;
        chartInstance.data.datasets[0].data = newData;
        chartInstance.update();
    }
}
async function openGraphModal() {
    const graphModal = document.getElementById('graphModal');
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    // const rangeSlider = document.getElementById('rangeSlider');
    document.querySelector('.graphTitle').textContent = modalTitle;
    document.querySelector('.graph-title').textContent = dataPoint;
    document.querySelector('.data-selector').value = category;

    const panelContainer = document.querySelector('.panel-container');
    function changeLeftSlider(container) {
        const children = container.children;
        panelContainer.innerHTML = '';
        for (let i = 0; i < children.length; i++) {
            panelContainer.innerHTML += `
                <div class="panel">${children[i].childNodes[2].nodeValue.trim()}</div>
            `;
        }
    }
    if (category == "Investor Trends") {
        const investorTrendsContainer = document.querySelector(".investor-trends");
        changeLeftSlider(investorTrendsContainer);
    } else if (category == "Demographics") {
        const demographicsContainer = document.querySelector(".demographics");
        changeLeftSlider(demographicsContainer);
    } else if (category == "Affordability") {
        const affordabilityContainer = document.querySelector(".affordability");
        changeLeftSlider(affordabilityContainer);
    } else if (category == "Market Trends") {
        const marketTrendsContainer = document.querySelector(".market-trends");
        changeLeftSlider(marketTrendsContainer);
    }

    rangeSlider.noUiSlider.updateOptions({
        start: [1, 12],
        connect: true,
        step: 1,
        range: {
            min: 1,
            max: 12
        },
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });
    rangeSlider.noUiSlider.on('update', (values) => {
        updateChart(values);
    });
    graphModal.classList.add('active');
    rangeSlider.noUiSlider.set([1, fullLabels.length]);
    if (chartInstance) {
        chartInstance.destroy();
    }
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fullLabels,
            datasets: [{
                label: "item",
                data: fullData,
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: { color: '#e0e0e0' },
                    grid: { color: '#333' }
                },
                x: {
                    ticks: { color: '#e0e0e0' },
                    grid: { color: '#333' }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#e0e0e0' }
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: '#e0e0e0',
                    formatter: function (value, context) {
                        return value;
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const dataSelector = document.querySelector('.data-selector');
    dataSelector.addEventListener('change', function () {
        const panelContainer = document.querySelector('.panel-container');
        function changeLeftSlider(container) {
            const children = container.children;
            panelContainer.innerHTML = '';
            for (let i = 0; i < children.length; i++) {
                panelContainer.innerHTML += `
                <div class="panel">${children[i].childNodes[2].nodeValue.trim()}</div>
            `;
            }
        }
        if (this.value == "Investor Trends") {
            const investorTrendsContainer = document.querySelector(".investor-trends");
            changeLeftSlider(investorTrendsContainer);
        } else if (this.value == "Demographics") {
            const demographicsContainer = document.querySelector(".demographics");
            changeLeftSlider(demographicsContainer);
        } else if (this.value == "Affordability") {
            const affordabilityContainer = document.querySelector(".affordability");
            changeLeftSlider(affordabilityContainer);
        } else if (this.value == "Market Trends") {
            const marketTrendsContainer = document.querySelector(".market-trends");
            changeLeftSlider(marketTrendsContainer);
        }
    })
});
