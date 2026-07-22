// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-an-introduction-to-continuum-mechanics",
          title: 'An Introduction to Continuum Mechanics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Continuum_Mechanics/";
            },},{id: "books-an-introduction-to-the-finite-element-method",
          title: 'An Introduction to the Finite Element Method',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/FEM/";
            },},{id: "books-nonlinear-finite-elements-for-continua-and-structures-2nd-edition",
          title: 'Nonlinear Finite Elements for Continua and Structures, 2nd Edition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Nonlinear%20Finite%20Elements/";
            },},{id: "books-nonlinear-solid-mechanics-a-continuum-approach-for-engineering",
          title: 'Nonlinear Solid Mechanics A Continuum Approach for Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Nonlinear_Solid_Mechanics/";
            },},{id: "books-polymer-physics-chemistry",
          title: 'Polymer Physics (Chemistry)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/polymer_physics/";
            },},{id: "news-i-got-my-ielts-academic-certificate-with-an-overall-7-5-band-score",
          title: '📜 I got my IELTS Academic certificate with an overall 7.5 band score!...',
          description: "",
          section: "News",},{id: "news-great-news-my-first-research-article-is-accepted-in-a-q1-journal-this-is-the-start-of-a-long-journey-for-me-maybe-my-biggest-academic-achievement-so-far",
          title: '📣 Great news! 🎉 My first research article is accepted in a Q1...',
          description: "",
          section: "News",},{id: "news-i-got-admitted-to-michigan-state-university-️-smile-sparkles-go-spartans",
          title: '💚 I got admitted to Michigan State University! 🏛️ :smile: :sparkles: Go Spartans!...',
          description: "",
          section: "News",},{id: "news-i-ranked-12-among-many-in-the-nation-wide-university-entrance-exam-konkur-for-phd-studies-yeay",
          title: '🎓 I ranked 🏆 12 among many in the nation-wide university entrance exam...',
          description: "",
          section: "News",},{id: "news-i-ve-officially-started-my-new-role-as-an-ielts-teacher-mentor-at-the-nogolearn-institute-can-t-wait-to-help-my-students-grow",
          title: '📣 I’ve officially started my new role as an IELTS teacher/mentor at the...',
          description: "",
          section: "News",},{id: "news-finally-after-almost-two-years-of-waiting-my-first-book-chapter-is-going-to-be-published-in-springer-nature-what-a-relief-check-it-here-toward-responsive-polymer-actuators-based-on-novel-composite-structures",
          title: '📣 Finally!! After almost two years of waiting, my first book chapter is...',
          description: "",
          section: "News",},{id: "news-a-preprint-of-my-latest-under-review-article-is-now-available-on-the-researchsquare-platform-check-it-here-link-i-ll-keep-you-updated-on-the-review-process",
          title: 'A preprint of my latest under‑review article is now available on the ResearchSquare...',
          description: "",
          section: "News",},{id: "projects-deep-learning",
          title: 'Deep Learning',
          description: "The Core of Modern AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_DL/";
            },},{id: "projects-constitutive-modeling",
          title: 'Constitutive Modeling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_HyperelasticMaterials/";
            },},{id: "projects-machine-learning",
          title: 'Machine Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_ML/";
            },},{id: "projects-reinforcement-learning",
          title: 'Reinforcement Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_RL/";
            },},{id: "teaching-finite-element-method-fem",
          title: 'Finite Element Method (FEM)',
          description: "Fundamentals and Applications 🧩",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/teaching_FEM/";
            },},{id: "teaching-non-linear-solid-mechanics",
          title: 'Non-linear Solid Mechanics',
          description: "Advanced Mechanics for Real-world Problems 🌟",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/teaching_NLSM/";
            },},{id: "teaching-research-methodology",
          title: 'Research Methodology',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/teaching_ResearchMethodology/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61.%73%61%66%61%65%69@%75%74.%61%63.%69%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohsafaei", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jD_-4JcAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohsafaei", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Mohammad-Safaei-10/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("mailto:mohammadsf1998@gmail.com", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
