module.exports = ({ inputStr }) => {
  const arg = process.platform === 'darwin' ? 'x-apple.systempreferences:com.apple.preference' : 'ms-settings:';

  return {
    items: [
      {
        title: 'Open setting',
        arg
      }
    ],
  };
};