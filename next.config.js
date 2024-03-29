/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    experimental: {
        serverComponentsExternalPackages: ['@zenstackhq/runtime']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "static.ejrsilver.com",
            }
        ]
    }
};

export default config;
