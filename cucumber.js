module.exports = {
  default: {
    require: ['steps/**/*.ts'], // Path to your step definitions
    format: ['html:reports/cucumber-report.html'], // Output format
    parallel: 1, // Number of parallel executions
    requireModule: ['ts-node/register'], // Ensure TypeScript is supported
  },
};