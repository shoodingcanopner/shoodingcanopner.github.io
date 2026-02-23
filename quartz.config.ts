import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "스라소니 머릿속에는",  // ← 변경
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",  // ← 변경
    baseUrl: "shoodingcanopner.github.io",  // ← 변경
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "RIDIBatang",
        body: "RIDIBatang",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F5F0E8",        // ← 베이지 배경
          lightgray: "#E0D8C8",
          gray: "#A89880",
          darkgray: "#3A3028",
          dark: "#1A1008",
          secondary: "#2E4336",    // ← 딥그린
          tertiary: "#FFB906",     // ← 노랑 포인트
          highlight: "rgba(46, 67, 54, 0.1)",
          textHighlight: "#FFB90688",
        },
        darkMode: {
          light: "#1A2420",
          lightgray: "#C4D6CB",
          gray: "#5A7A68",
          darkgray: "#E8E0D0",    // ← 더 밝게
          dark: "#F5F0E8",        // ← 더 밝게
          secondary: "#C4D6CB",
          tertiary: "#FFB906",
          highlight: "rgba(196, 214, 203, 0.1)",
          textHighlight: "#FFB90688",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.HardLineBreaks(),  // ← 추가
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: false,
        enableCheckbox: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config