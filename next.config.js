/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'tailwindui.com',
			},
			{
				hostname: 'images.unsplash.com',
			},
		],
	},
};

module.exports = nextConfig;
