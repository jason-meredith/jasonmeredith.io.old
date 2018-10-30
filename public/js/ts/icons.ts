class Grid {

    // Div element id to contain the grid
    container_div_id: string;

    // Max width of the grid, in icons
    icon_horizontal_count: number = 3;

    // Side length of icons, in px
	icon_size: number = 70;

	// Padding between icons
    icon_padding: number = 10;

	// Highlight scale size
	highlight_scale: number = 1.1;

    // Icons contained in this grid
    icons: Array<Icon>;

    // Directory where image files for icons are stored
    icons_img_dir: string;

	constructor(icons: Array<string>) {

		this.icons = [];

        for (let icon of icons) {
			this.icons.push(new Icon(icon));
		}

    } 

	// Get the number of icons to be in this grid
    private get_icon_count(): number {
        return this.icons.length;
    }

	// Randomize the order of the icons so it's different each time
	private shuffle_icons() {
		let current_index = this.get_icon_count();
		let temp;
		let random_index;

		while (0 !== current_index) {
			random_index = Math.floor(Math.random() * current_index);
			current_index -= 1;

			temp = this.icons[current_index];
			this.icons[current_index] = this.icons[random_index];
			this.icons[random_index] = temp;
		}

	}
	
	// Generate css
	private generate_css(): string {

		let output: string = "<style>";

			// Icon default style
			output += ".icon {";
			output += "max-width: " + this.icon_size + "px;";
			output += "max-height: " + this.icon_size + "px;";
			output += "padding: " + this.icon_padding + "px;";
			output += "-webkit-filter: grayscale(100%);";
			output += "filter grayscale(100%);";
			output += "}";

			output += ".highlight {";
			output += "transition: all .2s ease-in-out; }"
			output += ".highlight:hover { "
			output += "transform: scale(" + this.highlight_scale + ");"
			output += "filter grayscale(0%);";
			output += "-webkit-filter: grayscale(0%);";
			output += "}";

			output += ".highlighted {";
			output += "transform: scale(" + this.highlight_scale + ");"
			output += "filter grayscale(0%);";
			output += "-webkit-filter: grayscale(0%);";
			output += "}";


			output += "</style>";

		return output;

	}

	// Generate the html of the table that will contain the grid
    private generate_html(): string {

		let output: string = "";

        // Determine number of columns
        let columns;
        if (this.get_icon_count() >= this.icon_horizontal_count) {
            columns = this.icon_horizontal_count;
        } else {
            columns = this.get_icon_count();
		}

		// Determine number of rows
		let rows = Math.ceil(this.get_icon_count() / columns);

		// Shuffle the icons
		this.shuffle_icons();
	
		// Begin the table
		output += "<table>";

		let temp_icons = [];

		// Create new row
		for(var r = 0; r < rows; r++) {
			output += "<tr>";


			// Create new cell
			for (var c = 0; c < columns; c++) {
				output += "<td>";

                if (this.icons.length > 0) {
					let icon = this.icons.pop();
					temp_icons.push(icon);
					icon.set_path(this.icons_img_dir);

                    output += icon.generate_html();
				}
				output += "</td>";
			}


			output += "</tr>";
		}


		this.icons = temp_icons;

		output += "</table>"

		return output;   
	}

	// Get a specific Icon, based on it's name (string)
	private get_icon(name: string):Icon {

		for(let icon of this.icons) {
			if(icon.name == name) {
				return icon;
			}
		}

	}

	// Take generated css and html and plant it in the specified div element
	add_to_page(div: string) {
		let container: HTMLElement = document.getElementById(div);
		
		let content: string = this.generate_css() + this.generate_html();

		container.innerHTML = content;
	}

	// Highlight multiple icons, named in the given string array
	highlight(icons: Array<string>) {
		for(let icon of icons) {
			this.get_icon(icon).highlight();
		}
	}

	// Unhighlight all icons
	unhighlight_all() {

		for(let icon of this.icons) {
			icon.unhighlight();
		}

	}

}


class Icon {
    name: string;
    path: string;

    constructor(name: string) {
        this.name = name;
    }

	// The full path to this image file of this icon
    private get_path() {
        return this.path + "/" + this.name + ".png";
    }

	// Return the actual page element of this Icon <img>
    get_img():HTMLElement {
        return document.getElementById(this.name + '-icon');
    }

	// Set the root directory in which the image for this icon is located
    set_path(path: string) {
        this.path = path;
    }

	// Generatet the <img> tag of this icon
	generate_html(): string {

		let output: string = "";

		output += "<img "
		output += "id=\"" + this.name + "-icon\" ";
		output += "class=\"icon highlight\" src=\"";
        output += this.get_path();
        output += "\">";

        return output;

	}

	// Highlight the icon
	highlight() {
		let img:HTMLElement = this.get_img();

		img.classList.add("highlighted");


	}

	// Unhighlight the icon
	unhighlight() {
		let img:HTMLElement = this.get_img();
		img.classList.remove("highlighted");

	}

}

