document.getElementById('fetchButton').addEventListener('click', fetchUsers);

function fetchUsers() {
    // Fetch the user data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Dynamically create the DOM structure and display user data
            const userContainer = document.getElementById('userContainer');
            userContainer.innerHTML = ''; // Clear the container before displaying new content

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                // Create user name element
                const userName = document.createElement('h3');
                userName.textContent = user.name;

                // Create user email element
                const userEmail = document.createElement('p');
                userEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;

                // Create user phone element
                const userPhone = document.createElement('p');
                userPhone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

                // Create user address element
                const userAddress = document.createElement('p');
                userAddress.innerHTML = `<strong>Address:</strong> ${user.address.street}, ${user.address.city}`;

                // Append each element to the user card
                userCard.appendChild(userName);
                userCard.appendChild(userEmail);
                userCard.appendChild(userPhone);
                userCard.appendChild(userAddress);

                // Append the user card to the container
                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching the users:', error);
            const userContainer = document.getElementById('userContainer');
            userContainer.innerHTML = '<p>Failed to fetch users. Please try again later.</p>';
        });
}
