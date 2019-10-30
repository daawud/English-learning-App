module.exports = {
    bail: true,
    setupFilesAfterEnv: ['./enzyme.config.js'],
    coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^.+\\.(sa|sc|c)ss$': 'identity-obj-proxy',
        '^.+\\.{png|gif|jpe?g|svg}$': '<rootDir>jest.transform.js',
        '^~(.*)$': '<rootDir>app$1',
    },
};
