import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {



        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false,
                    },
                },
            ],
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            '@app': path.join(process.cwd(), 'src/app'),
            '@components': path.join(process.cwd(), 'src/components'),
            '@constants': path.join(process.cwd(), 'src/constants'),
            '@functions': path.join(process.cwd(), 'src/utils/functions'),
            '@generated': path.join(process.cwd(), 'src/features/generated'),
            '@hooks': path.join(process.cwd(), 'src/utils/hooks'),
            '@layouts': path.join(process.cwd(), 'src/layouts'),
            '@modules': path.join(process.cwd(), 'src/modules'),
            '@pages': path.join(process.cwd(), 'src/pages'),
            '@services': path.join(process.cwd(), 'src/features/services'),
            '@styles': path.join(process.cwd(), 'src/styles'),
            '@utility-components': path.join(process.cwd(), 'src/utils/components'),
            '@widgets': path.join(process.cwd(), 'src/features/widgets'),
            '@config': path.join(process.cwd(), 'src/config'),
        };

        return config;
    },
};

export default nextConfig;
