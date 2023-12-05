document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const announcementsSection = document.getElementById('announcements');

  searchInput.addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
      console.log('Searching for:', searchInput.value);
      // Add AJAX call or Fetch API logic here to perform the search
    }
  });

  // Example event data
  const events = [
    { year: '2018', name: 'Congress', description: 'The goal of this World Congress is to promote dialogue concerning various crucial philosophical issues in today’s world and to explore the role of philosophy in our complicated times. The world we live in today faces many urgent issues that require sustained and productive cross-cultural dialogue.', image: 'images/congress-2018.jpg' },
    { year: '2016', name: 'Congress', description: 'The 2016 XI ISUD World Congress was conducted as a celebration of the Society’s founding twenty-eight years ago in Warsaw. ', image: 'congress-2016.png' },
    { year: '', name: 'All past Events', description: 'example: 1st International Symposium in Warsaw, Poland, November 1989 (ISU), 2nd International Symposium in Berlin, Germany, August 1990 (ISU),3rd International Symposium in St. Catherine’s, Canada, August 1991 (ISU) and 4th International Symposium in London, May 1992 (ISU)', image: 'congress-2016.png' },
    { year: '', name: 'Videos', description: 'Highlights all the videos...', image: 'congress-2016.png' },
    // More events...
  ];

  // Function to create and append event cards
  function createEventCards(events) {
    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="images/${event.image}" alt="${event.name}" class="event-image">
        <div class="event-content">
          <h3>${event.year} ${event.name}</h3>
          <p>${event.description}</p>
        </div>
      `;
      announcementsSection.appendChild(card);
    });
  }

  // Call the function to create event cards
  createEventCards(events);
});

// Form validation code
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();