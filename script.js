function determineHouse() {
    let gryffindorCount = 0;
    let hufflepuffCount = 0;
    let ravenclawCount = 0;
    let slytherinCount = 0;

    // Get all answers selected by the user
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Count the occurrences of each house based on the selected answers
    answers.forEach(answer => {
        if (answer.value === 'gryffindor') {
            gryffindorCount++;
        } else if (answer.value === 'hufflepuff') {
            hufflepuffCount++;
        } else if (answer.value === 'ravenclaw') {
            ravenclawCount++;
        } else if (answer.value === 'slytherin') {
            slytherinCount++;
        }
    });

    // Determine the house based on the highest count
    let house = '';
    let maxCount = Math.max(gryffindorCount, hufflepuffCount, ravenclawCount, slytherinCount);

    if (gryffindorCount === maxCount) {
        house = 'Gryffindor';
    } else if (hufflepuffCount === maxCount) {
        house = 'Hufflepuff';
    } else if (ravenclawCount === maxCount) {
        house = 'Ravenclaw';
    } else if (slytherinCount === maxCount) {
        house = 'Slytherin';
    }

    // Show the result to the user
    document.getElementById('result').innerHTML = `You belong in ${house}!`;
}