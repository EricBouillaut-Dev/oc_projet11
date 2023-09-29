function generateUniqueKey() {
  const randomPrefix = Math.floor(Math.random() * 0x100000).toString(16);
  const timestamp = Date.now().toString(16);
  return `${randomPrefix}-${timestamp}`;
}

export default generateUniqueKey;
