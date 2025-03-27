const host = 'http://127.0.0.1:5000'
// const host = 'https://mapbox-bubble-backend.onrender.com'
async function fetchOneStateYoYData(stateCode, abbreviation, dataPoint) {
    const dataPointUrl = dataJson[dataPoint]['slug'];
    const params = new URLSearchParams({
        stateCode: stateCode,
        abbreviation: abbreviation,
    }).toString();
    const url = `${host}/api/state/yoy/${dataPointUrl}?${params}`;
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

async function fetchOneStateMoMData(stateCode, abbreviation, dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        stateCode: stateCode,
        abbreviation: abbreviation,
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/state/mom?${params}`;
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

async function fetchAllStatesData(dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/all-states?${params}`;
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

async function fetchOneMetroYoYData(metroCode, abbreviation, dataPoint) {
    const dataPointUrl = dataJson[dataPoint]['slug'];
    const params = new URLSearchParams({
        metroCode: metroCode,
        abbreviation: abbreviation,
    }).toString();
    const url = `${host}/api/metro/yoy/${dataPointUrl}?${params}`;
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

async function fetchOneMetroMoMData(metroCode, abbreviation, dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        metroCode: metroCode,
        abbreviation: abbreviation,
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/metro/mom?${params}`;
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

async function fetchAllMetrosData(dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/all-metros?${params}`;
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

async function fetchOneCountyYoYData(countyCode, abbreviation, dataPoint) {
    const dataPointUrl = dataJson[dataPoint]['slug'];
    const params = new URLSearchParams({
        countyCode: countyCode,
        abbreviation: abbreviation,
    }).toString();
    const url = `${host}/api/county/yoy/${dataPointUrl}?${params}`;
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

async function fetchOneCountyMoMData(countyCode, abbreviation, dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        countyCode: countyCode,
        abbreviation: abbreviation,
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/county/mom?${params}`;
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

async function fetchOneZipcodeYoYData(zipCode, abbreviation, dataPoint) {
    console.log(dataPoint)
    const dataPointUrl = dataJson[dataPoint]['slug'];
    const params = new URLSearchParams({
        zipCode: zipCode,
        abbreviation: zipCode
    }).toString();
    const url = `${host}/api/zipcode/yoy/${dataPointUrl}?${params}`;
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

async function fetchOneZipcodeMoMData(zipCode, dataPoint) {
    const dataPointUrl = dataJson[dataPoint]['slug'];
    const params = new URLSearchParams({
        zipCode: zipCode,
        abbreviation: zipCode
    }).toString();
    const url = `${host}/api/zipcode/mom/${dataPointUrl}?${params}`;
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

async function fetchAllCountiesData(dataPoint) {
    dataPoint = dataPoint.replace(/\//g, " ");
    const params = new URLSearchParams({
        dataPoint: dataPoint
    }).toString();
    const url = `${host}/api/all-counties?${params}`;
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

async function fetchAllZipcodesData(dataPoint) {
    return [];
    // dataPoint = dataPoint.replace(/\//g, " ");
    // const params = new URLSearchParams({
    //     dataPoint: dataPoint
    // }).toString();
    // const url = `${host}/api/all-counties?${params}`;
    // try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
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
const searchBox = document.getElementById('search-box');
const suggestionsBox = document.getElementById('suggestions');
let searchTimer;

searchBox.addEventListener('input', function () {
    const query = searchBox.value.trim();
    if (query.length > 2) {
        // Wait before sending a request (debounce)
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => fetchSuggestions(query), 300);
    } else {
        suggestionsBox.style.display = 'none';
    }
});

function fetchSuggestions(query) {
    if (query.length < 2) {
        document.getElementById('suggestions').style.display = 'none';
        return;
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}&types=place,region,locality,postcode&country=us`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const suggestions = data.features;
            if (suggestions.length) {
                displaySuggestions(suggestions);
            } else {
                suggestionsBox.style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching suggestions:', error));
}

function displaySuggestions(suggestions) {
    suggestionsBox.innerHTML = '';

    const locationOption = document.createElement('div');
    locationOption.classList.add('suggestion-item', 'current-location');
    locationOption.textContent = '📍 Use my current location';
    locationOption.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetchReverseGeocode(latitude, longitude);
            }, error => {
                alert("Location access denied or unavailable.");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });
    suggestionsBox.appendChild(locationOption);

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion.place_name;
        suggestionItem.addEventListener('click', () => {
            let zoom = 4.5;
            if (suggestion.place_type.includes('region')) {
                zoom = 4.5;
                selectChange('state');
                document.querySelector("select").value = "state";

            } else if (suggestion.place_type.includes('postcode')) {
                zoom = 15;
                selectChange('zipcode');
                document.querySelector("select").value = "zipcode";
            } else if (suggestion.place_type.includes('place')) {
                zoom = 8;
                selectChange('county');
                document.querySelector("select").value = "county";
            } else if (suggestion.context) {
                const county = suggestion.context.find(c => c.id.startsWith('county'));
                if (county) {
                    zoom = 11.5;
                    selectChange('county');
                    document.querySelector("select").value = "county";
                }
            }
            const [lng, lat] = suggestion.geometry.coordinates;
            map.flyTo({ center: [lng, lat], zoom: zoom });

            searchBox.value = suggestion.place_name;
            suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(suggestionItem);
    });
    suggestionsBox.style.display = 'block';
}

document.getElementById('search-box').addEventListener('focus', () => {
    document.getElementById('suggestions').style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (!document.querySelector('.search-container').contains(event.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});

document.getElementById('currentLocation').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetchReverseGeocode(latitude, longitude);
        }, error => {
            alert("Location access denied or unavailable.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function fetchReverseGeocode(lat, lng) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const place = data.features[0]?.place_name || "Unknown location";
            document.getElementById('search-box').value = place;
            document.getElementById('suggestions').style.display = 'none';
        })
        .catch(error => console.error("Error getting location:", error));
}

document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target)) {
        suggestionsBox.style.display = 'none';
    }
});

const shortDescription = {
    "Rental Rate": "Average monthly rent in a given area.",
    "Rent for Houses": "Typical rent for houses in a specific region.",
    "Cap Rate": "Annual return on an investment property based on income versus property value.",
    "Vacancy Rate": "Percentage of unoccupied units available for rent or sale.",
    "Rent as % of Income": "How much of household income goes towards rent.",
    "Shadow Inventory %": "Percentage of properties not listed but likely to enter the market soon.",
    "Building Permits": "Number of new construction permits issued, indicating future housing supply.",
    "Home Value to Rent Ratio": "Compares the cost of buying versus renting a home.",
    "Migration Total": "Total number of people moving in or out of an area.",
    "Migration % of Population": "Migration as a percentage of the area's population.",
    "Rent Growth (YoY)": "Year-over-year increase or decrease in rental prices.",
    "Population": "Total number of residents in a geographic area.",
    "Median Household Income": "Middle income level dividing households into two equal groups.",
    "Population Growth": "Annual change in population size.",
    "Income Growth": "Yearly change in median household income.",
    "Mortgaged Home %": "Percentage of homes with a mortgage.",
    "Median Age": "Age that divides a population into two numerically equal groups.",
    "Homeownership Rate": "Percentage of homes occupied by their owners.",
    "Poverty Rate": "Percentage of population living below the poverty line.",
    "Housing Units": "Total count of residential units, occupied or vacant.",
    "Housing Units Growth Rate": "Annual rate of increase or decrease in housing units.",
    "College Degree Rate": "Percentage of population with a bachelor's degree or higher.",
    "Remote Work %": "Percentage of the workforce working from home.",
    "Home Value": "Estimated current market value of homes.",
    "Home Value Growth (YoY)": "Year-over-year growth rate of home values.",
    "Home Value Growth (MoM)": "Month-over-month growth rate of home values.",
    "Overvalued %": "Percentage of homes considered above their fundamental value.",
    "Value/Income Ratio": "Ratio of home value to annual household income.",
    "Mortgage Payment": "Typical monthly mortgage cost for a home.",
    "Salary to Afford a House": "Income needed to afford a typical home.",
    "Mtg Payment as % of Income": "Mortgage payment as a percentage of income.",
    "Property Tax Rate": "Rate at which property is taxed annually.",
    "Buy v Rent Differential": "Cost comparison between buying and renting over time.",
    "% Crash from 2007-12": "Percentage decrease in home values during the housing market crash.",
    "For Sale Inventory": "Number of homes listed for sale.",
    "Sale Inventory Growth (YoY)": "Increase or decrease in for-sale listings.",
    "Inventory Surplus/Deficit": "Balance between demand and supply of homes for sale.",
    "Price Cut %": "Percentage of listings with price reductions.",
    "Days on Market": "Average time a property is listed before it's sold.",
    "Days on Market Growth (YoY)": "Year-over-year change in days properties are listed.",
    "Inventory as % of Houses": "Percentage of total housing stock currently for sale.",
    "Median Listing Price": "Middle price point for homes listed for sale.",
    "Median Listing Price Growth (YoY)": "Year-over-year change in median listing price.",
    "New Listing Count": "Number of new properties listed for sale.",
    "New Listing Count Growth (YoY)": "Year-over-year change in new listings."
}

const longDescription = {
    "Rental Rate": "This reflects the average cost of renting a property within a specific geographic location, providing insight into the affordability and demand for rental housing. It's often used to gauge the cost of living and compare rental markets between different cities or neighborhoods.",
    "Rent for Houses": "This refers to the standard monthly rental price for standalone houses, offering a snapshot of what one might expect to pay to rent a house rather than an apartment or condo in a particular area. It's useful for understanding the housing market dynamics specific to single-family homes.",
    "Cap Rate": "Known as the capitalization rate or cap rate, this is a key indicator for real estate investors to assess the potential profitability of a property. It's calculated by dividing the net operating income by the property's current market value, indicating the rate of return expected from the property without considering financing.",
    "Vacancy Rate": "The vacancy rate shows the proportion of housing units that are not currently in use, which can signal an oversupply of housing or under-demand, affecting rental rates and property values. High vacancy rates might suggest a buyer's or renter's market.",
    "Rent as % of Income": "This metric helps in understanding financial strain or affordability for renters, showing what percentage of their income is dedicated to housing costs. It's crucial for assessing housing market health and affordability crises.",
    "Shadow Inventory %": "Shadow inventory represents homes that are not on the market but are expected to be listed, such as foreclosures or properties held by banks. This can have implications for future supply and demand dynamics in real estate markets.",
    "Building Permits": "Building permits are a leading indicator of housing construction activity. The number issued can predict future housing inventory, which in turn can affect property prices, rental rates, and the overall economic health of a region.",
    "Home Value to Rent Ratio": "This ratio helps potential homebuyers and renters decide which option is more financially viable or beneficial in the long term, considering both current market conditions and future projections.",
    "Migration Total": "Migration total gives a sense of population flux, which can significantly impact local economies, housing markets, and cultural demographics, reflecting trends like urbanization or exodus from high-cost areas.",
    "Migration % of Population": "This shows the intensity of population movement relative to the size of the local population, offering insights into how migration might affect public services, housing, and job markets.",
    "Rent Growth (YoY)": "Rent Growth (YoY) measures how rental costs have changed over the last year, providing a clear indicator of market trends, inflation in housing costs, and economic pressures or prosperity.",
    "Population": "Population size is fundamental for understanding economic scale, resource allocation, political representation, and market demand in any region.",
    "Median Household Income": "Median household income splits the population into two equal halves, offering a benchmark for economic status, purchasing power, and living standards.",
    "Population Growth": "Population growth can indicate economic opportunities, quality of life, or demographic shifts, influencing everything from housing to infrastructure needs.",
    "Income Growth": "Income growth measures economic progress or regression within a community, affecting consumer spending, savings, and overall economic health.",
    "Mortgaged Home %": "This indicates how many homeowners are still paying off their homes, which can impact consumption patterns and economic vulnerability to interest rate changes.",
    "Median Age": "Median age helps in planning services like education, healthcare, and social security, reflecting the demographic structure of an area.",
    "Homeownership Rate": "Homeownership rate is a key economic indicator, reflecting wealth distribution, stability, and the health of the real estate market.",
    "Poverty Rate": "The poverty rate is crucial for assessing social welfare, economic inequality, and the effectiveness of poverty alleviation policies.",
    "Housing Units": "Housing units give an overall picture of housing stock, crucial for understanding housing market capacity and planning urban development.",
    "Housing Units Growth Rate": "Housing unit growth rate helps predict future housing needs, market saturation, or shortages.",
    "College Degree Rate": "College degree rate is an indicator of educational attainment, which correlates with economic productivity, income levels, and innovation.",
    "Remote Work %": "Remote work percentage has become increasingly relevant, affecting urban planning, real estate markets, and lifestyle choices post-digital transformation.",
    "Home Value": "Home value provides a snapshot of property worth, influencing decisions from buying to selling, and affecting local tax bases.",
    "Home Value Growth (YoY)": "This shows how property values have changed over the year, indicative of market health, inflation, and investment potential.",
    "Home Value Growth (MoM)": "Offers a more immediate view of market trends, useful for short-term market analysis.",
    "Overvalued %": "Overvalued homes suggest a potential bubble or market correction, important for investment and policy-making.",
    "Value/Income Ratio": "This ratio assesses housing affordability, highlighting where homeownership might be out of reach for many.",
    "Mortgage Payment": "Understanding average mortgage payments helps gauge affordability, especially in relation to interest rates and income.",
    "Salary to Afford a House": "This calculation shows the financial threshold for homeownership, useful for both potential buyers and housing policy.",
    "Mtg Payment as % of Income": "Indicates financial strain or comfort of homeowners, affecting lifestyle, savings, and economic stability.",
    "Property Tax Rate": "Property tax rate influences the cost of homeownership, local government revenue, and can affect real estate investment decisions.",
    "Buy v Rent Differential": "This differential helps in long-term financial planning, considering both immediate costs and future savings or expenses.",
    "% Crash from 2007-12": "Reflects the impact of economic downturns on real estate, useful for understanding market cycles and recovery.",
    "For Sale Inventory": "For sale inventory directly correlates with market liquidity, affecting both buyers and sellers.",
    "Sale Inventory Growth (YoY)": "Sale inventory growth signals market movement, whether towards a buyer's or seller's market.",
    "Inventory Surplus/Deficit": "Inventory Surplus/Deficit helps in predicting price movements and market stability.",
    "Price Cut %": "Price cut percentage can indicate market softness or seller urgency, useful for timing purchases.",
    "Days on Market": "Days on Market reflects market health, with longer times suggesting slower sales or overpricing.",
    "Days on Market Growth (YoY)": "Growth in days on market can point to shifts in market conditions or consumer confidence.",
    "Inventory as % of Houses": "This shows market saturation or scarcity, influencing pricing strategies and buyer competition.",
    "Median Listing Price": "Median listing price gives a sense of what the market considers 'average', useful for both sellers and buyers.",
    "Median Listing Price Growth (YoY)": "Indicates price trends, inflation in housing costs, or market corrections.",
    "New Listing Count": "New listings reflect market activity, showing how many sellers are entering the market at any given time.",
    "New Listing Count Growth (YoY)": "This metric helps forecast market supply dynamics, crucial for predicting future market conditions."
}


map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
const statesBoundariesUrl = 'https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json';
const metroBoundariesUrl = 'https://raw.githubusercontent.com/loganpowell/census-geojson/refs/heads/master/GeoJSON/20m/2017/metropolitan-statistical-area!micropolitan-statistical-area.json';
const countiesBoundariesUrl = 'https://raw.githubusercontent.com/joelwolfgang/GEOJson-US-Counties/master/usCounties.geojson';
const zipcodeBoundariesUrl = 'https://raw.githubusercontent.com/ndrezn/zip-code-geojson/refs/heads/main/usa_zip_codes_geo_100m.json';

let currentPopup = null;
let highlightedCityId = null;

let stateData = [];
let countyData = [];
let metroData = [];
let modalTitle = "";
let dataPoint = "Population";
let category = "Demographics";
let code = "";
let abbreviation = "";

const rangeSlider = document.getElementById('rangeSlider');

document.addEventListener("DOMContentLoaded", async function () {
    res = await fetchAllStatesData(dataPoint);
    stateData = res;
})
function enableStateEvents() {
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
    map.on('mousemove', 'county-areas-layer', onCountyMouseMove);
    map.on('mouseleave', 'county-areas-layer', onCountyMouseLeave);
    map.on('click', 'county-areas-layer', onCountyMouseClick);
}
function disableCountyEvents() {
    map.off('mousemove', 'county-areas-layer', onCountyMouseMove);
    map.off('mouseleave', 'county-areas-layer', onCountyMouseLeave);
    map.off('click', 'county-areas-layer', onCountyMouseClick);
}
function enableZipcodeEvents() {
    map.on('mousemove', 'zipcode-areas-layer', onZipcodeMouseMove);
    map.on('mouseleave', 'zipcode-areas-layer', onZipcodeMouseLeave);
    map.on('click', 'zipcode-areas-layer', onZipcodeMouseClick);
}
function disableZipcodeEvents() {
    map.off('mousemove', 'zipcode-areas-layer', onZipcodeMouseMove);
    map.off('mouseleave', 'zipcode-areas-layer', onZipcodeMouseLeave);
    map.off('click', 'zipcode-areas-layer', onZipcodeMouseClick);
}

const dataJson = {
    "Home Value": {
        "slug": "home-value",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Home Value Growth (YoY)": {
        "slug": "home-value-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Overvalued %": {
        "slug": "overvalued-percent",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Typical Home Price", "Fair Home Value"]
    },
    "Value/Income Ratio": {
        "slug": "value-to-income-ratio",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 1,
            graphsuffix: "",
            graphfixed: 2
        },
        "additional-data": ["Home Value", "Median HH. Income"]
    },
    "Mortgage Payment": {
        "slug": "mortgage-payment",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": ["Principle & Interest", "Insurance, Taxes and misc costs", "Mortgage Rate"]
    },
    "Salary to Afford a House": {
        "slug": "salary-to-house",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": [
            "Mortage Payment (Monthly)",
            "Mortage Payment (Annual)"
        ]
    },
    "Mtg Payment as % of Income": {
        "slug": "mtg-payment-to-income",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": [
            "Yearly House Payment",
            "Median HH. Income",
            "Mortgage Rate"
        ]
    },
    "Property Tax Rate": {
        "slug": "property-tax-rate",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": []
    },
    "% Crash from 2007-12": {
        "slug": "percent-crash-07-12",
        "yearly-only": true,
        "format": {
            prefix: "$",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Home Value Growth (MoM)": {
        "slug": "home-value-growth-mom",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 2,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": []
    },
    "For Sale Inventory": {
        "slug": "for-sale-inventory",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Sale Inventory Growth (YoY)": {
        "slug": "sale-inventory-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Inventory Surplus/Deficit": {
        "slug": "inventory-surplus-to-deficit",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["For Sale Inventory", "Long Term Average"]
    },
    "Price Cut %": {
        "slug": "price-cut-percent",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Listings with price cut", "Total Inventory"]
    },
    "Days on Market": {
        "slug": "days-on-market",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Days on Market Growth (YoY)": {
        "slug": "days-on-market-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Inventory as % of Houses": {
        "slug": "inventory-to-houses",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": [
            "Total Active Inventory",
            "Absentee Owned + Ownership HH's"
        ]
    },
    "Median Listing Price": {
        "slug": "median-listing-price",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Median Listing Price Growth (YoY)": {
        "slug": "median-listing-price-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "New Listing Count": {
        "slug": "new-listing-count",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "New Listing Count Growth (YoY)": {
        "slug": "new-listing-count-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Sale Inventory Growth (MoM)": {
        "slug": "sale-inventory-growth-mom",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Current Year"]
    },
    "Population": {
        "slug": "population",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Median Household Income": {
        "slug": "median-household-income",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Population Growth": {
        "slug": "population-growth",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Income Growth": {
        "slug": "income-growth",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Remote Work %": {
        "slug": "remote-work-percent",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Work From Home", "Total Employment"]
    },
    "College Degree Rate": {
        "slug": "college-degree-rate",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Population with Bachelor's or Higher", "25+ Age Population"]
    },
    "Homeownership Rate": {
        "slug": "homeownership-rate",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Ownership HH's", "Total Households"]
    },
    "Mortgaged Home %": {
        "slug": "mortgaged-home-percent",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 0,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Mortgaged Homes", "Ownership HH's"]
    },
    "Median Age": {
        "slug": "median-age",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 1,
            graphsuffix: "",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Poverty Rate": {
        "slug": "poverty-rate",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Population Living in Poverty", "Population"]
    },
    "Housing Units": {
        "slug": "housing-units",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Housing Units Growth Rate": {
        "slug": "housing-units-growth-rate",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Building Permits": {
        "slug": "building-permits",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Rental Rate": {
        "slug": "rental-rate",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Rent for Houses": {
        "slug": "rent-for-houses",
        "yearly-only": false,
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
        "additional-data": []
    },
    "Cap Rate": {
        "slug": "cap-rate",
        "yearly-only": false,
        "format": {
            prefix: "%",
            displaysuffix: "",
            displayfixed: 1,
            graphsuffix: "",
            graphfixed: 1
        },
        "additional-data": ["Gross Rent Income", "Expenses", "Net Rent Income", "Typical Home Price"]
    },
    "Vacancy Rate": {
        "slug": "vacancy-rate",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Housing Units", "Vacancy Units"]
    },
    "Home Value to Rent Ratio": {
        "slug": "home-value-to-rent-ratio",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 1,
            graphsuffix: "",
            graphfixed: 2
        },
        "additional-data": ["Home Values", "Annual Rent for Houses"]
    },
    "Rent as % of Income": {
        "slug": "rent-to-income",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Yearly Apartment Rent", "Med. HH. Income"]
    },
    "Shadow Inventory %": {
        "slug": "shadow-inventory-percent",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Absentee Owned Units", "Absentee Owned + Ownership HH's"]
    },
    "Migration Total": {
        "slug": "migration-total",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "K",
            graphfixed: 1
        },
        "additional-data": []
    },
    "Migration % of Population": {
        "slug": "migration-to-population",
        "yearly-only": true,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 1
        },
        "additional-data": ["Migration Total", "Population"]
    },
    "Rent Growth (YoY)": {
        "slug": "rent-growth-yoy",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Buy v Rent Differential": {
        "slug": "buy-v-rent-differential",
        "yearly-only": false,
        "format": {
            prefix: "",
            displaysuffix: "%",
            displayfixed: 1,
            graphsuffix: "%",
            graphfixed: 2
        },
        "additional-data": ["Last Year", "Current Year"]
    },
    "Typical Home Price": {
        "slug": "home-value",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Fair Home Value": {
        "slug": "fair-home-value",
        "format": {
            prefix: "$",
            displaysuffix: "K",
            displayfixed: 1,
            graphsuffix: "K",
            graphfixed: 1
        },
    },
    "Mortgage Rate": {
        "slug": "mortgage-rate",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 2,
            graphsuffix: "",
            graphfixed: 2
        },
    },
    "Insurance, Taxes and mic costs": {
        "slug": "insurance-taxes-misc-costs",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Principle & Interest": {
        "slug": "principle-interest",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Mortgage Payment (Monthly)": {
        "slug": "mortgage-payment",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Mortgage Payment (Annual)": {
        "slug": "mortgage-payment-annual",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Yearly House Payment": {
        "slug": "yearly-house-payment",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Long Term Average": {
        "slug": "long-term-average",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Total Inventory": {
        "slug": "total-inventory",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Listings with price cut": {
        "slug": "listings-with-price-cut",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Absentee Owned + Ownership HH's": {
        "slug": "absentee+ownership",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Total Active Inventory": {
        "slug": "total-active-inventory",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Total Employment": {
        "slug": "total-employment",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Work From Home": {
        "slug": "work-from-home",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "25+ Age Population": {
        "slug": "25-age-population",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Population with Bachelor's or Higher": {
        "slug": "population-with-bachelor-or-higher",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Total Households": {
        "slug": "total-households",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Ownership HH's": {
        "slug": "ownership-hh",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Mortgaged Homes": {
        "slug": "mortgaged-homes",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Population Living in Poverty": {
        "slug": "population-living-in-poverty",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Net Rent Income": {
        "slug": "net-rent-income",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Expenses": {
        "slug": "expenses",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Gross Rent Income": {
        "slug": "gross-rent-income",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Vacancy Units": {
        "slug": "vacancy-units",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Annual Rent for Houses": {
        "slug": "annual-rent-for-houses",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Med. HH. Income": {
        "slug": "income",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Yearly Apartment Rent": {
        "slug": "yearly-apartment-rent",
        "format": {
            prefix: "$",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
    "Absentee Owned Units": {
        "slug": "absentee-owned-units",
        "format": {
            prefix: "",
            displaysuffix: "",
            displayfixed: 0,
            graphsuffix: "",
            graphfixed: 0
        },
    },
}

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector("select");
    selectElement.addEventListener("change", async function () {
        selectChange(this.value);
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

async function selectChange(selectedValue) {
    map.setLayoutProperty("state-areas-layer", "visibility", "none");
    map.setLayoutProperty("state-borders-layer", "visibility", "none");
    map.setLayoutProperty("metro-areas-layer", "visibility", "none");
    map.setLayoutProperty("metro-borders-layer", "visibility", "none");
    map.setLayoutProperty("county-areas-layer", "visibility", "none");
    map.setLayoutProperty("county-borders-layer", "visibility", "none");
    map.setLayoutProperty("zipcode-areas-layer", "visibility", "none");
    map.setLayoutProperty("zipcode-borders-layer", "visibility", "none");
    disableStateEvents();
    disableMetroEvents();
    disableCountyEvents();
    disableZipcodeEvents();

    const investorTrendsCheckboxes = document.querySelector('.investor-trends');
    const demographicsCheckboxes = document.querySelector('.demographics');
    const affordabilityCheckboxes = document.querySelector('.affordability');
    const marketTrendsCheckboxes = document.querySelector('.market-trends');

    if (selectedValue === "state") {
        stateData = await fetchAllStatesData(dataPoint);
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
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count Growth (YoY)</label>
            `;

        enableStateEvents();
    } else if (selectedValue === "metro") {
        metroData = await fetchAllMetrosData(dataPoint);

        // map.setLayoutProperty("state-borders-layer", "visibility", "visible");
        map.setLayoutProperty("metro-borders-layer", "visibility", "visible");
        map.setLayoutProperty("metro-areas-layer", "visibility", "visible");
        investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventory %</label>
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
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count Growth (YoY)</label>
            `;
        enableMetroEvents();
    } else if (selectedValue === "county") {
        countyData = await fetchAllCountiesData(dataPoint);

        map.setLayoutProperty("state-borders-layer", "visibility", "visible");
        map.setLayoutProperty("county-areas-layer", "visibility", "visible");
        map.setLayoutProperty("county-borders-layer", "visibility", "visible");
        investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventory %</label>
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
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count Growth (YoY)</label>
            `;
        enableCountyEvents();
    } else if (selectedValue === "zipcode") {
        zipcodeData = await fetchAllZipcodesData(dataPoint);

        map.setLayoutProperty("state-borders-layer", "visibility", "visible");
        map.setLayoutProperty("zipcode-areas-layer", "visibility", "visible");
        map.setLayoutProperty("metro-areas-layer", "visibility", "visible");
        // map.setLayoutProperty("zipcode-borders-layer", "visibility", "visible");
        investorTrendsCheckboxes.innerHTML = `
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rental Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent for Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Cap Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Vacancy Rate</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Home Value to Rent Ratio</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Rent as % of Income</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Shadow Inventory %</label>
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
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory Surplus/Deficit</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Price Cut %</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Days on Market Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Inventory as % of Houses</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> Median Listing Price Growth (YoY)</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count</label>
                <label><input type="checkbox" onclick="onlyOneSelect();"/><span></span> New Listing Count Growth (YoY)</label>
            `;
        enableZipcodeEvents();
    }
}

const selectElement = document.querySelector("select");
map.on('load', () => {
    showLoading();
    map.addSource('state-borders', {
        type: 'geojson',
        data: statesBoundariesUrl
    });
    map.addSource('metro-borders', {
        type: 'geojson',
        data: metroBoundariesUrl
    });
    map.addSource('county-borders', {
        type: 'geojson',
        data: countiesBoundariesUrl
    });
    map.addSource('zipcode-borders', {
        type: 'geojson',
        data: zipcodeBoundariesUrl
    });

    map.addLayer({
        id: 'state-areas-layer',
        type: 'fill',
        source: 'state-borders',
        paint: {
            'fill-color': '#2A2A2A',
            'fill-opacity': 0.1
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
    map.addLayer({
        id: 'state-names-layer',
        type: 'symbol',
        source: 'state-borders',
        layout: {
            'text-field': [
                'concat',
                ['get', 'NAME10'], // Display state name
                '\n', // Add a new line
                ['get', ['to-string', ['get', 'GEOID10']], ['literal', stateData]], 
                // [
                //     'case',
                //     // Check if stateData has the normalized GEOID10 (removes leading zeros)
                //     ['in', ['to-string', ['*', ['get', 'GEOID10'], 1]], ['literal', Object.keys(stateData)]],
                //     ['get', ['to-string', ['*', ['get', 'GEOID10'], 1]], ['literal', stateData]],

                //     // If GEOID10 not found, check state abbreviation (STUSPS10)
                //     ['in', ['get', 'STUSPS10'], ['literal', Object.keys(stateData)]],
                //     ['get', ['get', 'STUSPS10'], ['literal', stateData]],

                //     // Default message if no data found
                //     'Population data not available'
                // ]
            ],
            'text-size': [
                'case',
                ['>', ['get', 'area'], 50000],
                18,
                0
            ],
            'text-anchor': 'center',
            'text-allow-overlap': false,
        },
        paint: {
            'text-color': '#FFFFFF',
            'text-halo-color': '#000000',
            'text-halo-width': 2
        }
    });

    map.addLayer({
        id: 'metro-borders-layer',
        type: 'line',
        source: 'metro-borders',
        paint: {
            'line-color': '#000000',
            'line-width': 2
        }
    });

    map.addLayer({
        id: 'metro-areas-layer',
        type: 'fill',
        source: 'metro-borders',
        paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.1
        }
    });

    map.addLayer({
        id: 'county-borders-layer',
        type: 'line',
        source: 'county-borders',
        paint: {
            'line-color': '#000000',
            'line-width': 2
        }
    });

    map.addLayer({
        id: 'county-areas-layer',
        type: 'fill',
        source: 'county-borders',
        paint: {
            'fill-color': '#00FF47',
            'fill-opacity': 0.1,
        }
    });

    map.addLayer({
        id: 'zipcode-borders-layer',
        type: 'line',
        source: 'zipcode-borders',
        paint: {
            'line-color': '#000000',
            'line-width': 2
        }
    });

    map.addLayer({
        id: 'zipcode-areas-layer',
        type: 'fill',
        source: 'zipcode-borders',
        paint: {
            'fill-color': '#00FF47',
            'fill-opacity': 0.1,
        }
    });


    hideLoading();
    map.setLayoutProperty("county-areas-layer", "visibility", "none");
    map.setLayoutProperty("county-borders-layer", "visibility", "none");
    map.setLayoutProperty("metro-areas-layer", "visibility", "none");
    map.setLayoutProperty("metro-borders-layer", "visibility", "none");
    map.setLayoutProperty("zipcode-areas-layer", "visibility", "none");
    map.setLayoutProperty("zipcode-borders-layer", "visibility", "none");
    map.setLayoutProperty("zipcode-areas-layer", "visibility", "none");
    map.on('mousemove', 'state-areas-layer', onStateMouseMove);
    map.on('mouseleave', 'state-areas-layer', onStateMouseLeave);
    map.on('click', 'state-areas-layer', onStateMouseClick);
});

async function onlyOneSelect() {
    const checkboxes = document.querySelectorAll('.my-dropdown-menu input[type="checkbox"]');
    const e = window.event;
    checkboxes.forEach(checkbox => {
        if (checkbox !== e.target) {
            checkbox.checked = false;
        }
    });
    e.target.checked = true;
    const label = e.target.closest('label');
    const text = label.childNodes[2];
    dataPoint = text.nodeValue.trim().replace(/\s+/g, ' ');

    const x = document.querySelector("select").value;
    showLoading();
    if (x == "state") {
        stateData = await fetchAllStatesData(dataPoint);
    } else if (x == "metro") {
        metroData = await fetchAllMetrosData(dataPoint);
    } else if (x == "county") {
        countyData = await fetchAllCountiesData(dataPoint);
    } else if (x == "zipcode") {
        zipcodeData = await fetchAllZipcodesData(dataPoint);
    }
    hideLoading();

    if (label.parentElement.classList.contains('investor-trends')) {
        category = "Investor Trends";
    } else if (label.parentElement.classList.contains('demographics')) {
        category = "Demographics";
    } else if (label.parentElement.classList.contains('affordability')) {
        category = "Affordability";
    } else if (label.parentElement.classList.contains('market-trends')) {
        category = "Market Trends";
    }
}

async function onCountyMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const countyName = e.features[0].properties.COUNTY_STATE_NAME;
    const geoid = e.features[0].properties.GEOID;
    let thisCountyData = countyData[geoid] ? countyData[geoid] : {};
    if (currentPopup) {
        currentPopup.remove();
    }
    let html = `<div>
    <div class="hover-pin-title">
        <p>${countyName}</p>
        <div class="container">
            `;

    let temp = `<div class="row"><span>${dataPoint}:</span><span>${countyData[geoid]}</span></div>`;
    html += temp + `</div></div></div>`;
    currentPopup = new mapboxgl.Popup({ closeButton: false, offset: [0, -20], className: 'no-arrow-popup' })
        .setLngLat(e.lngLat)
        .setHTML(html)
        .addTo(map);

    highlightedCityId = geoid;

    highlightedCityId = geoid;
    map.setPaintProperty('county-areas-layer', 'fill-color', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        '#FF00FF',
        '#00FF47'
    ]);
}
function onCountyMouseLeave(e) {
    map.getCanvas().style.cursor = '';
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
    highlightedCityId = null;
}
async function onCountyMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }

    const countyName = e.features[0].properties.COUNTY_STATE_NAME;
    code = e.features[0].properties.GEOID;
    abbreviation = countyName;
    modalTitle = countyName;
    openGraphModal();
}

function dataFormat(value, dataPoint, display) {
    if (display == "display") {
        if (dataJson[dataPoint]["format"].displaysuffix == 'K') {
            if (Number(value) >= 1000000) {
                value = Number((Number(value) / 1000000).toFixed(dataJson[dataPoint]["format"].displayfixed)).toLocaleString() + 'M'; // Convert to M (millions)
            } else if (value >= 1000) {
                value = Number((Number(value) / 1000).toFixed(dataJson[dataPoint]["format"].displayfixed)).toLocaleString() + 'K';
            } else {
                value = Number(Number(value).toFixed(dataJson[dataPoint]["format"].displayfixed)).toLocaleString() + dataJson[dataPoint]["format"].displaysuffix;
            }
        } else {
            value = Number(value).toLocaleString() + dataJson[dataPoint]["format"].displaysuffix;
        }
    }
    if (display == "graph") {
        if (dataJson[dataPoint]["format"].graphsuffix == 'K') {
            if (Number(value) >= 1000000) {
                value = Number((Number(value) / 1000000).toFixed(dataJson[dataPoint]["format"].graphfixed)).toLocaleString() + 'M'; // Convert to M (millions)
            } else if (value >= 1000) {
                value = Number((Number(value) / 1000).toFixed(dataJson[dataPoint]["format"].graphfixed)).toLocaleString() + 'K';
            } else {
                value = Number(Number(value).toFixed(dataJson[dataPoint]["format"].graphfixed)).toLocaleString() + dataJson[dataPoint]["format"].graphsuffix;
            }
        } else {
            value = Number(value).toLocaleString() + dataJson[dataPoint]["format"].graphsuffix;
        }
    }
    return `${dataJson[dataPoint]["format"].prefix}${value}`;
}

async function onZipcodeMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const zipCode = e.features[0].properties.ZCTA5CE10;

    if (highlightedCityId && highlightedCityId !== zipCode) {
        map.setPaintProperty('zipcode-areas-layer', 'fill-opacity', 0.3);
    }

    highlightedCityId = zipCode;
    map.setPaintProperty('zipcode-areas-layer', 'fill-opacity', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        0.6,
        0.3
    ]);
}

function onZipcodeMouseLeave(e) {
    map.getCanvas().style.cursor = '';  // Reset cursor
    map.setPaintProperty('county-areas-layer', 'fill-opacity', 0.3);
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
    highlightedCityId = null;
}
async function onZipcodeMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    const zipCode = e.features[0].properties.ZCTA5CE10;

    // let checkedItems = getCheckedItems();
    // const result = await fetchData(checkedItems, stateCode, countyCode);
    code = zipCode;
    abbreviation = zipCode;
    modalTitle = zipCode;

    openGraphModal();

}
async function onStateMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const stateName = e.features[0].properties.NAME10;
    const abbreviation = e.features[0].properties.STUSPS10;
    const geoid = e.features[0].properties.GEOID10;
    let int_geoid = String(Number(geoid))

    if (currentPopup) {
        currentPopup.remove();
    }
    let html = `<div>
    <div class="hover-pin-title">
        <p>${stateName}</p>
        <div class="container">
            `;
    const value = stateData[int_geoid] ? stateData[int_geoid] : stateData[abbreviation] ? stateData[abbreviation] : "";
    let temp = `<div class="row"><span>${dataPoint}:</span><span>${dataFormat(value, dataPoint, "display")}</span></div>`;
    html += temp + `</div></div></div>`;
    currentPopup = new mapboxgl.Popup({ closeButton: false, offset: [0, -20], className: 'no-arrow-popup' })
        .setLngLat(e.lngLat)
        .setHTML(html)
        .addTo(map);

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


async function onStateMouseClick(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }

    const stateName = e.features[0].properties.NAME10;
    code = e.features[0].properties.GEOID10;
    abbreviation = e.features[0].properties.STUSPS10;
    modalTitle = stateName;

    openGraphModal();
}

async function onMetroMouseMove(e) {
    if (!e.features || e.features.length === 0) {
        return;
    }
    map.getCanvas().style.cursor = 'pointer';
    const geoid = e.features[0].properties.GEOID;
    if (currentPopup) {
        currentPopup.remove();
    }

    highlightedCityId = geoid;
    map.setPaintProperty('metro-borders-layer', 'line-width', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        7,
        2
    ]);
    map.setPaintProperty('metro-areas-layer', 'fill-color', [
        'case',
        ['==', ['get', 'GEOID'], highlightedCityId],
        '#00ff00',
        '#ff0000'
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

    const metroName = e.features[0].properties.NAME;
    code = e.features[0].properties.GEOID;
    abbreviation = metroName;
    modalTitle = metroName;

    openGraphModal();
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

function updateChart(rangeValues, fullLabels, fullData) {
    const [minValue, maxValue] = rangeValues.map(val => parseInt(val, 10));
    const newLabels = fullLabels.slice(minValue - 1, maxValue);
    const newData = fullData.slice(minValue - 1, maxValue);
    if (chartInstance) {
        chartInstance.data.labels = newLabels;
        chartInstance.data.datasets[0].data = newData;
        chartInstance.data.datasets[1].data = newData;
        chartInstance.update();
    }
}
async function openGraphModal() {

    const panelContainer = document.querySelector('.panel-container');
    function changeLeftSlider(container) {
        const children = container.children;
        panelContainer.innerHTML = '';
        for (let i = 0; i < children.length; i++) {
            panelContainer.innerHTML += `
                <div class="panel" onclick="panelClick(event)">${children[i].childNodes[2].nodeValue.trim().replace(/\s+/g, ' ')}<br><span class="value-text">${shortDescription[children[i].childNodes[2].nodeValue.trim().replace(/\s+/g, ' ')]}</span></div>
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

    showData(document.querySelector('.year-month-toggle-container input').checked);
}

async function showData(yoy) {
    document.querySelector('.graphTitle').textContent = modalTitle;
    document.querySelector('.graph-title').textContent = dataPoint;
    document.querySelector('.graph-description').textContent = longDescription[dataPoint]
    document.querySelector('.data-selector').value = category;

    const graphModal = document.getElementById('graphModal');
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    const x = document.querySelector("select").value;

    showLoading();
    let res;
    if (x == "state") {
        if (yoy == true) {
            res = await fetchOneStateMoMData(code, abbreviation, dataPoint);
        } else {
            res = await fetchOneStateYoYData(code, abbreviation, dataPoint);
        }
    } else if (x == "metro") {
        if (yoy == true) {
            res = await fetchOneMetroMoMData(code, abbreviation, dataPoint);
        } else {
            res = await fetchOneMetroYoYData(code, abbreviation, dataPoint);
        }
    } else if (x == "county") {
        if (yoy == true) {
            res = await fetchOneCountyMoMData(code, abbreviation, dataPoint);
        } else {
            res = await fetchOneCountyYoYData(code, abbreviation, dataPoint);
        }
    } else if (x == "zipcode") {
        if (yoy == true) {
            res = await fetchOneZipcodeMoMData(code, abbreviation, dataPoint);
        } else {
            res = await fetchOneZipcodeYoYData(code, abbreviation, dataPoint);
        }
    }
    hideLoading();
    fullLabels = res['fullLabels'];
    fullData = res['fullData'];
    rangeSlider.noUiSlider.updateOptions({
        start: [1, fullLabels[0].length],
        connect: true,
        step: 1,
        range: {
            min: 1,
            max: fullLabels[0].length
        },
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });
    rangeSlider.noUiSlider.on('update', (values) => {
        updateChart(values, fullLabels[0], fullData[0]);
    });
    graphModal.classList.add('active');
    rangeSlider.noUiSlider.set([1, fullLabels[0].length]);
    if (chartInstance) {
        chartInstance.destroy();
    }

    const line_gradient = ctx.createLinearGradient(0, 0, 700, 0);
    line_gradient.addColorStop(0, 'rgb(252, 210, 151)');
    line_gradient.addColorStop(0.25, 'rgb(234, 84, 139)');
    line_gradient.addColorStop(0.5, 'rgb(136, 47, 173)');
    line_gradient.addColorStop(0.75, 'rgb(44, 66, 222)');
    line_gradient.addColorStop(1, 'rgb(17, 178, 247)');

    const bar_gradient = ctx.createLinearGradient(0, 0, 0, 400);
    bar_gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    bar_gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: fullLabels[0],
            datasets: [{
                type: 'line',   // 🔹 Column Chart
                label: dataPoint,
                data: fullData[0],
                fullLabels: fullLabels,
                fullData: fullData,
                borderColor: line_gradient,
                backgroundColor: 'rgba(76, 175, 80, 0)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: line_gradient, // White points
                pointBorderColor: 'white',  // Points match the line gradient
                pointRadius: 5,
            }, {
                type: 'bar',   // 🔹 Column Chart
                label: dataPoint,
                data: fullData[0],
                backgroundColor: bar_gradient,
                datalabels: {
                    display: false  // This will hide data labels for the bar chart
                },
                barThickness: 20
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        color: '#e0e0e0',
                        callback: function (value, index, values) {
                            if (value >= 1000000) {
                                return (value / 1000000).toFixed(1) + 'M'; // Convert to M (millions)
                            } else if (value >= 1000) {
                                return (value / 1000).toFixed(1) + 'K'; // Convert to K (thousands)
                            }
                            return Number(value).toFixed(2);
                        }
                    },
                    grid: { color: '#333' },
                    beginAtZero: false
                },
                x: {
                    ticks: {
                        color: '#e0e0e0',
                        grid: { color: '#333' },

                    },
                    grid: { color: '#333' }
                }
            },
            plugins: {
                legend: {
                    labels: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: function () {
                            return [];
                        },
                        label: function (context) {
                            let index = context.dataIndex;
                            let dataset = context.dataset;
                            
                            let res = [];
                            let label1 = dataPoint;
                            let value1 = dataset.fullData ? dataset.fullData[0][index] : 'Unknown';
                            
                            res.push(`${label1} : ${value1}`);
                            for (var i = 0; i < dataset.fullData.length - 1; i ++) {
                                let label = dataset.fullLabels ? dataset.fullLabels[i + 1][index] : 'Unknown';
                                let value = dataset.fullData ? dataset.fullData[i + 1][index] : 'Unknown';
                                res.push(`${label} : ${value}`);
                            }
                            return res;
                        }
                    }
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: '#e0e0e0',
                    formatter: function (value, context) {
                        if (yoy) {
                            if (context.dataIndex % 12 === 0) {
                                return dataFormat(value, dataPoint, "graph");
                            } else {
                                return '';
                            }
                        } else {
                            return dataFormat(value, dataPoint, "graph");
                        }
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

function panelClick(e) {
    let panel = e.currentTarget;
    dataPoint = panel.childNodes[0].nodeValue.trim().replace(/\s+/g, ' ');
    const checkboxes = document.querySelectorAll('.my-dropdown-menu input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.closest('label').childNodes[2].nodeValue.trim().replace(/\s+/g, ' ') != dataPoint) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    });
    console.log(dataPoint);
    showData(document.querySelector('.year-month-toggle-container input').checked);
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
                <div class="panel" onclick="panelClick(event)">${children[i].childNodes[2].nodeValue.trim().replace(/\s+/g, ' ')}<br><span class="value-text">${shortDescription[children[i].childNodes[2].nodeValue.trim().replace(/\s+/g, ' ')]}</span></div>
            `;
            }
        }
        category = this.value;
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

document.addEventListener('DOMContentLoaded', function () {
    const yearMonthToggle = document.querySelector('.year-month-toggle-container input');
    yearMonthToggle.addEventListener('change', function () {
        showData(this.checked);
    });
})

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
