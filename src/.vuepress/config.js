module.exports = {
  title: 'daruyanagi.com',
  markdown: {
    extendMarkdown: md => {
      md.set({ linkify: true });
    }
  }
}