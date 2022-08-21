console.log('Mic Check');

const  checkDelete = (subPath, id) => {
    if (confirm('Are you sure you want to remove this thing from the database?\n\nWARNING: This cannot be undone.')) {
        // Remove it
        console.log('Thing was removed from the database.');
        return window.location.href = `/${subPath}/${id}/delete`;
        
      } else {
        // Do nothing!
        console.log('Thing was not removed from the database.');
        return window.location.href = `/${subPath}`;
      }
};
