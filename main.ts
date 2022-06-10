import {App, Editor, MarkdownView, WorkspaceLeaf, Plugin, EditorPosition, Setting, PluginSettingTab} from 'obsidian';

interface ScrollToCursorPluginSettings {
	waitDelay: number,
}

const DEFAULT_SETTINGS = { waitDelay: 100 }

export default class ScrollToCursorPlugin extends Plugin {
	settings: ScrollToCursorPluginSettings;

	async onload() {
		console.log("Loading scroll-to-cursor");

		this.registerEvent(	this.app.workspace.on('active-leaf-change', this.onActiveLeafChange));

		await this.loadSettings();
		this.addSettingTab(new ScrollToCursorSettingTab(this.app, this));

	}

	async loadSettings() { this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()); }

	async saveSettings() { await this.saveData(this.settings); }

	private delay = (n: number) => new Promise( r => setTimeout(r, n));

	private onActiveLeafChange = async (leaf: WorkspaceLeaf): Promise<void> => {
		//console.log("active-leaf-change event");
		const view = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (view) {
			const editor = view.editor;
			await this.delay(this.settings.waitDelay);
			const cursor = editor.getCursor();
			editor.scrollIntoView({from:cursor, to:cursor}, true);
		}

	}
}

export class ScrollToCursorSettingTab extends PluginSettingTab {
	plugin: ScrollToCursorPlugin;
  
	constructor(app: App, plugin: ScrollToCursorPlugin) {
	  super(app, plugin);
	  this.plugin = plugin;
	}
  
	display(): void {
	  let { containerEl } = this;
  
	  containerEl.empty();
  
	  new Setting(containerEl)
		.setName("Delay to scroll")
		.setDesc("Delay between pane switching and scrolling (in milliseconds)")
		.addText((text) =>
		  text
			.setPlaceholder("Placeholder?")
			.setValue(String(this.plugin.settings.waitDelay))
			.onChange(async (value) => {
			  this.plugin.settings.waitDelay = parseInt(value);
			  await this.plugin.saveSettings();
			})
		);
	}
  }

