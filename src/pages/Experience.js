import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#2C3E50">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2021"
          iconStyle={{ background: "#2C3E50", color: "#fff" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Taught JavaScript to over 30-50 high school students.
          </h3>
          <p>The Youth Camp Program</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--university"
          date="2019-2023"
          iconStyle={{
            background: "#2C3E50",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            King Mongkut's Institute of Technology Ladkrabang Bachelor's Degree
          </h3>
          <p>Business Information Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--experience"
          date="2022-2023"
          iconStyle={{ background: "#2C3E50", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Worked on the front-end development of the Calendar Maintenance Web
            Application
          </h3>
          <p>CMKL University</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
