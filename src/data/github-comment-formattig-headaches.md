---
author: Radoje Jezdic
title: How I Fixed My GitHub Comment Formatting Headaches
slug: github-comment-formatting-headaches
date: 2024-11-10
featured: false
draft: false
description: A simple JavaScript solution that automatically fixes code indentation when pasting into GitHub comments, making code snippets more readable and saving time during code reviews and discussions.
tags:
  - github
  - javascript
pinned: false
---

# The Problem

When working with GitHub, I frequently found myself copying and pasting code snippets into comment sections.
However, I kept running into an annoying issue:
the code I copied from my editor came with its original indentation,
making it look messy and hard to read in GitHub comments, especially with deeply nested code.

# The Solution

I created a simple JavaScript snippet that automatically fixes indentation when pasting code into GitHub comments:

```javascript
// Function to fix code indentation
function fixIndentation(code) {
	// Split the code into lines
	const lines = code.split("\n")

	// Find the minimum indentation level (excluding empty lines)
	const minIndent = lines
		.filter((line) => line.trim().length > 0)
		.reduce((min, line) => {
			const indent = line.match(/^\s*/)[0].length
			return indent < min ? indent : min
		}, Infinity)

	// Remove the minimum indentation from all lines
	const fixedLines = lines.map((line) => {
		if (line.trim().length === 0) return ""
		return line.slice(minIndent)
	})

	// Join the lines back together
	return fixedLines.join("\n")
}

// Function to handle the paste event
async function handlePaste(e) {
	// Prevent the default paste
	e.preventDefault()

	try {
		// Get the clipboard content
		const text = await navigator.clipboard.readText()

		// Fix the indentation
		const fixedText = fixIndentation(text)

		// Get the target element
		const target = e.target

		// Get the current cursor position
		const startPos = target.selectionStart
		const endPos = target.selectionEnd

		// Get the current value
		const currentValue = target.value

		// Create the new value by combining the parts
		const newValue =
			currentValue.substring(0, startPos) +
			fixedText +
			currentValue.substring(endPos)

		// Set the new value
		target.value = newValue

		// Set the cursor position after the pasted text
		target.selectionStart = target.selectionEnd = startPos + fixedText.length
	} catch (error) {
		console.error("Failed to access clipboard:", error)
	}
}

// Add the paste event listener
document.addEventListener("paste", handlePaste)
```

<br/>

<div class="note">
<h1>Note</h1>

This script works with any GitHub comment box, including:

- Issue comments
- Pull request reviews
- Discussion posts
- Gist comments
</div>

<br/>

# How to Use It

1. Install [Violentmonkey](https://violentmonkey.github.io/#installation) extensions.
2. After installing the extensions you can click on violentmonkey and create new script.
3. You can copy the script from above or find whole script here [GitHub Gist](https://gist.github.com/Jezda1337/6b7046ccbaa62518c7f48e8dc6b7f338).
4. Save the script, and that's all. When every you paste code into GitHub comment you wil have fixed indentation.

<br/>

# Why This Matters

This small solution saves time and makes code discussions on GitHub much more readable. It's particularly useful when:

- Reviewing pull requests
- Providing code examples in issues
- Sharing code snippets in discussions
- Working with deeply nested code structures

<br />
