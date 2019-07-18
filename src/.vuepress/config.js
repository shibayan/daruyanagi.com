module.exports = {
  title: 'daruyanagi.com',
  description: 'ドメインの更新を忘れた結果、水素水布教サイトにされた男の記録',
  markdown: {
    extendMarkdown: md => {
      md.set({ linkify: true });
    }
  }
}