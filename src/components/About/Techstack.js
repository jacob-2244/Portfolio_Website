// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col> */}
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col> */}
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col> */}
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col> */}
//       {/* <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col> */}
//         <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//         </Col>
//     </Row>
//   );
// }

// export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  const iconStyle = {
    fontSize: "90px",
    marginBottom: "15px"
  };

  const labelStyle = {
    fontSize: "30px",
    fontWeight: "600",
    margin: "0"
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJava style={iconStyle} />
          <p style={labelStyle}>Java</p>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJavascript1 style={iconStyle} />
          <p style={labelStyle}>JavaScript</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiNodejs style={iconStyle} />
          <p style={labelStyle}>Node.js</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiReact style={iconStyle} />
          <p style={labelStyle}>React</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiMongodb style={iconStyle} />
          <p style={labelStyle}>MongoDB</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiNextdotjs style={iconStyle} />
          <p style={labelStyle}>Next.js</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiGit style={iconStyle} />
          <p style={labelStyle}>Git</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiFirebase style={iconStyle} />
          <p style={labelStyle}>Firebase</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiPython style={iconStyle} />
          <p style={labelStyle}>Python</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;