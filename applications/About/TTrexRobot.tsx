import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectTTrexRobot(params: SubViewParams) {
  const content = (
    <div>
      <p style={{ marginTop: 0, opacity: 0.85 }}>
        Group project for Informal Robotics (Instructor: Chuck Hoberman)
      </p>
      <p style={{ opacity: 0.85 }}>
        Team: Hayley Bloch, AnhPhu Nguyen, Ellen Pan
      </p>

      <ProjectImage 
        src="images/TTrexRobot/full-styled-ttrex-compressed.mov" 
        alt="Full styled T-TREX robot walking"
        caption="The completed T-TREX robot in action"
        isVideo
      />

      <div className={styles['content-card']}>
        <h3>Context</h3>
        <p>
          This project was developed as a group assignment for <em>Informal Robotics</em>, a studio-based
          class taught by Chuck Hoberman. The goal of the course was to explore nontraditional robotic
          systems that prioritize motion, physical expression, and interaction with space over task
          efficiency or industrial optimization.
        </p>
        <p>
          Our team designed and built <strong>T-Trex</strong>, a Jansen-inspired bipedal walking
          robot that treats locomotion itself as a form of engagement. The robot draws inspiration
          from the Tyrannosaurus rex, reinterpreted as a speculative, modern fossil that roams,
          observes, and inhabits space autonomously.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Project Overview</h3>
        <p>
          T-Trex is a walking robot built around a mechanically driven leg system rather than
          conventional wheeled motion. The system emphasizes organic gait, balance, and physical
          presence.
        </p>
        <h4>Key system features</h4>
        <ul>
          <li>Jansen-style multi-linkage leg mechanisms designed to produce a smooth walking cycle</li>
          <li>Independently driven legs enabling forward, backward, and rotational movement</li>
          <li>Remote control via a custom iOS interface</li>
          <li>Streaming camera with face recognition and autonomous wandering behavior</li>
          <li>Solar-powered battery system for daylight self-sufficiency</li>
          <li>Silicone-molded feet to improve grip on smooth surfaces</li>
        </ul>

        <ProjectImage 
          src="images/TTrexRobot/walking-motion-idea.gif" 
          alt="Walking motion concept diagram"
          caption="Concept visualization of walking motion"
        />

        <ProjectImage 
          src="images/TTrexRobot/folding-legs-test.mp4" 
          alt="Folding leg mechanism test"
          caption="Leg folding and unfolding mechanism"
          isVideo
        />
      </div>

      <div className={styles['content-card']}>
        <h3>My Role</h3>
        <p>This was a collaborative project with clearly divided responsibilities.</p>

        <h4>My primary contributions included</h4>
        <ul>
          <li>Full leg mechanism design and kinematic planning</li>
          <li>Body and structural design</li>
          <li>All mechanical 3D CAD modeling</li>
          <li>3D printing, iteration, and physical fabrication</li>
          <li>Mechanical assembly and integration</li>
        </ul>

        <p>
          My teammates focused on the robot's visual styling, documentation, and software
          development, including the mobile control interface, firmware, and computer vision
          features.
        </p>

        <ProjectImage 
          src="images/TTrexRobot/app.png" 
          alt="iOS app control interface"
          caption="Custom iOS app for remote robot control"
        />

        <ProjectImage 
          src="images/TTrexRobot/app2.png" 
          alt="iOS app secondary interface"
          caption="iOS app secondary control panel"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>What I Did</h3>
        <p>
          I designed the complete mechanical walking system, starting from a custom leg architecture
          built from two four-bar linkages and one three-bar mechanism per leg. The goal was to
          allow a single actuation point to drive an entire leg pair while maintaining balance and a
          natural gait.
        </p>

        <ProjectImage 
          src="images/TTrexRobot/leg-ratio-dimentions.png" 
          alt="Leg ratio and dimensions diagram"
          caption="Detailed leg mechanism dimensions and ratios"
        />

        <ProjectImage 
          src="images/TTrexRobot/leg-motion.mov" 
          alt="Leg motion test"
          caption="Single leg motion mechanism test"
          isVideo
        />

        <p>
          I modeled, printed, tested, and iterated multiple versions of the leg system, beginning
          with paper and wood mockups to validate folding behavior beyond simulation. Early
          prototypes revealed balance issues and ground contact inefficiencies, which informed later
          revisions such as removing the bottom triangular linkage to improve stability.
        </p>

        <ProjectImage 
          src="images/TTrexRobot/first-prototype.mov" 
          alt="First prototype walking test"
          caption="First prototype walking and balance test"
          isVideo
        />

        <ProjectImage 
          src="images/TTrexRobot/legs-test-2.mov" 
          alt="Refined legs test"
          caption="Improved leg mechanism test with better balance"
          isVideo
        />

        <p>
          I also designed the robot's body structure to house motors, batteries, and electronics
          while maintaining a balanced center of mass. Final assemblies integrated silicone-molded
          feet to improve traction and reduce slipping during walking.
        </p>

        <ProjectImage 
          src="images/TTrexRobot/body-cad.png" 
          alt="Body CAD model"
          caption="CAD design of the robot body structure"
        />

        <ProjectImage 
          src="images/TTrexRobot/final-cad.png" 
          alt="Final complete CAD assembly"
          caption="Complete final CAD assembly"
        />

        <ProjectImage 
          src="images/TTrexRobot/silicon-feet.jpg" 
          alt="Silicon feet manufacturing"
          caption="Custom silicone-molded feet for traction"
        />

        <ProjectImage 
          src="images/TTrexRobot/silicon-feet-on.png" 
          alt="Silicon feet installed on robot"
          caption="Silicon feet installed on the robot legs"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>How I Did It</h3>
        <p>The process moved through several phases:</p>
        <ul>
          <li>Initial kinematic sketches and linkage simulations</li>
          <li>Dimensional tuning through trial and error to achieve a stable gait</li>
          <li>Physical prototyping using paper, wood, and early 3D prints</li>
          <li>Iterative CAD refinement to address balance, friction, and breakage</li>
          <li>Full mechanical assembly with motors, power systems, and electronics</li>
        </ul>

        <p>
          Throughout the process, I prioritized designing mechanisms that could tolerate fabrication
          imperfections and real-world forces, rather than relying on idealized simulations alone.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Why These Design Decisions</h3>
        <p>
          Rather than using wheels or off-the-shelf walking kits, we chose a Jansen-inspired linkage
          system to foreground motion as an expressive element. The mechanical complexity is
          intentional—it makes the robot's movement legible, slightly awkward, and alive.
        </p>
        <p>
          Designing the legs around a single actuation point reduced control complexity while
          amplifying the importance of mechanical tuning. The body design and tail were shaped not
          only for aesthetics, but also to manage balance and weight distribution, which became one
          of the central engineering challenges of the project.
        </p>
        <p>
          This approach reflects my interest in robotics as a physical, mechanical medium, where
          behavior emerges from structure as much as from software.
        </p>
      </div>

      <div className={styles['card-grid']}>
        <div className={styles['content-card']}>
          <h3>Challenges and Lessons Learned</h3>
          <h4>Key challenges included</h4>
          <ul>
            <li>Maintaining balance due to inline leg placement</li>
            <li>Managing weight distribution from the battery and power system</li>
            <li>Friction and layer weakness in 3D printed parts</li>
            <li>Breaking points introduced by print orientation and supports</li>
          </ul>
          <p>
            These constraints reinforced the importance of designing mechanisms that are forgiving,
            repairable, and responsive to real material behavior.
          </p>
        </div>

        <div className={styles['content-card']}>
          <h3>Outcome</h3>
          <p>
            The final robot successfully demonstrated controlled walking, rotation, and remote
            operation, along with autonomous behaviors driven by face recognition. More importantly,
            it served as a proof of concept for treating robotic locomotion as an expressive system
            rather than a purely functional one.
          </p>
        </div>
      </div>
    </div>
  );
  
  return <ProjectPage title="T-Trex: A Smart Walker" content={content} params={params} />;
}

