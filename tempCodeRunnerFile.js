// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("emojify");

// Find a document in a collection.
db.getCollection("emojis").insertMany([
  {
    "emoji": "🎉",
    "emoji_code": ":tada:",
    "type": "tada",
    "example": "🎉 Initial project setup",
    "tags": ["initial", "first commit", "new project", "start"],
    "bgColor": "#FFD580"
  },
  {
    "emoji": "🔖",
    "emoji_code": ":bookmark:",
    "type": "bookmark",
    "example": "🔖 Released version 1.0.0",
    "tags": ["release", "version", "tag", "milestone"],
    "bgColor": "#A7C7E7"
  },
  {
    "emoji": "🚀",
    "emoji_code": ":rocket:",
    "type": "rocket",
    "example": "🚀 Deployed new API version",
    "tags": ["deploy", "launch", "production", "release"],
    "bgColor": "#FFABAB"
  },
  {
    "emoji": "🐛",
    "emoji_code": ":bug:",
    "type": "bug",
    "example": "🐛 Fixed authentication issue",
    "tags": ["bug", "fix", "issue", "error"],
    "bgColor": "#C5E1A5"
  },
  {
    "emoji": "🚑",
    "emoji_code": ":ambulance:",
    "type": "ambulance",
    "example": "🚑 Hotfix for production crash",
    "tags": ["hotfix", "critical", "urgent", "emergency"],
    "bgColor": "#FFB6C1"
  },
  {
    "emoji": "✨",
    "emoji_code": ":sparkles:",
    "type": "sparkles",
    "example": "✨ Added dark mode feature",
    "tags": ["feature", "new", "improvement", "enhancement"],
    "bgColor": "#D8BFD8"
  },
  {
    "emoji": "⚡",
    "emoji_code": ":zap:",
    "type": "zap",
    "example": "⚡ Optimized database queries",
    "tags": ["performance", "speed", "optimization"],
    "bgColor": "#F0E68C"
  },
  {
    "emoji": "🔥",
    "emoji_code": ":fire:",
    "type": "fire",
    "example": "🔥 Removed deprecated methods",
    "tags": ["remove", "cleanup", "delete", "obsolete"],
    "bgColor": "#FFCCCB"
  },
  {
    "emoji": "💄",
    "emoji_code": ":lipstick:",
    "type": "lipstick",
    "example": "💄 Updated button styling",
    "tags": ["ui", "ux", "design", "css", "styling"],
    "bgColor": "#FFD1DC"
  },
  {
    "emoji": "📦",
    "emoji_code": ":package:",
    "type": "package",
    "example": "📦 Updated dependencies",
    "tags": ["dependencies", "npm", "yarn", "update"],
    "bgColor": "#B3E5FC"
  },
  {
    "emoji": "🔧",
    "emoji_code": ":wrench:",
    "type": "wrench",
    "example": "🔧 Fixed build script",
    "tags": ["fix", "build", "ci", "config"],
    "bgColor": "#E6E6FA"
  },
  {
    "emoji": "🚨",
    "emoji_code": ":rotating_light:",
    "type": "rotating_light",
    "example": "🚨 Fixed eslint warnings",
    "tags": ["lint", "fix", "warning", "code style"],
    "bgColor": "#FFC3A0"
  },
  {
    "emoji": "🎨",
    "emoji_code": ":art:",
    "type": "art",
    "example": "🎨 Improved code structure",
    "tags": ["refactor", "clean code", "formatting"],
    "bgColor": "#ADD8E6"
  },
  {
    "emoji": "📜",
    "emoji_code": ":scroll:",
    "type": "scroll",
    "example": "📜 Updated license file",
    "tags": ["docs", "license", "legal"],
    "bgColor": "#F5DEB3"
  },
  {
    "emoji": "🔍",
    "emoji_code": ":mag:",
    "type": "mag",
    "example": "🔍 Improved search performance",
    "tags": ["performance", "search", "optimization"],
    "bgColor": "#D1C4E9"
  },
  {
    "emoji": "💡",
    "emoji_code": ":bulb:",
    "type": "bulb",
    "example": "💡 Added comment explanations",
    "tags": ["docs", "comments", "documentation"],
    "bgColor": "#FFECB3"
  },
  {
    "emoji": "📢",
    "emoji_code": ":loudspeaker:",
    "type": "loudspeaker",
    "example": "📢 Announced new feature rollout",
    "tags": ["announcement", "news", "release"],
    "bgColor": "#B2EBF2"
  },
  {
    "emoji": "🚧",
    "emoji_code": ":construction:",
    "type": "construction",
    "example": "🚧 Work in progress: new dashboard",
    "tags": ["wip", "in progress", "partial"],
    "bgColor": "#FFDAC1"
  },
  {
    "emoji": "🛠",
    "emoji_code": ":hammer_and_wrench:",
    "type": "hammer_and_wrench",
    "example": "🛠 Updated build tools",
    "tags": ["build", "tooling", "config"],
    "bgColor": "#C8E6C9"
  },
  {
    "emoji": "🔗",
    "emoji_code": ":link:",
    "type": "link",
    "example": "🔗 Fixed broken links in docs",
    "tags": ["docs", "links", "fix"],
    "bgColor": "#FFDAB9"
  },
  {
    "emoji": "🚥",
    "emoji_code": ":traffic_light:",
    "type": "traffic_light",
    "example": "🚥 Updated test coverage",
    "tags": ["tests", "coverage", "ci"],
    "bgColor": "#B2DFDB"
  },
  {
    "emoji": "🌍",
    "emoji_code": ":earth_africa:",
    "type": "earth_africa",
    "example": "🌍 Added translations for French",
    "tags": ["i18n", "translations", "localization"],
    "bgColor": "#FFB7C5"
  },
  {
    "emoji": "📌",
    "emoji_code": ":pushpin:",
    "type": "pushpin",
    "example": "📌 Pinned dependencies to stable versions",
    "tags": ["dependencies", "lock", "version"],
    "bgColor": "#D7CCC8"
  },
  {
    "emoji": "🔑",
    "emoji_code": ":key:",
    "type": "key",
    "example": "🔑 Updated API keys configuration",
    "tags": ["security", "auth", "keys"],
    "bgColor": "#E1BEE7"
  },
  {
    "emoji": "🏷",
    "emoji_code": ":label:",
    "type": "label",
    "example": "🏷 Added issue labels",
    "tags": ["issues", "tags", "labels"],
    "bgColor": "#FFAB91"
  }
])
