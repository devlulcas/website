import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

class LinkItem {
	private _label: string;
	private _icon: IconDefinition;
	private _href: string;

	constructor(label: string, icon: IconDefinition, href: string) {
		this._label = label;
		this._icon = icon;
		this._href = href;
	}

	public get label() {
		return this._label;
	}

	public get icon() {
		return this._icon;
	}

	public get href() {
		return this._href;
	}
}

export { LinkItem };
