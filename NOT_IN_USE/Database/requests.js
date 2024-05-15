console.log('Writing things to make it all have sense')

async function StudentList() {
    const response = await fetch("http://localhost:3000/getallstudents");
    const movies = await response.json();
    console.log(movies);
  }

StudentList();