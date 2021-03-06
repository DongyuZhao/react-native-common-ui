const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const project = require('./package.json');
const escape = require('escape-string-regexp');

const projectDependencies = Object.keys({
    ...project.dependencies,
    ...project.peerDependencies,
});

module.exports = {
    projectRoot: __dirname,
    watchFolders: [path.resolve(__dirname, '../source')],

    resolver: {
        blacklistRE: blacklist([
            new RegExp(
                `^${escape(path.resolve(__dirname, 'node_modules', project.name))}\\/.*$`
            ),
            new RegExp(
                `^${escape(path.resolve(__dirname, '../source', 'node_modules'))}\\/.*$`
            ),
            new RegExp(
                `^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
            ),
        ]),

        providesModuleNodeModules: [
            '@expo/vector-icons',
            '@babel/runtime',
            'react',
            ...projectDependencies,
        ],
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
