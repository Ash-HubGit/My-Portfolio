import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@mui/material/Link";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const githubLink = "https://github.com/Ash-HubGit/React_Project.git";

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link href={githubLink} target="_blank">
        <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
