function visaRecept(receptNamn) {
    alert("Här kommer mer information om " + receptNamn + " snart!");
}
document.getElementById('cta-button').addEventListener('click', function(event) {
    var clickID = event.target.id;
    var clickText = event.target.getAttribute('data-text');
    console.log('Click ID:', clickID);
    console.log('Click Text:', clickText);

    // Här kan du lägga till Google Tag Manager-event om du vill
});
