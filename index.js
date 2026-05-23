const DEFAULT_NAME = 'Guest';
const GREETING_PREFIX = 'Hello';

function getGreeting(name) {
  const userName = name || DEFAULT_NAME;

  return `${GREETING_PREFIX}, ${userName}!`;
}

console.log(getGreeting('Ivan'));
