// Sample driver names for random selection
const driverNames = ['John Doe', 'Jane Smith', 'Alice Brown', 'Bob White', 'Charlie Black'];

// Function to generate random contact numbers
function generateRandomNumber() {
    let phoneNumber = '9'; // Start with 9 for a valid mobile number
    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

// Function to show transports in the city
function showTransports(city) {
    // Generate a random number of transports between 1 and 5
    const transports = Math.floor(Math.random() * 5) + 1;

    // Get the transport table body
    const tableBody = document.querySelector('#transportTable tbody');

    // Clear the previous rows
    tableBody.innerHTML = '';

    // Add a new row with the city name and the random number of transports
const newRow = `<tr>
                    <td>${city}</td>
                    <td onclick="showDriverDetails(${transports})" style="cursor:pointer; color:blue; text-decoration:underline;">${transports}</td>
                </tr>`;
    tableBody.innerHTML = newRow;

    // Hide the driver details table if it's already visible
    document.getElementById('driverDetails').style.display = 'none';
}

// Function to show driver details based on number of transports
function showDriverDetails(numTransports) {
    // Get the driver details table body
    const driverTableBody = document.getElementById('driverTableBody');

    // Clear the previous rows
    driverTableBody.innerHTML = '';

    // Add rows with random driver names and phone numbers for each transport
    for (let i = 0; i < numTransports; i++) {
        const randomDriver = driverNames[Math.floor(Math.random() * driverNames.length)];
        const randomPhone = generateRandomNumber();

    const newRow = `<tr>
                        <td>${randomDriver}</td>
                        <td>${randomPhone}</td>
                    </tr>`;
        driverTableBody.innerHTML += newRow;
    }

    // Show the driver details table
    document.getElementById('driverDetails').style.display = 'block';
}
