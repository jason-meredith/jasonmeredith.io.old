interface Project {
    name: string;
    description: string;
    github: string;
    links: Array<Link>;
    tech: any;
}

interface Link {
    label: string;
    url: string;
}

class ProjectLoader {

    projectJsonUrl: string;

    projects: Array<Project>;

    outputDiv: HTMLElement;

    skillList: Array<string>;

    addEventHandlers: Function;

    constructor(projectJsonUrl: string, outputDiv:string) {
        this.projectJsonUrl = projectJsonUrl;
        this.outputDiv = document.getElementById(outputDiv);


    }

    retrieve_project_json(): void {
        var ajax: XMLHttpRequest = new XMLHttpRequest();

        let output:  string;

        let that: ProjectLoader = this;

        ajax.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200) {
                output = ajax.responseText;


                let result = JSON.parse(output);

                that.projects = result['projects'];
                that.skillList = result['skills'];

                that.add_projects_to_page();

                // Call here to add event handlers only after its been loaded and added to page
                that.addEventHandlers();
            }
        };

        ajax.open("GET", this.projectJsonUrl, true);
        ajax.send();
    }


    private add_projects_to_page() {
        let output: string = "";

        for (let project of this.projects) {


            output += "<div class='project' data-skills='" + project.tech + "'>";
            output += "<h3>" + project.name + "</h3>";
            output += "<p>" + project.description + "</p><br>";
            //output += "<p><a href='" + project.github + "'>GitHub</a></p>";

            output += "<p>";
            for (let link of project.links) {
                output += "<a href='" + link.url + "'>" + link.label + "</a><br>";
            }

            output += "</p>";

            output += "</div>";
        }


        this.outputDiv.innerHTML = output;


    }

}