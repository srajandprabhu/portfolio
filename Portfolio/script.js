function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); 
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block'; 
        } else {
            project.style.display = 'none';
        }
    });
}


function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imageSrc;
}


function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');
    
    if (name === '' || email === '' || message === '') {
        feedback.innerHTML = 'Please fill in all fields.';
        feedback.style.color = 'red';
        return false;
    }
    
    feedback.innerHTML = 'Thank you for your message!';
    feedback.style.color = 'green';
    return true;
}

