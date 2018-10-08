var Grid = /** @class */ (function () {
    function Grid(icons) {
        // Max width of the grid, in icons
        this.icon_horizontal_count = 3;
        // Side length of icons, in px
        this.icon_size = 70;
        // Padding between icons
        this.icon_padding = 10;
        // Highlight scale size
        this.highlight_scale = 1.1;
        this.icons = [];
        for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
            var icon = icons_1[_i];
            this.icons.push(new Icon(icon));
        }
    }
    // Get the number of icons to be in this grid
    Grid.prototype.get_icon_count = function () {
        return this.icons.length;
    };
    // Randomize the order of the icons so it's different each time
    Grid.prototype.shuffle_icons = function () {
        var current_index = this.get_icon_count();
        var temp;
        var random_index;
        while (0 !== current_index) {
            random_index = Math.floor(Math.random() * current_index);
            current_index -= 1;
            temp = this.icons[current_index];
            this.icons[current_index] = this.icons[random_index];
            this.icons[random_index] = temp;
        }
    };
    // Generate css
    Grid.prototype.generate_css = function () {
        var output = "<style>";
        // Icon default style
        output += ".icon {";
        output += "max-width: " + this.icon_size + "px;";
        output += "max-height: " + this.icon_size + "px;";
        output += "padding: " + this.icon_padding + "px;";
        output += "-webkit-filter: grayscale(100%);";
        output += "filter grayscale(100%);";
        output += "}";
        output += ".highlight {";
        output += "transition: all .2s ease-in-out; }";
        output += ".highlight:hover { ";
        output += "transform: scale(" + this.highlight_scale + ");";
        output += "filter grayscale(0%);";
        output += "-webkit-filter: grayscale(0%);";
        output += "}";
        output += ".highlighted {";
        output += "transform: scale(" + this.highlight_scale + ");";
        output += "filter grayscale(0%);";
        output += "-webkit-filter: grayscale(0%);";
        output += "}";
        output += "</style>";
        return output;
    };
    // Generate the html of the table that will contain the grid
    Grid.prototype.generate_html = function () {
        var output = "";
        // Determine number of columns
        var columns;
        if (this.get_icon_count() >= this.icon_horizontal_count) {
            columns = this.icon_horizontal_count;
        }
        else {
            columns = this.get_icon_count();
        }
        // Determine number of rows
        var rows = Math.ceil(this.get_icon_count() / columns);
        // Shuffle the icons
        this.shuffle_icons();
        // Begin the table
        output += "<table>";
        var temp_icons = [];
        // Create new row
        for (var r = 0; r < rows; r++) {
            output += "<tr>";
            // Create new cell
            for (var c = 0; c < columns; c++) {
                output += "<td>";
                if (this.icons.length > 0) {
                    var icon = this.icons.pop();
                    temp_icons.push(icon);
                    icon.set_path(this.icons_img_dir);
                    output += icon.generate_html();
                }
                output += "</td>";
            }
            output += "</tr>";
        }
        this.icons = temp_icons;
        output += "</table>";
        return output;
    };
    // Get a specific Icon, based on it's name (string)
    Grid.prototype.get_icon = function (name) {
        for (var _i = 0, _a = this.icons; _i < _a.length; _i++) {
            var icon = _a[_i];
            if (icon.name == name) {
                return icon;
            }
        }
    };
    // Take generated css and html and plant it in the specified div element
    Grid.prototype.add_to_page = function (div) {
        var container = document.getElementById(div);
        var content = this.generate_css() + this.generate_html();
        container.innerHTML = content;
    };
    // Highlight multiple icons, named in the given string array
    Grid.prototype.highlight = function (icons) {
        for (var _i = 0, icons_2 = icons; _i < icons_2.length; _i++) {
            var icon = icons_2[_i];
            this.get_icon(icon).highlight();
        }
    };
    // Unhighlight all icons
    Grid.prototype.unhighlight_all = function () {
        for (var _i = 0, _a = this.icons; _i < _a.length; _i++) {
            var icon = _a[_i];
            icon.unhighlight();
        }
    };
    return Grid;
}());
var Icon = /** @class */ (function () {
    function Icon(name) {
        this.name = name;
    }
    // The full path to this image file of this icon
    Icon.prototype.get_path = function () {
        return this.path + "/" + this.name + ".png";
    };
    // Return the actual page element of this Icon <img>
    Icon.prototype.get_img = function () {
        return document.getElementById(this.name + '-icon');
    };
    // Set the root directory in which the image for this icon is located
    Icon.prototype.set_path = function (path) {
        this.path = path;
    };
    // Generatet the <img> tag of this icon
    Icon.prototype.generate_html = function () {
        var output = "";
        output += "<img ";
        output += "id=\"" + this.name + "-icon\" ";
        output += "class=\"icon highlight\" src=\"";
        output += this.get_path();
        output += "\">";
        return output;
    };
    // Highlight the icon
    Icon.prototype.highlight = function () {
        var img = this.get_img();
        img.classList.add("highlighted");
    };
    // Unhighlight the icon
    Icon.prototype.unhighlight = function () {
        var img = this.get_img();
        img.classList.remove("highlighted");
    };
    return Icon;
}());
//# sourceMappingURL=icons.js.map