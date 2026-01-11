import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectFlameThrowerGlove(params: SubViewParams) {
  const content = (
    <div>
      <h3>Project Overview</h3>
      <p>
        A wearable flame-throwing glove that converts punch motions directly into physical fire output. 
        No buttons, no switches—the motion itself is the interface. An IMU-based gesture recognition 
        system detects intentional punches and triggers a synchronized actuation sequence, creating an 
        instinctive, visceral interaction between human movement and flame.
      </p>

      <ProjectImage 
        src="flame-glove-hero.jpg" 
        alt="Full view of the punch-activated flame thrower glove"
        caption="The completed punch-activated flame thrower glove"
      />

      <div className={styles['content-card']}>
        <h3>Context & Motivation</h3>
        <p>
          This was a personal project, and at its core, it came from a simple motivation: I wanted to 
          make something undeniably cool. Something that catches the eye. Something that stops someone 
          in their tracks and makes them ask, "Is that what I think it is?"
        </p>
        <p>
          I wanted to build something visceral. Something that feels powerful and immediate. The absence 
          of buttons was intentional—it makes the interaction feel instinctive rather than mechanical.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>My Role</h3>
        <p>
          I independently designed and built the glove as a fully integrated wearable system. I handled 
          mechanical design, embedded electronics, firmware development, gesture recognition logic, and 
          complete system integration from concept to working prototype.
        </p>
      </div>

      <ProjectImage 
        src="flame-glove-detail.jpg" 
        alt="Close-up of the glove showing integrated components"
        caption="Detail view showing the compact integration of electronics and fuel system"
      />

      <div className={styles['content-card']}>
        <h3>How It Works</h3>
        <p>
          An onboard IMU (Inertial Measurement Unit) continuously measures acceleration and orientation 
          in real-time. I developed custom processing logic that distinguishes an intentional punch from 
          everyday arm movement using a combination of directionality analysis, timing windows, and 
          acceleration thresholds.
        </p>
        <p>
          When a valid punch gesture is detected, the system triggers a tightly synchronized sequence of 
          actuation. The fuel delivery system activates, the ignition fires, and flame bursts from the 
          glove in immediate response to the motion. All components are housed inside a custom 3D-printed 
          glove structure designed for compactness, durability, and wearability.
        </p>

        <ProjectImage 
          src="flame-glove-demo.mp4" 
          alt="Demonstration of the flame glove in action"
          caption="Video: Punch gesture triggering flame output"
          isVideo
        />
      </div>

      <div className={styles['hardware-card']}>
        <h3>Hardware Stack</h3>
        
        <h4>Core Processing</h4>
        <ul>
          <li><strong>Microcontroller</strong> - Processes IMU data in real-time and executes gesture recognition algorithms</li>
          <li><strong>IMU (Inertial Measurement Unit)</strong> - 6-axis accelerometer and gyroscope for motion sensing</li>
        </ul>

        <h4>Fuel System</h4>
        <ul>
          <li><strong>Fuel Reservoir</strong> - Compact pressurized container integrated into glove structure</li>
          <li><strong>Solenoid Valve</strong> - Electronically controlled for precise fuel delivery timing</li>
          <li><strong>Fuel Lines</strong> - Flexible tubing routed through glove to allow natural hand movement</li>
        </ul>

        <h4>Ignition System</h4>
        <ul>
          <li><strong>Spark Generator</strong> - High-voltage igniter positioned at nozzle output</li>
          <li><strong>Ignition Timing Circuit</strong> - Synchronized with fuel delivery for reliable ignition</li>
        </ul>

        <h4>Power & Safety</h4>
        <ul>
          <li><strong>LiPo Battery</strong> - Lightweight power source with voltage regulation</li>
          <li><strong>Emergency Shutoff</strong> - Physical kill switch for immediate system disable</li>
          <li><strong>Thermal Protection</strong> - Heat-resistant materials and protective shielding</li>
        </ul>

        <h4>Structural Components</h4>
        <ul>
          <li><strong>3D-Printed Housing</strong> - Custom-designed enclosure for component mounting</li>
          <li><strong>Fire-Resistant Base Glove</strong> - Protective material rated for high temperatures</li>
          <li><strong>Mounting Brackets</strong> - Secure attachment points preventing component shift during motion</li>
        </ul>
      </div>

      <ProjectImage 
        src="flame-glove-internal.jpg" 
        alt="Internal view showing electronics and fuel routing"
        caption="Internal layout showing compact component integration and fuel line routing"
      />

      <div className={styles['content-card']}>
        <h3>Gesture Recognition System</h3>
        
        <h4>Motion Detection Algorithm</h4>
        <p>
          The core challenge was distinguishing intentional punches from normal hand movements. The 
          algorithm analyzes multiple parameters simultaneously:
        </p>
        <ul>
          <li><strong>Acceleration Magnitude</strong> - Threshold-based detection of rapid forward motion</li>
          <li><strong>Directional Vector</strong> - Confirms motion is primarily forward (punch trajectory)</li>
          <li><strong>Angular Velocity</strong> - Detects wrist rotation characteristic of punching motion</li>
          <li><strong>Timing Window</strong> - Validates acceleration profile matches expected punch duration</li>
          <li><strong>False Positive Filtering</strong> - Rejects ambiguous gestures to prevent accidental activation</li>
        </ul>

        <h4>Real-Time Processing</h4>
        <p>
          The microcontroller samples IMU data at high frequency (100+ Hz) and processes it through the 
          gesture recognition pipeline. When confidence exceeds the threshold, the system executes the 
          actuation sequence with sub-100ms latency, creating the perception of instant response.
        </p>
      </div>

      <ProjectImage 
        src="flame-glove-gesture-diagram.jpg" 
        alt="Diagram showing gesture detection parameters"
        caption="Visualization of the multi-parameter gesture detection system"
      />

      <div className={styles['content-card']}>
        <h3>Mechanical Design & Fabrication</h3>
        
        <h4>3D-Printed Structure</h4>
        <p>
          The glove housing was designed in CAD software and 3D-printed using heat-resistant materials. 
          The design prioritizes compactness while maintaining accessibility for component mounting and 
          maintenance. Living hinges and snap-fit joints allow for assembly without external fasteners.
        </p>

        <h4>Fuel System Integration</h4>
        <p>
          The fuel delivery system required careful routing to prevent line kinking while allowing full 
          hand articulation. I used flexible tubing with strategically placed support points that move 
          with the natural motion of the hand. The nozzle positioning ensures safe flame direction away 
          from the wearer.
        </p>

        <h4>Wearability Considerations</h4>
        <p>
          Weight distribution was critical for comfortable wear and natural movement. Heavier components 
          (battery, fuel reservoir) are positioned on the forearm, while lighter electronics sit on the 
          back of the hand. Adjustable straps ensure secure fit during rapid motion.
        </p>
      </div>

      <ProjectImage 
        src="flame-glove-cad.jpg" 
        alt="CAD model of the glove structure"
        caption="3D CAD model showing component placement and structural design"
      />


      <div className={styles['content-card']}>
        <h3>Firmware Development</h3>
        
        <h4>Sensor Fusion</h4>
        <p>
          The firmware combines accelerometer and gyroscope data to build a complete picture of hand 
          motion. Complementary filtering reduces sensor noise while maintaining responsiveness to rapid 
          movements.
        </p>

        <h4>State Machine Architecture</h4>
        <p>
          The system operates through a well-defined state machine: idle monitoring, gesture detection, 
          actuation, cooldown, and return to idle. This structure ensures predictable behavior and 
          prevents rapid re-triggering.
        </p>

        <h4>Calibration & Tuning</h4>
        <p>
          Extensive iteration was required to find the right balance between sensitivity and reliability. 
          Threshold values were calibrated through repeated testing, adjusting parameters until the system 
          reliably detected punches while rejecting false positives from normal movement.
        </p>
      </div>

      <div className={styles['card-grid']}>
        <div className={styles['content-card']}>
          <h3>Technical Challenges</h3>
          <ul>
            <li><strong>Gesture Recognition Accuracy</strong> - Developed multi-parameter algorithm to distinguish intentional punches from everyday motion</li>
            <li><strong>Actuation Timing</strong> - Synchronized fuel delivery and ignition to achieve reliable flame output</li>
            <li><strong>Component Miniaturization</strong> - Fit all systems into wearable form factor without sacrificing functionality</li>
            <li><strong>Fuel Line Flexibility</strong> - Routed tubing to prevent kinking during full range of hand motion</li>
            <li><strong>Thermal Management</strong> - Protected electronics and wearer from heat generated by repeated firing</li>
          </ul>
        </div>

        <div className={styles['content-card']}>
          <h3>Key Features</h3>
          <ul>
            <li>Buttonless gesture-based interface for instinctive interaction</li>
            <li>Real-time IMU processing with sub-100ms response time</li>
            <li>Multi-parameter gesture recognition for reliable detection</li>
            <li>Compact 3D-printed housing designed for wearability</li>
            <li>Synchronized fuel delivery and ignition system</li>
            <li>Multiple redundant safety systems and emergency shutoff</li>
          </ul>
        </div>
      </div>

      <ProjectImage 
        src="flame-glove-testing.jpg" 
        alt="Testing setup with safety equipment"
        caption="Controlled testing environment with fire suppression equipment"
      />

      <div className={styles['content-card']}>
        <h3>Engineering Philosophy</h3>
        <p>
          From an engineering standpoint, the challenge was turning something flashy into something 
          reliable. Gesture-based control is messy and ambiguous, and making it feel confident requires 
          careful tuning and iteration. This project taught me how expressive systems demand more rigor, 
          not less.
        </p>
        <p>
          The absence of buttons wasn't just an aesthetic choice—it fundamentally changed the interaction 
          model. When the interface is invisible, when your body is the controller, the system has to be 
          absolutely predictable. There's no room for latency, no tolerance for false positives. The 
          technology has to fade completely into the background, leaving only the pure relationship 
          between gesture and response.
        </p>
      </div>


      <div className={styles['content-card']}>
        <h3>Project Reflection</h3>
        <p>
          This project represents the intersection of spectacle and precision engineering. What appears 
          as pure showmanship—fire controlled by a punch—is built on careful sensor fusion, real-time 
          processing, and obsessive attention to safety. The goal was to create something that feels 
          magical while being completely deterministic under the hood.
        </p>
        <p>
          Building systems that respond to human gesture taught me that the most compelling interfaces 
          are often the most invisible. When technology disappears and all that remains is intention 
          and response, you've created something that feels less like a tool and more like an extension 
          of yourself. That's the real achievement here—not the flame, but the feeling of control.
        </p>
      </div>
    </div>
  );
  
  return <ProjectPage title="Punch-Activated Flame Thrower Glove" content={content} params={params} />;
}