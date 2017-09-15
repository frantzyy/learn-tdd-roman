module.exports = function(config) {
    config.set({
        files: [{
            pattern: "dist/**/*.js",
            mutated: true,
            included: false
        }],
        testRunner: "mocha",
        reporter: ["html", "clear-text", "progress"],
        testFramework: "mocha",
        coverageAnalysis: "perTest"
    });
};