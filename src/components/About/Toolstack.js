// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
//   SiWindows,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiWindows />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  const iconStyle = {
    fontSize: "90px",
    marginBottom: "15px"
  };

  const labelStyle = {
    fontSize: "30px",
    fontWeight: "600",
    margin: "0"
  };

  const tools = [
    { icon: <SiWindows style={iconStyle} />, name: "Windows" },
    { icon: <SiVisualstudiocode style={iconStyle} />, name: "VS Code" },
    { icon: <SiPostman style={iconStyle} />, name: "Postman" },
    { icon: <SiSlack style={iconStyle} />, name: "Slack" },
    { icon: <SiVercel style={iconStyle} />, name: "Vercel" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-item">
            {tool.icon}
            <p style={labelStyle}>{tool.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;