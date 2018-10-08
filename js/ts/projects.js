var ProjectLoader = /** @class */ (function () {
    function ProjectLoader(projectJsonUrl, outputDiv) {
        this.projectJsonUrl = projectJsonUrl;
        this.outputDiv = document.getElementById(outputDiv);
    }
    ProjectLoader.prototype.retrieve_project_json = function () {
        var ajax = new XMLHttpRequest();
        var output;
        var that = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                output = ajax.responseText;
                var result = JSON.parse(output);
                that.projects = result['projects'];
                that.skillList = result['skills'];
                that.add_projects_to_page();
                // Call here to add event handlers only after its been loaded and added to page
                that.addEventHandlers();
            }
        };
        ajax.open("GET", this.projectJsonUrl, true);
        ajax.send();
    };
    ProjectLoader.prototype.add_projects_to_page = function () {
        var output = "";
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            output += "<div class='project' data-skills='" + project.tech + "'>";
            output += "<h3>" + project.name + "</h3>";
            output += "<p>" + project.description + "</p><br>";
            //output += "<p><a href='" + project.github + "'>GitHub</a></p>";
            output += "<p>";
            for (var _b = 0, _c = project.links; _b < _c.length; _b++) {
                var link = _c[_b];
                output += "<a href='" + link.url + "'>" + link.label + "</a><br>";
            }
            output += "</p>";
            output += "</div>";
        }
        this.outputDiv.innerHTML = output;
    };
    return ProjectLoader;
}());
//# sourceMappingURL=projects.js.map