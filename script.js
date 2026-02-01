const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const catImg = document.getElementById('cat-img');

// Move the "No" button when the cursor touches it
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Change content when "Yes" is clicked
function celebrate() {
    question.innerHTML = "YAY! See you then! 💖";
    catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueG56Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbxxvDUQM/giphy.gif";
    noBtn.style.display = 'none'; // Hide the No button
}
