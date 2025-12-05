import fetch from "node-fetch"
import fs from "node:fs/promises"
import path from "node:path"

const importMeta = import.meta
const scriptsDir = path.dirname(importMeta.url.replace("file://", ""))
const baseDir = path.dirname(scriptsDir)

const conf = {
  repo: {
    base: "connerohnesorge/connerohnesorge",
    branch: "main",
  },
  imgDir: "assets",
  api: "https://github-readme-stats-eight-topaz-65.vercel.app/api",
  styles: {
    light: {
      bg_color: "ffffff",
      border_color: "d0d7de",
    },
    dark: {
      title_color: "58a6ff",
      text_color: "adbac7",
      bg_color: "00000000",
      border_color: "444c56",
    },
  },
}

const data = [
  {
    kind: "section",
    title: "Go Libraries",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "groq-go",
        description: "Client package for interacting with language models on the Groq API",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "claude-agent-sdk-go",
        description: "Claude agent SDK for Go(lang)",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "seltabl",
        description: "Golang library for parsing HTML tables into structs with a language server",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "semanticrouter-go",
        description: "Fast & less costly AI decision making and intelligent processing",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "hydra-go",
        description: "Hydra Nix Builder Go SDK",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "gpt2",
        description: "A golang implementation of GPT-2 using the standard library",
      },
    ],
  },
  {
    kind: "section",
    title: "Nix Flakes",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "nordvpn-flake",
        description: "Unofficial NordVPN NixOS flake with CLI package and module",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "zen-browser-flake",
        description: "Nix Flake for the Zen Browser",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "infisical-flake",
        description: "Nix Flake for Infisical secrets management platform",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "skypilot-flake",
        description: "SkyPilot Nix flake with autoupdates",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "bufrnix",
        description: "Nix powered Protocol Buffers with declarative code generation",
      },
    ],
  },
  {
    kind: "section",
    title: "Hardware/Embedded",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "mips-cpu-design",
        description: "MIPS microarchitecture: single-cycle, multicycle, and pipelined cores",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "cpre488-mp0",
        description: "NES emulator for Xilinx Zynq 7000 SoC with SD-card ROMs",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "cpre488-mp2",
        description: "1080p HDMI video pipeline for Zynq with TPG→VDMA→HDMI",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "cpre488-mp4",
        description: "Cascaded PID controller stack for Crazyflie drone",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "steroscopic-hardware",
        description: "Real-time stereoscopic depth mapping on dual Zedboards",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "single-cycle-mips-verilog",
        description: "A single cycle MIPS processor implementation in Verilog",
      },
    ],
  },
  {
    kind: "section",
    title: "Editor/Neovim",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "nvim",
        description: "Personal Neovim configuration",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "doppler.nvim",
        description: "Doppler integration into Neovim",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "vim-toggle",
        description: "Obsidian plugin to toggle vim mode on and off",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "plugin-template.nvim",
        description: "Personal Plugin Template for Neovim Plugins",
      },
    ],
  },
  {
    kind: "section",
    title: "AI/ML",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "modal-deepseek-ocr",
        description: "Modal.com deployment of DeepSeek OCR as a FastAPI serverless app",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "groqmit",
        description: "Fast AI generated commits",
      },
    ],
  },
  {
    kind: "section",
    title: "CLI Tools",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "conclaude",
        description: "The guardrails your Claude Code sessions need",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "wrtype",
        description: "Implementation of wtype in Rust",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "wztype",
        description: "xdotool type CLI and library in Zig",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "mcp-zig",
        description: "Model Context Protocol library for Zig",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "sqlcquash",
        description: "Squashes SQL schema, query, and seed files into singular files",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "templar",
        description: "Rapid prototyping for templ components",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "twerge",
        description: "Generates class names and static sources for golang templ programs",
      },
    ],
  },
  {
    kind: "section",
    title: "Web",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "conneroh.com",
        description: "Personal Website",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "play.ts",
        description: "TypeScript library for creative coding and interactive applications",
      },
    ],
  },
  {
    kind: "section",
    title: "Other",
    cards: [
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "spectr",
        description: "Validatable spec driven development",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "dotfiles",
        description: "Conner Ohnesorge's dotfiles",
      },
      {
        kind: "repo",
        user: "connerohnesorge",
        repo: "awesome-vaults",
        description: "A list of Obsidian Vaults that show off features or collections",
      },
    ],
  },
  { kind: "separator" },
  {
    kind: "section",
    cards: [
      {
        kind: "user",
        user: "connerohnesorge",
        description: "Conner Ohnesorge's GitHub Stats",
      },
    ],
  },
]

const imgCache = new Map()

function renderCachedImage({ key, url, alt, fragment }) {
  imgCache.set(key, url)
  const cacheUrl = `https://raw.githubusercontent.com/${conf.repo.base}/${conf.repo.branch}/${conf.imgDir}/${key}`
  return `<img src="${cacheUrl}${fragment ? "#" + fragment : ""}" alt="${alt}">`
}

function renderRepoCard({ user, repo, description, style }) {
  const search = new URLSearchParams({
    username: user,
    repo,
    show_owner: true,
    ...conf.styles[style],
  })
  return [
    `<a href="https://github.com/${user}/${repo}#gh-${style}-mode-only">`,
    renderCachedImage({
      key: `${user}-${repo}-${style}.svg`,
      url: `${conf.api}/pin/?${search}`,
      alt: `${repo}: ${description}`,
      fragment: `gh-${style}-mode-only`,
    }),
    `</a>`,
  ].join("")
}

function renderUserCardStyle({ user, description, style }) {
  const search = new URLSearchParams({
    username: user,
    show_icons: true,
    include_all_commits: false,
    ...conf.styles[style],
  })
  return [
    `<a href="https://github.com/${user}#gh-${style}-mode-only">`,
    renderCachedImage({
      key: `${user}-${style}.svg`,
      url: `${conf.api}/?${search}`,
      alt: `${user}: ${description}`,
      fragment: `gh-${style}-mode-only`,
    }),
    `</a>`,
  ].join("")
}

function renderCardStyles(render, { user, repo, description }) {
  return [
    render({ user, repo, description, style: "dark" }),
    render({ user, repo, description, style: "light" }),
  ].join("\n")
}

function renderSection({ title, cards }) {
  const rows = cards.reduce((rows, card, i) => {
    if (i % 2 === 0) {
      rows.push([])
    }
    rows[rows.length - 1].push(renderNode(card))
    return rows
  }, [])
  const rowDivs = rows.map((row) => {
    return [
      `<div float="left">`,
      `${row.join("\n&nbsp;\n")}`,
      `&nbsp;`,
      `</div>`,
    ].join("\n")
  })
  return [
    title ? `### ${title}\n\n` : "",
    ...rowDivs,
    "\n",
  ].join("")
}

function renderNode({ kind, ...rest }) {
  switch (kind) {
    case "repo":
      return renderCardStyles(renderRepoCard, rest)
    case "user":
      return renderCardStyles(renderUserCardStyle, rest)
    case "separator":
      return "---\n"
    case "section":
      return renderSection(rest)
    default:
      throw new Error(`Unknown card kind: ${kind}`)
  }
}

const content = data.map(renderNode).join("\n")

for (const [key, url] of imgCache.entries()) {
  const imgPath = path.join(baseDir, conf.imgDir, key)
  const imgDir = path.dirname(imgPath)
  await fs.mkdir(imgDir, { recursive: true })
  console.log(`Fetching ${url}`)
  const img = await fetch(url)
  const buffer = await img.arrayBuffer()
  console.log(`Writing ${imgPath}`)
  await fs.writeFile(imgPath, Buffer.from(buffer))
}

console.log(`Writing README.md`)
await fs.writeFile(path.join(baseDir, "README.md"), content)
