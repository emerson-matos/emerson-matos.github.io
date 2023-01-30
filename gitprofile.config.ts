// gitprofile.config.js

const CONFIG = {
  github: {
    username: 'emerson-matos', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dinorun',
          description: 'A webassembly Dino Run like',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/121px-WebAssembly_Logo.svg.png',
          link: 'https://emerson-matos.github.io/comp-grafica/comp-grafica/projeto1/projeto1.html',
        },
        {
          title: 'ScreenSaver',
          description: 'A webassembly application, a screensaver like.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/121px-WebAssembly_Logo.svg.png',
          link: 'https://emerson-matos.github.io/comp-grafica/comp-grafica/projeto2/projeto2.html',
        },
        {
          title: 'ScreenSaver Improved',
          description:
            'A webassembly application, a screensaver like improved.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/121px-WebAssembly_Logo.svg.png',
          link: 'https://emerson-matos.github.io/comp-grafica/comp-grafica/projeto2/imp/projeto2imp.html',
        },
        {
          title: 'Death Star',
          description:
            'A webassembly application, you will be able to interact with a Death Star 3D model.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/121px-WebAssembly_Logo.svg.png',
          link: 'https://emerson-matos.github.io/comp-grafica/comp-grafica/projeto3/projeto3.html',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Emerson Matos',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'emerson-matos',
    x: 'emegsonn',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://emerson-matos.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['Clojure', 'Docker', 'Git', 'Java', 'JavaScript', 'React.js'],
  experiences: [
    {
      company: 'Nubank',
      position: 'Software Engineer',
      from: 'July 2021',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/nubank/',
    },
    {
      company: 'Itau Unibanco',
      position: 'Software Engineer',
      from: 'April 2019',
      to: 'June 2021',
      companyLink: 'https://www.linkedin.com/company/itau/',
    },
    {
      company: 'Itau Unibanco',
      position: 'Software Developer Intern',
      from: 'June 2018',
      to: 'Mar 2019',
      companyLink: 'https://www.linkedin.com/company/itau/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'UFABC',
      degree: 'Bachelor in Computer Science',
      from: '2015',
      to: '2024',
    },
    {
      institution: 'UFABC',
      degree: 'Bachelor in Science and Technology',
      from: '2015',
      to: '2020',
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>  and ❤️`,
};

export default CONFIG;
