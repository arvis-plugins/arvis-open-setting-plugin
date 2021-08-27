const arvish = require('arvish');

module.exports = ({ inputStr }) => {
  const arg = process.platform === 'darwin' ? 'x-apple.systempreferences:com.apple.preference' : 'ms-settings:';

  return {
    items: [
      {
        title: arvish.env.get('string', 'command'),
        arg
      }
    ],
  };
};