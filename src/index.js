(function () {
	const themes = {
		list: [
			"Base",
			"Neon Beetle",
			"Severed Darling",
		],
		apply(id) {
			memorize("theme", id);
			$("link#custom-theme").attr("href", `styles/${Util.slugify(id)}.css`);
			$("#story-caption").text(`Current: ${id}`);
		},
		generateLinks() {
			const frag = document.createDocumentFragment();
			this.list.forEach(t => $("<a>").text(t).ariaClick(() => this.apply(t)).appendTo(frag));
			return $(frag);
		},
	};
	setup.themes = themes;

	themes.apply(recall("theme", themes.list[0]));

	Setting.addHeader("Settings demo");
	Setting.addToggle("toggle", {
		label : "Toggle demo"
	});
	Setting.addList("list", {
		label   : "List demo",
		list    : ["One", "Two", "Three"],
		default : "One"
	});
	Setting.addRange("range", {
		label    : "Range demo",
		min      : 0,
		max      : 10,
		step     : 1
	});

	Macro.add("error", {
		handler() {
			return this.error("Mlep. This is a test error message. Have a nice day.");
		}
	});
})();