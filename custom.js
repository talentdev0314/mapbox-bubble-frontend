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

