/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		dangerouslyAllowSVG: true,
	},
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
