import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectAnimatronicHead(params: SubViewParams) {
  const content = (
    <div>
      <h3>Project Overview</h3>
      <p>
        An expressive humanoid robotic bust combining sculpture, mechanical systems, electronics, and 
        interaction into a cohesive project. The intent was to design a visibly mechanical figure whose 
        facial motion alone could evoke emotion, intention, and presence. The head relies on articulated 
        eyes, eyelids, eyebrows, jaw, lips, and tongue to communicate expression through carefully tuned 
        motion translated through silicone skin.
      </p>

      <ProjectImage 
        src="animatronic-head-hero.jpg" 
        alt="Final animatronic head with creator"
        caption="Final head with creator"
      />

      <ProjectImage 
        src="animatronic-presentation.jpg" 
        alt="Presentation day"
        caption="Presentation day"
      />

      <div className={styles['content-card']}>
        <h3>Design Philosophy</h3>
        <p>
          Minimal but deliberate movements are used to explore how machines can feel alive when their 
          behavior is designed with intention. This project sits directly at the intersection of art and 
          engineering. The sculptural form defines mechanical constraints, the mechanics dictate electronics 
          and actuation strategy, and the electronics shape how interaction is possible.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>How the System Works</h3>
        <p>
          The animatronic head operates as a distributed embedded system with carefully orchestrated 
          hardware and software components. The architecture prioritizes real-time responsiveness while 
          maintaining safe operational limits for all mechanical subsystems.
        </p>
        <ul>
          <li>Servo driver boards are powered from a dedicated 5V external power supply capable of delivering sustained current to 21 simultaneous servo motors</li>
          <li>The ESP32 S3 microcontroller creates a custom WiFi access point (SSID: Animatronic_Head) enabling direct connection without existing network infrastructure</li>
          <li>A browser-based interface connects locally to 192.168.4.1, providing real-time control with minimal latency</li>
          <li>The web interface allows users to select from predefined facial movements, trigger custom expressions, and initiate synchronized speech sequences</li>
          <li>Expression commands and audio playback events trigger precisely coordinated servo motion patterns designed to create natural, believable facial movements</li>
        </ul>

        <ProjectImage 
          src="animatronic-system-diagram.jpg" 
          alt="System Architecture Diagram"
          caption="System Architecture Diagram"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Final System Overview</h3>
        <p>
          The final robotic bust represents a sophisticated integration of mechanical engineering, 
          electronics, and software design. Each subsystem was developed iteratively to balance complexity 
          with reliability, resulting in a cohesive platform capable of nuanced expression and interaction.
        </p>
        <p>
          The system consists of several tightly integrated subsystems:
        </p>
        <ul>
          <li>A rigid internal skeleton fabricated from 3D printed PLA components that supports all mechanical loads while providing precise mounting points for servo mechanisms</li>
          <li>Twenty-one servo driven mechanisms controlling eyes, eyelids, eyebrows, jaw, lips, and tongue with individual calibration and safety limits</li>
          <li>Custom designed electronics integrating microcontroller, servo drivers, audio systems, and power distribution with robust connector systems for serviceability</li>
          <li>A flexible food-grade silicone skin attached magnetically to the underlying structure, enabling removal for maintenance while maintaining realistic appearance</li>
          <li>A browser-accessible real-time calibration and control architecture supporting both manual operation and scripted expression sequences</li>
        </ul>
        <p>
          The complete assembly is mounted on a weighted base "neck" structure that provides mechanical 
          stability during operation and houses the primary electrical connections. Wire routing, connector 
          placement, and mechanical clearances were planned systematically to eliminate interference during 
          the full range of motion. All control electronics and power distribution are housed discretely in 
          the posterior region of the head assembly.
        </p>

        <ProjectImage 
          src="animatronic-cad-assembly.jpg" 
          alt="Final Assembly CAD"
          caption="Final Assembly CAD"
        />

        <ProjectImage 
          src="animatronic-cad-detail.jpg" 
          alt="Final Assembly CAD Detail"
          caption="Final Assembly CAD Detail"
        />
      </div>

      <div className={styles['hardware-card']}>
        <h3>Electronic Architecture</h3>
        <p>
          The electrical system was designed around distributed control principles to manage the complexity 
          of coordinating 21 servo motors while maintaining real-time responsiveness. The architecture 
          separates high-level control logic from low-level PWM generation to ensure reliable operation.
        </p>
        <ul>
          <li><strong>Control MCU:</strong> ESP32 S3 with dual-core processing, integrated WiFi, and sufficient GPIO for system coordination</li>
          <li><strong>Servo Drivers:</strong> Two Adafruit PCA9685 16-channel servo drivers operating on I2C bus with addresses 0x40 and 0x41, providing 12-bit PWM resolution</li>
          <li>Each servo motor is assigned a dedicated PWM channel with individual calibration parameters stored in non-volatile memory</li>
          <li>Servo motors are isolated from the microcontroller through dedicated driver boards to prevent current spikes and timing conflicts that could destabilize the main control loop</li>
          <li><strong>Audio:</strong> Integrated DFPlayer Mini MP3 module with dedicated microSD storage for audio file management and synchronized playback</li>
          <li><strong>Power:</strong> External 5V switching power supply rated for continuous operation under full servo load conditions</li>
        </ul>

        <ProjectImage 
          src="animatronic-pcb-primary.jpg" 
          alt="Primary PCB Design"
          caption="Primary PCB Design"
        />

        <ProjectImage 
          src="animatronic-pcb-secondary.jpg" 
          alt="Secondary PCB Design"
          caption="Secondary PCB Design"
        />

        <ProjectImage 
          src="animatronic-skeleton-early.jpg" 
          alt="Early skeleton assembly"
          caption="Early skeleton assembly"
        />

        <ProjectImage 
          src="animatronic-skeleton-dev.jpg" 
          alt="Skeleton development"
          caption="Skeleton development"
        />

        <ProjectImage 
          src="animatronic-skeleton-complete.jpg" 
          alt="Complete skeleton"
          caption="Complete skeleton"
        />

        <ProjectImage 
          src="animatronic-wiring.jpg" 
          alt="Wiring integration"
          caption="Wiring integration"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Calibration and Control</h3>
        <p>
          The control system implements a hierarchical approach to motion management, balancing expressive 
          capability with mechanical safety. Each servo motor undergoes individual characterization to 
          establish safe operating parameters and optimize performance within the physical constraints of 
          the mechanism.
        </p>
        <p>
          A comprehensive calibration process manually defines critical parameters for each actuator:
        </p>
        <ul>
          <li><strong>Neutral position:</strong> The default rest state that minimizes mechanical stress and provides optimal range for bidirectional movement</li>
          <li><strong>Minimum safe position:</strong> The software-enforced lower limit preventing mechanical binding, linkage interference, or servo damage</li>
          <li><strong>Maximum safe position:</strong> The upper operational boundary ensuring clearance and preventing over-extension of mechanical components</li>
        </ul>
        <p>
          These operational limits are discovered through systematic manual testing and documented in the 
          control firmware to prevent damage during autonomous operation. The software actively enforces 
          these constraints in real-time, rejecting commands that would exceed safe operating ranges. Facial 
          expressions are implemented as carefully choreographed servo position sets, with smooth interpolation 
          between states to create natural-looking transitions and movements.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Audio Integration</h3>
        <p>
          The audio subsystem provides synchronized speech capability through careful integration of digital 
          audio playback with coordinated facial movements. The system is designed to create convincing 
          lip-sync and expression timing that enhances the illusion of natural speech.
        </p>
        <ul>
          <li>Custom MP3 audio files are stored on a high-speed microSD card with organized file naming for efficient access and management</li>
          <li>A dedicated DFPlayer Mini module handles all audio processing, including digital-to-analog conversion, amplification, and file management independent of the main control processor</li>
          <li>Specific pre-recorded phrases are precisely synchronized with corresponding servo motion sequences to create believable speech animation</li>
          <li>Mouth, jaw, and tongue movements are carefully mapped to audio timing using phoneme analysis to simulate accurate articulation and speech clarity</li>
          <li>Audio playback triggers are integrated into the expression control system, allowing seamless coordination between speech and emotional expression</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Mechanical Architecture</h3>
        <p>
          The mechanical design prioritizes modularity and serviceability while achieving the complex motion 
          requirements for believable facial expression. Each subsystem operates independently but coordinates 
          seamlessly to create cohesive, lifelike movement patterns.
        </p>

        <h4>Eyes</h4>
        <p>
          The ocular system employs 6 precision SG90 micro servos arranged in a sophisticated linkage configuration:
        </p>
        <ul>
          <li>1 servo controlling horizontal left-right eye movement through a coordinated linkage system connecting both eyeballs</li>
          <li>1 servo managing vertical up-down eye movement with mechanical stops to prevent over-rotation</li>
          <li>2 independent upper eyelid servos (left and right) enabling asymmetric blinking and expression</li>
          <li>2 independent lower eyelid servos (left and right) providing complete control over eye aperture and expression intensity</li>
        </ul>
        <p>
          The eye mechanism incorporates custom 3D-printed linkages designed to translate servo rotation 
          into natural eye movement while maintaining proper geometric relationships. Mechanical limits 
          prevent the eyeballs from rotating beyond anatomically realistic positions.
        </p>

        <ProjectImage 
          src="animatronic-eyeball-plan.jpg" 
          alt="Eyeball Plan"
          caption="Eyeball Plan"
        />

        <ProjectImage 
          src="animatronic-eye-socket.jpg" 
          alt="Eye Socket Plan"
          caption="Eye Socket Plan"
        />

        <ProjectImage 
          src="animatronic-eye-servo.jpg" 
          alt="Eye Servo Plan"
          caption="Eye Servo Plan"
        />

        <h4>Eyebrows</h4>
        <p>
          The eyebrow articulation system utilizes 4 high-torque MG90S 9g metal-geared servos for precise expression control:
        </p>
        <ul>
          <li>2 outer eyebrow servos (left and right) controlling the lateral portions for expressions like surprise, skepticism, and curiosity</li>
          <li>2 inner eyebrow servos (left and right) managing the medial sections to create frowning, concern, and concentration expressions</li>
        </ul>
        <p>
          This four-servo configuration enables complex eyebrow movements including asymmetric expressions, 
          subtle emotional nuances, and dramatic gestures. The metal-geared servos provide sufficient torque 
          to overcome the resistance of the silicone skin while maintaining precise positional control.
        </p>

        <ProjectImage 
          src="animatronic-eyebrow-mechanism.jpg" 
          alt="Eyebrow Mechanism"
          caption="Eyebrow Mechanism"
        />

        <h4>Jaw</h4>
        <p>
          The jaw mechanism employs the most powerful actuators in the system:
        </p>
        <ul>
          <li>2 high-torque MG996R servos providing the substantial force required to operate the jaw mechanism against the resistance of the silicone skin and underlying structure</li>
          <li>Coordinated operation controls jaw opening and closing with smooth, natural motion profiles designed to simulate human speech patterns and emotional expressions</li>
          <li>The dual-servo configuration provides redundancy and ensures sufficient torque for reliable operation under varying load conditions</li>
        </ul>

        <h4>Mouth</h4>
        <p>
          The most complex mechanical subsystem utilizes 9 precision MG90S 9g metal-geared servos for comprehensive oral expression:
        </p>
        <ul>
          <li>2 upper lip servos controlling independent left and right upper lip sections for asymmetric expressions and speech articulation</li>
          <li>4 dedicated servos managing smile and frown control through carefully designed linkages that pull the corners of the mouth in natural arcs</li>
          <li>2 lower lip servos providing independent control over left and right lower lip sections for complex mouth shapes and emotional expressions</li>
          <li>1 tongue actuator enabling speech-like tongue movements essential for realistic audio synchronization and pronunciation simulation</li>
        </ul>
        <p>
          The mouth mechanism represents the most mechanically complex aspect of the project, requiring 
          precise coordination between multiple actuators to achieve believable expressions. Custom linkages 
          translate servo motion into natural lip and mouth movements while accommodating the flexibility 
          constraints of the silicone skin overlay.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Magnetic Skin Attachment</h3>
        <p>
          The magnetic attachment system represents a critical design innovation that enables the removable 
          silicone skin while maintaining secure positioning during operation. This approach allows for 
          maintenance access to internal components while preserving the aesthetic integrity of the final assembly.
        </p>
        <p>
          Precisely positioned magnetic snap-on attachment points are embedded strategically in both the 
          silicone skin and underlying structure at:
        </p>
        <ul>
          <li>Eyebrow regions: Ensuring secure attachment of the forehead area while allowing eyebrow mechanism movement</li>
          <li>Upper lip sections: Providing stable positioning for the mouth area during complex lip movements</li>
          <li>Lower lip sections: Securing the lower mouth region while accommodating jaw opening motions</li>
          <li>Temple areas: Anchoring the lateral regions of the skin to the skull structure</li>
          <li>Nose bridge and tip: Maintaining proper nasal profile and preventing displacement during expression changes</li>
          <li>Cheekbone regions: Supporting the mid-face area and ensuring smooth skin transitions</li>
          <li>Chin and jawline: Securing the lower face while allowing natural jaw movement</li>
          <li>Posterior attachment points: Additional securing points around the back of the head for overall stability</li>
        </ul>
        <p>
          The magnetic system uses carefully selected neodymium magnets that provide sufficient holding 
          force without being so strong as to damage the delicate silicone skin during removal. Each 
          attachment point incorporates protective backing plates to distribute magnetic forces and prevent 
          tearing of the silicone material.
        </p>

        <ProjectImage 
          src="animatronic-final-skin.jpg" 
          alt="Final skin"
          caption="Final skin"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Silicone Skin Development Process</h3>

        <ProjectImage 
          src="animatronic-plaster-mold.jpg" 
          alt="Plaster mold"
          caption="Plaster mold"
        />

        <ProjectImage 
          src="animatronic-positive-mold.jpg" 
          alt="Positive mold"
          caption="Positive mold"
        />

        <ProjectImage 
          src="animatronic-complete-mold.jpg" 
          alt="Complete mold system"
          caption="Complete mold system"
        />

        <ProjectImage 
          src="animatronic-eye-mold.jpg" 
          alt="Eye area mold"
          caption="Eye area mold"
        />

        <h4>Skin Casting Iterations</h4>

        <ProjectImage 
          src="animatronic-first-skin.jpg" 
          alt="First skin casting"
          caption="First skin casting"
        />

        <ProjectImage 
          src="animatronic-skin-no-eyes.jpg" 
          alt="Skin without eyes"
          caption="Skin without eyes"
        />

        <ProjectImage 
          src="animatronic-eye-integration.jpg" 
          alt="Eye skin integration"
          caption="Eye skin integration"
        />

        <ProjectImage 
          src="animatronic-final-details.jpg" 
          alt="Final details"
          caption="Final details"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Speaker Placement</h3>
        <p>
          The audio projection system was designed to simulate natural human speech patterns through 
          strategic speaker positioning and acoustic engineering principles.
        </p>
        <ul>
          <li>Primary speaker positioned in the posterior throat/mouth cavity to simulate natural voice projection and resonance</li>
          <li>Placement strategically chosen to create realistic sound directionality while remaining hidden from view during normal operation</li>
          <li>Internal acoustic cavity design enhances voice projection and provides natural reverb characteristics similar to human oral cavity resonance</li>
          <li>Speaker mounting system isolates vibrations from the mechanical structure to prevent interference with servo operation</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Development Journey</h3>
        <p>
          The development of this animatronic head spanned several months and represented a comprehensive 
          exploration of interdisciplinary engineering. The project evolved through multiple major iterations, 
          each addressing fundamental challenges in mechanical design, electronics integration, and software 
          control. This journey illustrates the iterative nature of complex system development and the 
          importance of systematic testing and refinement.
        </p>

        <h4>Project Conceptualization and Initial Planning</h4>
        <p>
          The project began with extensive research into existing animatronic systems, facial anatomy, and 
          expression psychology. Initial sketches and mood boards helped establish the design philosophy of 
          creating a visibly mechanical system that could nonetheless evoke genuine emotional responses 
          through careful motion design.
        </p>
        <p>
          Early planning sessions defined the core technical requirements:
        </p>
        <ul>
          <li>Comprehensive facial articulation covering all major expression muscles</li>
          <li>Real-time control capability suitable for interactive demonstrations</li>
          <li>Modular design enabling independent testing and refinement of subsystems</li>
          <li>Robust construction suitable for extended operation and public demonstration</li>
          <li>Aesthetic design balancing mechanical honesty with approachable character</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Assembly and Integration Process</h3>

        <ProjectImage 
          src="animatronic-early-integration.jpg" 
          alt="Early integration"
          caption="Early integration"
        />

        <ProjectImage 
          src="animatronic-first-assembly.jpg" 
          alt="First assembly"
          caption="First assembly"
        />

        <ProjectImage 
          src="animatronic-iterative-refinement.jpg" 
          alt="Iterative refinement"
          caption="Iterative refinement"
        />

        <ProjectImage 
          src="animatronic-eye-integration-assembly.jpg" 
          alt="Eye integration"
          caption="Eye integration"
        />

        <p>
          The integration phase revealed numerous unforeseen challenges as individual subsystems were 
          combined into a cohesive whole. Mechanical interference between adjacent systems required 
          significant redesign of mounting strategies and linkage geometries. The first complete assembly 
          highlighted the complexity of wire management and the need for systematic connector standardization.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Planning and Concept Refinement</h3>
        <p>
          Throughout development, the project scope was continuously refined based on technical discoveries 
          and resource constraints:
        </p>
        <p>
          Defined core project goals:
        </p>
        <ul>
          <li>Primary objective: Animatronic head/bust capable of convincing facial expressions and basic speech simulation</li>
          <li>Essential feature: Speaking capability with synchronized lip movement for demonstration purposes</li>
          <li>Interface requirement: Browser-based control interface enabling real-time operation without specialized software</li>
          <li>Stretch goal: Optional camera-based face tracking for eye movement synchronization (ultimately deprioritized due to complexity)</li>
          <li>Key design feature: Removable silicone skin to expose internal mechanical structure for educational demonstrations</li>
          <li>Operational requirement: Robust enough for classroom demonstrations and public exhibitions</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>CAD Modeling and Design Iteration</h3>
        <p>
          The mechanical design process involved extensive 3D modeling and virtual testing before any 
          physical fabrication began. This approach proved essential for managing the geometric complexity 
          of the multi-servo facial mechanism.
        </p>
        <ul>
          <li>Comprehensive modeling of overall form and internal layout using Fusion 360 with full assembly constraints and motion studies</li>
          <li>Iterative design of the internal skeleton structure to support mechanical loads while providing access for maintenance and adjustment</li>
          <li>Detailed kinematic analysis of linkage systems to ensure smooth motion and avoid binding throughout the full range of expression</li>
          <li>Virtual collision detection to identify and resolve mechanical interferences before physical assembly</li>
          <li>Systematic revision of servo mounting strategies to optimize torque transmission and minimize backlash</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Electronics Development and Testing</h3>
        <p>
          The electronic systems underwent extensive breadboard testing before PCB fabrication, revealing 
          critical insights about power distribution, signal integrity, and system timing that significantly 
          influenced the final architecture.
        </p>
        <ul>
          <li>Comprehensive schematic design in KiCad with careful attention to power distribution, connector standardization, and signal routing</li>
          <li>Systematic planning of power distribution networks to handle the substantial current demands of 21 simultaneous servo motors</li>
          <li>Custom PCB manufacturing using the Bantam Tools desktop milling machine, enabling rapid iteration and modification</li>
          <li>Extensive breadboard testing of all electronic subsystems prior to PCB fabrication, identifying critical power sequencing and timing requirements</li>
          <li>Implementation of robust grounding strategies to prevent servo noise from interfering with microcontroller operation</li>
          <li>Development of custom cable harnesses and connector systems for reliable, serviceable connections</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Mechanical Fabrication and Iteration Cycles</h3>
        <p>
          The mechanical development phase involved numerous design-build-test cycles as theoretical models 
          encountered real-world constraints and manufacturing limitations.
        </p>
        <p>
          The iterative fabrication process focused on systematic refinement of:
        </p>
        <ul>
          <li>Servo mounting systems with precise alignment and minimal mechanical play</li>
          <li>Linkage geometries optimized for natural motion paths and adequate force transmission</li>
          <li>Mechanical clearances ensuring full range of motion without interference or binding</li>
          <li>Structural integrity under dynamic loading conditions during rapid expression changes</li>
          <li>Component standardization using common metric fasteners wherever possible for simplified assembly and maintenance</li>
          <li>Material selection balancing strength, weight, and fabrication constraints</li>
        </ul>
        <p>
          The decision to maintain mechanically simple geometries during initial development proved crucial, 
          allowing focus on functional performance before aesthetic refinement. Assembly verification in 
          Fusion 360 helped identify potential motion conflicts before physical testing, significantly 
          reducing fabrication waste and development time.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Silicone Skin Development Process</h3>
        <p>
          The creation of the silicone skin represented one of the most challenging aspects of the project, 
          requiring the development of custom molding techniques and material formulations to achieve the 
          desired aesthetic and functional properties.
        </p>
        <ul>
          <li>Design and fabrication of precision negative and positive molds using 3D printing and traditional sculpting techniques</li>
          <li>Experimental determination of optimal skin thickness balancing flexibility for expression with durability for handling</li>
          <li>Material selection process using Smooth-On Dragon Skin FX Pro silicone with custom flesh-toned pigment formulations</li>
          <li>Development of techniques for embedding neodymium magnets between silicone layers without compromising material integrity</li>
          <li>Iterative refinement of mold release procedures and curing protocols for consistent, bubble-free results</li>
          <li>Integration of fiber reinforcement in high-stress areas to prevent tearing during repeated attachment/removal cycles</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Software Development and Control System Architecture</h3>
        <p>
          The software development process evolved from simple servo positioning sketches to a sophisticated 
          control architecture capable of coordinating complex expressions and speech synchronization.
        </p>
        <ul>
          <li>Initial development of calibration sketches in Arduino IDE to systematically discover safe operational ranges for each servo motor</li>
          <li>Implementation of hierarchical expression systems using stored position sets for repeatable, natural-looking facial movements</li>
          <li>Integration of WiFi control capabilities enabling wireless operation without dependence on existing network infrastructure</li>
          <li>Development of browser-based user interface providing real-time control with immediate visual feedback</li>
          <li>Iterative expansion of expression library through systematic testing and refinement of motion sequences</li>
          <li>Implementation of safety systems preventing mechanical damage through software-enforced position limits</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Audio Integration and Speech Synchronization</h3>
        <p>
          The development of convincing speech synthesis required careful coordination between audio playback 
          timing and mechanical mouth movements, representing a significant software and mechanical 
          coordination challenge.
        </p>
        <ul>
          <li>Creation of custom MP3 audio library with carefully selected phrases for demonstration purposes</li>
          <li>Development of phoneme-based mouth movement sequences synchronized to audio timing for realistic lip-sync</li>
          <li>Systematic tuning of mouth, jaw, and tongue coordination to optimize speech clarity and visual believability</li>
          <li>Integration of audio triggers into the main control system for seamless coordination between speech and expression</li>
          <li>Calibration of speaker positioning and acoustic properties to simulate natural voice projection</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>System Integration and Final Assembly</h3>
        <p>
          The final integration phase brought together all subsystems and revealed the importance of 
          systematic testing and documentation for complex mechatronic systems.
        </p>
        <ul>
          <li>Comprehensive testing of individual subsystems before final assembly to isolate and resolve issues systematically</li>
          <li>Development of assembly procedures and documentation to enable disassembly for maintenance and demonstration</li>
          <li>Implementation of comprehensive safety testing to ensure reliable operation during public demonstrations</li>
          <li>Creation of user operation guides and troubleshooting procedures for educational use</li>
          <li>Final aesthetic refinement and finishing while maintaining access to critical adjustment points</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Bill of Materials</h3>
        <ul>
          <li>ESP32 S3</li>
          <li>6 SG90 micro servos</li>
          <li>13 MG90S 9g metal geared servos</li>
          <li>2 MG996R servos</li>
          <li>2 Adafruit PCA9685 16 channel servo drivers</li>
          <li>DFPlayer Mini MP3 audio module</li>
          <li>Speaker</li>
          <li>External 5V power supply</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Tips and Lessons Learned</h3>
        <ul>
          <li>Design modular subsystems for iteration (eyes, eyebrows, mouth removable)</li>
          <li>Test electronics on breadboards before PCB fabrication no matter how simple they might seem</li>
          <li>Import 3D models of electronics into CAD whenever possible to design around real constraints</li>
          <li>Keep early sketches and models as simple and rectangular as possible</li>
          <li>Aesthetic adjustments are much easier to implement at the very end</li>
          <li>Create BOM early with extra components to avoid last minute scrambling due to part failures</li>
          <li>Mesh reinforcements can be used during silicon pours near high stress points (eyes and mouth) as well as magnet locations to avoid silicon tearing</li>
          <li>Set an outer head boundary at the very beginning to prevent unrealistic proportions</li>
          <li>When working with silicone, use magnets that are only as strong as necessary to reliably hold the silicone in place, since stronger magnets can cause tearing, deformation, or make removal difficult, especially in thin or soft sections</li>
          <li>When inserting magnets into PLA, heating magnets to melt into PLA weakens strength</li>
          <li>Opt for hexagonal holes with a -0.1mm offset from magnet diameter and a 0.8 chamfer to assist with press fit</li>
          <li>Make sure servo screws aren't too long when attaching links to servos horns as they can actually block servo movement if driven too far into the servo</li>
          <li>When importing meshes into Fusion, use the Generate Face Groups and then Modify to Covert Mesh to work on flat, editable faces</li>
          <li>Snap fits on 3D prints are unreliable</li>
          <li>Use standard metric screw holes wherever possible</li>
          <li>Document continuously, even when things aren't working</li>
          <li>Catching up and documenting at the end is actually terrible</li>
          <li>Make your website as basic and standardized per week as possible</li>
          <li>Documentation is incredibly difficult when focused on aesthetics over function</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Final Demonstration</h3>
        <p>
          The completed robotic head demonstrates the culmination of weeks of iterative design, fabrication, 
          and integration work. This final presentation showcases the coordinated movement of all facial 
          subsystems working together to create believable expressions.
        </p>
      </div>
    </div>
  );
  
  return <ProjectPage title="Animatronic Head" content={content} params={params} />;
}