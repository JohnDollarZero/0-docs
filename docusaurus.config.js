/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Layer Zero',
  tagline: 'Gains without pains!',
  url: 'https://0.masternode.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'masternodeh', 
  projectName: 'zero-docs',
  themeConfig: {
    navbar: {
      title: 'Degen Reference Guide',
      logo: {
        alt: 'Degen Reference Guide Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/masternodeh/0-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Ethereum (ETH) Guides',
              to: 'docs/eth/',
            },
            {
              label: 'Avalanche (AVAX) Guides',
              to: 'docs/avax/',
            },
            {
              label: 'Smart-Chain (BNB) Guides',
              to: 'docs/bsc/',
            },
			{
              label: 'Solana (SOL) Guides',
              to: 'docs/sol/',
            },
            {
              label: 'Mobile Guides',
              to: 'docs/mobile/',
            },
          ],
        },
		{
          title: 'Explainers',
          items: [
            {
              label: 'Impermanent Loss Explainer',
              to: 'docs/il/',
            },
            {
              label: 'Rugpull Explainer',
              to: 'docs/nft/',
            },
			{
              label: 'NFT Explainer',
              to: 'docs/nft/',
            },
			{
              label: 'Grow Playing Guides',
              to: 'docs/grow/',
            },
          ],
        },
        {
          title: 'Wiki',
          items: [
			{
			  label: 'Faq',
			  to: 'docs/wiki/',
			},
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/masternodeh/0-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}@masternodeh Built with love from the community!`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/masternodeh/0-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/masternodeh/0-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
