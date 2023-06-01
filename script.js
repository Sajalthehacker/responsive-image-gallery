const Img = Array.from(document.getElementsByTagName('img'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')

            // observer.unobserve(entry.target)
        }
        else{
            entry.target.classList.remove('show')
        }
    })
    console.log(entries)
}, {
    threshold: 0.1,
    // rootMargin: "60px"
})
console.log(Img)
Img.forEach((img1) => {
    observer.observe(img1)
})

// observer.observe(Img)