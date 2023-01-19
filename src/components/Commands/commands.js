/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat";
import getnp from "../../utils/spotify";
export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    // cat: {
    //     description: 'Get a cute cat image.',
    //     usage: 'cat',
    //     fn: async () => {
    //         const url = await getcat()
    //         window.open(url, '_blank')
    //         return "fetching cat...\ncat fetched successfully!"
    //     }
    // },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () => {
        return "About Me.\n---\nGender :- Male\nAge :- 23\nOccupation :- Web Developer\nHobbies :- Gaming, Painting, Player Guitar\nEmail   :- rhine.cse@gmail.com\nPhone :- +8801752389981\nGithub :- https://github.com/XPro-Gamer-Rhine\nLinedin :- https://www.linkedin.com/in/rhineul-islam-737200180/\n---\n";
      },
    },
    twitter: {
      description: "Opens my Twitter Handle.",
      usage: "twitter",
      fn: () => {
        window.open("https://twitter.com/ErrorrCoding", "_blank");
        return "opening twitter handle...";
      },
    },
    github: {
      description: "Opens my GitHub Profile.",
      usage: "twitter",
      fn: () => {
        window.open("https://github.com/XPro-Gamer-Rhine", "_blank");
        return "opening github account...";
      },
    },
    linkedin: {
      description: "Opens my Linkedin Account.",
      usage: "twitter",
      fn: () => {
        window.open(
          "https://www.linkedin.com/in/rhineul-islam-737200180/",
          "_blank"
        );
        return "opening linkedin account...";
      },
    },
    languages: {
      description: "Languages I know.",
      usage: "languages",
      fn: () => {
        return `
                    these are the languages I know.\n---\n
                    english          - 80%
                    bangla           - 100%
                    c#               - 60%
                    python           - 80%
                    javascript       - 80%
                    html5            - 90%
                    css3             - 80%
                    php              - 50%
                    solidity         - 50% - [learning]
                    c++              - 30% - \n---\n
                `;
      },
    },
    frameworks: {
      description: "Frameworkes I know.",
      usage: "frameworkes",
      fn: () => {
        return `
                    these are the frameworkes I know.\n---\n
                    react js         - 80%
                    next js          - 80%
                    ethers js        - 60%
                    scrapy           - 80%
                    typescript       - 80%
                    unity 3D         - 90%
                    tailwindcss      - 80%
                    laravel          - 50%
                    express js       - 50% 
                    unreal           - 30% - [learning]\n---\n
                `;
      },
    },
    skills: {
      description: "Skills I have.",
      usage: "skills",
      fn: () => {
        return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 80%
                    painting         - 70%
                    playing guitar   - 60%
                    team work        - 90%
                    gaming           - 100%\n---\n
                `;
      },
    },
    projects: {
      description: "Projects I have worked on.",
      usage: "projects",
      fn: () => {
        return `
                    Cool projects I have worked on.\n---\n
                    'RTerm'                           | 'terminal portfolio'   | 'react js'
                    'Dorac'                           | 'Homepage for Dorac'   | 'javascript'
                    'Dorac Art'                       | 'NFT Marketplace'      | 'react js'
                    'CV Maker'                        | 'Online CV maker'      | 'react js'
                    'Task Manger'                     | 'To Do app'            | 'next js'
                    'twitter Clone'                   | 'Twitter Clone Site'   | 'react'\n---\n
                `;
      },
    },
    editor: {
      description: "Details about my current editor",
      usage: "editor",
      fn: () => {
        return `
                    Editor: Visual Studio Code\n
                    Theme : Catpuccin\n
                    Font  : Consolas
                `;
      },
    },
    repo: {
      description: "Opens this website's github repository.",
      usage: "repo",
      fn: () => {
        window.open("https://github.com/Coding-Err0r/RTerm.git", "_blank");
        return "opening repository...";
      },
    },
    spotify: {
      description: "Get info about my recently played song.",
      usage: "spotify",
      fn: async () => {
        const item = await getnp();
        return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `;
      },
    },
  },
  overwrites: {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    cd: {
      description: "Change directory, not really, lol!",
      usage: "cd <directory>",
    },
    ls: {
      description: "List files in the current directory",
      usage: "ls",
    },
    mkdir: {
      description: "Make a directory",
      usage: "mkdir <directory>",
    },
    cls: {
      description: "Clears the terminal",
      usage: "clear",
    },
    cat: {
      description: "Get a cute cat image.",
      usage: "cat",
    },
  },
};
