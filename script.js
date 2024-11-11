document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('specialMessage').classList.toggle('hidden');
    document.getElementById('message').innerText = "Here's a special message for you!";
});