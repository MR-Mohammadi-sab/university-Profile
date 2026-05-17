
    import {featuresData,testimonialsData,faqData,researchData,blogData ,coursesData} from "./data.js"

   async function renderCourses(containerId) {
        
        const container = document.getElementById(containerId);
        if (!container) return;
         coursesData.forEach(course =>container.innerHTML+= `
            <div class="course-col">
                <img src="${course.image}" alt="${course.name}">
                <div class="course-info">
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <button class="btn btn-outline" style="margin-top: 10px;">اطلاعات بیشتر</button>
                </div>
            </div>
        `)
    }

    function renderFeatures(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = featuresData.map(f => `
            <div class="feature-card">
                <i class="${f.icon} feature-icon"></i>
                <div class="feature-title">${f.title}</div>
                <p>${f.desc}</p>
            </div>
        `).join('');
    }

    function renderTestimonials() {
        const container = document.getElementById('testimonialsGrid');
        if (container) {
            container.innerHTML = testimonialsData.map(t => `
                <article class="testimonial-card">
                    <i class="fas fa-quote-right" style="color: var(--secondary); font-size: 2rem;"></i>
                    <blockquote style="margin: 1rem 0;">"${t.text}"</blockquote>
                    <h4 style="font-weight: 800;">${t.author}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${t.role}</span>
                </article>
            `).join('');
        }
    }

    function renderFAQ() {
        const container = document.getElementById('faqGrid');
        if (container) {
            container.innerHTML = faqData.map((item) => `
                <div class="faq-item" >
                    <div class="faq-question">${item.q} <i class="fas fa-chevron-down"></i></div>
                    <p class="faq-answer">${item.a}</p>
                </div>
            `).join('');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.addEventListener('click', () => item.classList.toggle('active'));
            });
        }
    }



    function renderResearch() {
        const container = document.getElementById('researchGrid');
        if (container) {
            container.innerHTML = researchData.map(r => `
                <div class="research-card">
                    <i class="${r.icon}" style="font-size: 3rem; color: var(--secondary); margin-bottom: 1rem; display: block;"></i>
                    <h3>${r.title}</h3>
                    <p>${r.desc}</p>
                    <button class="btn btn-outline" style="margin-top: 1rem;">مشاهده جزئیات</button>
                </div>
            `).join('');
        }
    }

    function renderBlog() {
        const container = document.getElementById('blogGrid');
        if (container) {
            container.innerHTML = blogData.map(b => `
                <div class="blog-card">
                    <img src="${b.image}" alt="${b.title}">
                    <div class="blog-content">
                        <h3>${b.title}</h3>
                        <p>${b.excerpt}</p>
                        <button class="btn btn-outline" style="margin-top: 0.5rem;">ادامه مطلب</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Dark Mode
    const toggleDark = document.querySelectorAll('.darkModeToggle');
    const getTheme=localStorage.getItem("theme")
    if(getTheme){
        if(getTheme==="dark"){
            document.body.classList.add("dark");
            toggleDark[0].textContent='☀️ روشن'
            toggleDark[1].textContent='☀️ روشن'
        }
        else {
            document.body.classList.remove("dark")
            toggleDark[0].textContent='🌙 تیره'
            toggleDark[1].textContent='🌙 تیره'
        }
    }

    toggleDark.forEach(btn=>btn.addEventListener("click",() => {
        document.body.classList.toggle('dark');
        btn.textContent = document.body.classList.contains('dark') ? '☀️ روشن' : '🌙 تیره';
        const saved =document.body.classList.contains('dark')?"dark":"light"
        localStorage.setItem("theme",saved)
    }) 
)
    
    const pages = ['home', 'courses', 'features', 'research', 'blog', 'about', 'contact'];
    function showPage(pageId) {
        pages.forEach(p => { 
            const el = document.getElementById(`${p}-page`); if (el) el.classList.remove('active-page');
         });
        document.getElementById(`${pageId}-page`).classList.add('active-page');
        window.scrollTo(0, 0);
        document.title=`${pageId} /پوهنتون البرز `
  
    }
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
             e.preventDefault(); 
             const page = link.getAttribute('data-page');
              if (page && pages.includes(page)) showPage(page); });
    });

    // mobile menu 
   const mobilBtnOpen=document.getElementById("bars")
   const mobileMenu=document.querySelector(".mobile-container")
   mobilBtnOpen.addEventListener("click",()=>{
    mobileMenu.classList.add("activMobil")
   })
   const mobilBtnClose=document.getElementById("cross")
   mobilBtnClose.addEventListener("click",()=>{
    mobileMenu.classList.remove("activMobil")
   })
    renderCourses('courseRow');
    renderCourses('coursesPageRow');
    renderFeatures('featuresGrid');
    renderFeatures('featuresPageGrid');
    renderTestimonials();
    renderFAQ();
    renderResearch();
    renderBlog();
