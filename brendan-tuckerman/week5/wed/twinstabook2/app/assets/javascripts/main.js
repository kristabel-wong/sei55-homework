console.log('Mic Check');

const  checkDelete = (id) => {
    if (confirm('Are you sure you want to delete your account?\n\nWARNING: This cannot be undone.')) {
        // Remove it
        console.log('Account was removed from the database.');
        return window.location.href = `${id}/delete`;
        
      } else {
        // Do nothing!
        console.log('Thing was not removed from the database.');
        return window.location.href = `${id}`;
      }

 
};