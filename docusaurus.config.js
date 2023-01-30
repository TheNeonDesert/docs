// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Neon Desert",
  tagline: "where anything can happen...",
  url: "https://theneondesert.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "TheNeonDesert", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/TheNeonDesert/docs/tree/master/",
          routeBasePath: "/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'The Neon Desert',
        logo: {
          alt: "The Neon Desert",
          src: "img/logo.png",
        },
        items: [
          {
            position: "right",
            label: "Play",
            href: "https://game.theneondesert.com",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "The Neon Desert",
            items: [
              {
                label: "Homepage",
                href: "https://theneondesert.com",
              },
              {
                label: "Play Game",
                href: "https://game.theneondesert.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/TheNeonDesert",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/V7nxNN3DYh",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/theneondesert",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/TheNeonDesert",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/TheNeonDesert",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Neon Desert`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
