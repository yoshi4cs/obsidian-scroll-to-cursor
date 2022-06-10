# Obsidian Scroll to Cursor

## What problem this plugin tries to solve?

I love [obsidian-tabs](https://github.com/gitobsidiantutorial/obsidian-tabs). But I found a problem that when switching between tabs/panes (especially long notes), scroll positions are not retained and jump to somewhere else. This plugin tries to deal with this by waiting for a short time (default 100ms) after switching panes then scrolling to the cursor position.

This is probably related to [this feature request](https://forum.obsidian.md/t/keep-the-cursor-current-line-in-view-while-resizing-or-at-least-the-top-of-the-document/579). This problem is expected to be solved sometime, but this is so important for me, so I created this small plugin to deal with the problem for the time being.

## How can I use it?

- This plugin in not registered as a official community plugin. Use Obsidian42-BRAT plugin and install beta plugin "yoshi4cs/obsidian-scroll-to-cursor", then enable this plugin (Scroll to Cursor) in the community plugins setting.
- In the plugin setting, you can adjust the delay between switching and scrolling. If this value is too small, this plugin wouldn't work. The default value is set to 100 ms. Find the best value for you.

## Limitations

- This plugin does not perfectly solve the problem. Scroll position still jumps sometimes, but it is better than nothing. 
- This plugin does not remember the current scroll position. It just scrolls the view to the current cursor position. So if you just scroll with a mouse without moving the cursor, this plugin scrolls back to the cursor position after switching panes, which may be annoying sometimes.

## Related Plugins

These plugins may be useful to remember cursor positions after closing and re-opening notes.
- https://github.com/dy-sh/obsidian-remember-cursor-position
- https://github.com/akaalias/obsidian-recursor

## Lisense
MIT Lisense.
