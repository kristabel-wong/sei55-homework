console.log('Mic Check');

function check_delete () {
    if (confirm('Are you sure you want to save this thing into the database?')) {
        // Save it!
        console.log('Thing was saved to the database.');
      } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
      }
};