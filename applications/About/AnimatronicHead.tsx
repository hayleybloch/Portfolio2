import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectAnimatronicHead(params: SubViewParams) {
  const content = (
    <div>
      <h3>Project Goal</h3>
      <p>
        Design and build an expressive animatronic head that demonstrates the integration of mechanical design, embedded electronics, and software control. The challenge: create a system where minimal but deliberate movements evoke genuine emotion and presence through carefully choreographed motion—proving that mechanical systems can feel alive when their behavior is designed with intention.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <video controls style={{ maxHeight: '100vh', width: 'auto', display: 'block', marginBottom: '1rem' }}>
          <source src="images/AnimatronicHead/eyes-moving-with-skin-attached.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls style={{ maxHeight: '100vh', width: 'auto', display: 'block' }}>
          <source src="images/AnimatronicHead/Final-presenation-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3>Key Features</h3>
      <ul>
        <li><strong>21 servo motors</strong> for independent control of eyes, eyelids, eyebrows, jaw, and mouth</li>
        <li><strong>Custom silicone skin</strong> with embedded neodymium magnets for removable, non-destructive attachment</li>
        <li><strong>Browser-based WiFi control</strong> via ESP32 S3 access point—no external network required</li>
        <li><strong>Modular mechanical design</strong> enabling independent testing and rapid iteration of subsystems</li>
        <li><strong>Real-time expression choreography</strong> with smooth servo interpolation and synchronized speech</li>
        <li><strong>Custom PCBs</strong> designed in KiCad and fabricated on desktop milling machine</li>
        <li><strong>Distributed power architecture</strong> supporting continuous operation under full servo load</li>
      </ul>

      <ProjectImage 
        src="images/AnimatronicHead/me-with-final-head.jpeg" 
        alt="Final animatronic head with creator"
        caption="Final head with creator"
      />

      <ProjectImage 
        src="images/AnimatronicHead/presentation-day.jpeg" 
        alt="Presentation day"
        caption="Presentation day"
      />

      <div className={styles['content-card']}>
        <h3>Context</h3>
        <p>
          This was my final project for a mechatronics course, developed over several months as a 
          comprehensive exploration of interdisciplinary engineering. The project requirements included 
          demonstrating integration of mechanical design, embedded electronics, and software control, with 
          emphasis on creating a functional demonstration piece suitable for public presentation.
        </p>
        <p>
          The challenge was open-ended: create a mechatronic system that showcases technical skill while 
          pushing the boundaries of what we'd learned in class. I chose to build an animatronic head 
          because it sits directly at the intersection of art and engineering—where sculptural form defines 
          mechanical constraints, mechanics dictate electronics strategy, and electronics shape how 
          interaction becomes possible.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>My Role</h3>
        <p>
          I designed and built the entire system independently, from initial concept through final 
          demonstration. My specific contributions included:
        </p>
        <ul>
          <li><strong>Mechanical Design:</strong> Complete 3D modeling in Fusion 360 of the internal skeleton, all servo mounting systems, linkage mechanisms, and structural components. Designed the magnetic attachment system for the removable skin.</li>
          <li><strong>Electronics Design:</strong> Custom PCB design in KiCad, power distribution architecture, servo driver integration, and complete system wiring. Fabricated PCBs using the Bantam Tools desktop milling machine.</li>
          <li><strong>Firmware Development:</strong> Wrote all control software in Arduino IDE including servo calibration systems, WiFi access point creation, web server implementation, and expression choreography logic.</li>
          <li><strong>Fabrication:</strong> 3D printed all structural components, created positive and negative molds for silicone casting, and performed all silicone skin casting and finishing work using Smooth-On Dragon Skin FX Pro.</li>
          <li><strong>System Integration:</strong> Assembled all subsystems, performed comprehensive calibration of 21 individual servos, and developed the browser-based control interface.</li>
        </ul>
        <p>
          The only component I didn't design from scratch was the basic hand-drawn sketch I used as 
          inspiration for facial proportions—everything else, from CAD models to firmware to the final 
          skin casting, was my own work.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Design Philosophy & Key Decisions</h3>
        <p>
          The core philosophy: minimal but deliberate movements can make machines feel alive when their behavior is designed with intention. Rather than photorealistic replication, I embraced the mechanical nature while striving for expressive motion that reads as emotionally authentic.
        </p>
        <ul>
          <li><strong>21 servos:</strong> Independent control over eyes (6), eyebrows (4), jaw (2), and mouth (9) for believable expressions. Fewer would limit expressiveness; more would add complexity without improvement.</li>
          <li><strong>Removable silicone skin:</strong> Enables maintenance access, iterative development, and educational demonstrations revealing internal mechanisms.</li>
          <li><strong>Browser-based WiFi control:</strong> ESP32 S3 creates its own access point—no external network required. Accessible from any device, demonstrates anywhere.</li>
          <li><strong>Magnetic attachment:</strong> Tool-free, non-destructive removal critical for rapid iteration and repeated demonstration cycles.</li>
        </ul>

        <ProjectImage 
          src="images/AnimatronicHead/final-assembly-fusion.png" 
          alt="CAD assembly showing internal structure"
          caption="Fusion 360 assembly showing complete internal skeleton and servo placement"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Design Philosophy & Goals</h3>
        <p>
          My core design philosophy was that minimal but deliberate movements can make machines feel alive 
          when their behavior is designed with intention. Rather than attempting photorealistic human 
          replication, I embraced the mechanical nature of the system while striving for expressive motion 
          that reads as emotionally authentic.
        </p>
        <ul>
          <li>Create convincing facial expressions and synchronized speech capability</li>
          <li>Modular design enabling independent testing and refinement of subsystems</li>
          <li>Browser-based control interface for real-time operation without specialized software</li>
          <li>Removable silicone skin exposing internal mechanisms for educational demonstrations</li>
          <li>Robust enough for classroom demonstrations and public exhibitions</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Prototyping & Iterations</h3>

        <ProjectImage 
          src="images/AnimatronicHead/first-version-head-and-skin.jpeg" 
          alt="Early prototype assembly"
          caption="First complete assembly revealing mechanical interference issues"
        />

        <p>
          The first complete assembly revealed mechanical interference between adjacent servo systems requiring significant redesign of mounting strategies and linkage geometries. Wire management proved far more complex than anticipated, leading to connector standardization overhaul.
        </p>
        <p>
          <strong>Key learning:</strong> Keep early models mechanically simple—rectangular and functional—before adding aesthetics. This lets you focus on getting mechanisms working before worrying about appearance. Virtual collision detection in Fusion 360 caught many issues before printing, significantly reducing iteration time.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>How the System Works</h3>
        <p>
          The animatronic head operates as a distributed embedded system with carefully orchestrated hardware and software components prioritizing real-time responsiveness while maintaining safe operational limits.
        </p>

        <ProjectImage 
          src="images/AnimatronicHead/final-system-diagram.JPG" 
          alt="System Architecture Diagram"
          caption="Complete system architecture showing communication flow"
        />

        <ul>
          <li>Servo drivers powered from dedicated 5V external supply capable of sustaining 21 simultaneous servo motors</li>
          <li>ESP32 S3 creates custom WiFi access point (SSID: Animatronic_Head) enabling direct connection without external network</li>
          <li>Browser interface connects to 192.168.4.1 providing real-time control with minimal latency</li>
          <li>Expression commands and audio playback trigger precisely coordinated servo motion patterns</li>
        </ul>
      </div>

      <div className={styles['hardware-card']}>
        <h3>Hardware Architecture</h3>
        <ul>
          <li><strong>Control MCU:</strong> ESP32 S3 with dual-core processing and WiFi for simultaneous network and real-time servo control</li>
          <li><strong>Servo Drivers:</strong> Two Adafruit PCA9685 16-channel I2C servo drivers (addresses 0x40, 0x41) providing 12-bit PWM resolution</li>
          <li><strong>Audio:</strong> DFPlayer Mini MP3 module with microSD storage for synchronized audio playback</li>
          <li><strong>Power:</strong> External 5V switching supply (5A+ capacity) with isolated power rails preventing servo current spikes from affecting logic</li>
          <li><strong>Servo Motors:</strong> 6 SG90 micro servos (eyes), 13 MG90S 9g metal-geared servos (eyebrows/mouth), 2 MG996R high-torque servos (jaw)</li>
        </ul>

        <h4>Why This Architecture?</h4>
        <p>
          The ESP32 S3's dual-core processing separates WiFi/web server duties from real-time servo control, preventing network latency from affecting motion smoothness. The PCA9685 boards offload PWM generation from the microcontroller, providing stable, jitter-free servo signals. Separate power supplies for logic and servos prevent voltage sag that would destabilize the system.
        </p>

        <ProjectImage 
          src="images/AnimatronicHead/Final-pcb1.png" 
          alt="Primary PCB Design"
          caption="Primary PCB showing ESP32 S3 and servo driver integration"
        />

        <ProjectImage 
          src="images/AnimatronicHead/final-skeleton.jpeg" 
          alt="Complete skeleton with all electronics"
          caption="Complete skeleton assembly with all servo motors and electronics installed"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Mechanical Design & Subsystems</h3>
        <p>
          The mechanical design prioritizes modularity while achieving complex motion requirements for believable facial expression. Each subsystem was designed to operate independently but coordinate seamlessly.
        </p>

        <h4>Eyes (6 Servos)</h4>
        <ul>
          <li>1 servo for coordinated horizontal left-right movement (linked eyeballs)</li>
          <li>1 servo for vertical up-down movement with mechanical stops</li>
          <li>2 upper eyelid servos (left/right) for asymmetric blinking</li>
          <li>2 lower eyelid servos (left/right) for complete eye aperture control</li>
        </ul>
        <p><strong>Why this design?</strong> Linking both eyeballs to one servo ensures natural movement; humans can&apos;t independently control each eye. Separate eyelid servos enable expressions like winking. SG90 micro servos fit the constrained eye socket space.</p>

        <h4>Eyebrows (4 Servos)</h4>
        <ul>
          <li>2 outer eyebrow servos (left/right) for surprise, skepticism, curiosity</li>
          <li>2 inner eyebrow servos (left/right) for frowning, concern, concentration</li>
        </ul>
        <p><strong>Why split inner/outer?</strong> Eyebrows don't move as rigid units—furrowing pulls inner corners together while surprise raises outer corners. Four servos create those subtle distinctions. Metal-geared MG90S provides sufficient torque against skin resistance.</p>

        <h4>Jaw (2 Servos)</h4>
        <p>
          Two high-torque MG996R servos providing substantial force for jaw opening/closing against silicone skin resistance. Dual configuration ensures sufficient torque and provides redundancy.
        </p>

        <h4>Mouth (9 Servos)</h4>
        <ul>
          <li>2 upper lip servos (left/right) for asymmetric expressions and speech articulation</li>
          <li>4 smile/frown servos creating natural curves at mouth corners</li>
          <li>2 lower lip servos (left/right) for complex mouth shapes</li>
          <li>1 tongue actuator for speech synchronization</li>
        </ul>
        <p><strong>Why 9 servos?</strong> The mouth is the most expressive facial region. Independent lip control enables asymmetric expressions while smile/frown servos create natural curves. Tongue movement significantly improves lip-sync illusion.</p>

        <ProjectImage 
          src="images/AnimatronicHead/eyeball-plan.JPG" 
          alt="Eyeball mechanism design"
          caption="Eyeball linkage system showing coordinated horizontal movement"
        />

        <ProjectImage 
          src="images/AnimatronicHead/eyebrow-mechanism.png" 
          alt="Eyebrow mechanism"
          caption="Four-servo eyebrow system enabling complex asymmetric expressions"
        />
      </div>

      <div className={styles['content-card']}>
        <h3>Silicone Skin & Magnetic Attachment</h3>
        <p>
          The silicone skin serves dual purposes: it provides a lifelike appearance while enabling tool-free removal for maintenance and demonstration.
        </p>

        <h4>Mold & Casting Process</h4>

        <ProjectImage 
          src="images/AnimatronicHead/plaster-mold.jpeg" 
          alt="Plaster mold"
          caption="Initial plaster mold created from sculptural form"
        />

        <ProjectImage 
          src="images/AnimatronicHead/plaster-silicon-mold.jpeg" 
          alt="Complete mold system"
          caption="Complete two-part mold system ready for silicone pour"
        />

        <h4>Material & Technique</h4>
        <ul>
          <li><strong>Material:</strong> Smooth-On Dragon Skin FX Pro with custom flesh-toned pigment—offers optimal balance of flexibility for expression and durability for handling</li>
          <li><strong>Thickness:</strong> 3-4mm provides optimal flexibility for movement while maintaining structural integrity. Thicker resists servo motion; thinner tears easily.</li>
          <li><strong>Magnet embedding:</strong> Neodymium magnets embedded between silicone layers with only necessary magnetic force—overly strong magnets cause skin deformation</li>
          <li><strong>Fiber reinforcement:</strong> Mesh at high-stress points (eyes, mouth) and magnet locations prevents tearing during repeated attachment/removal</li>
        </ul>

        <ProjectImage 
          src="images/AnimatronicHead/first-skin.jpeg" 
          alt="First skin casting attempt"
          caption="First skin casting—too thick and inflexible for proper expression"
        />

        <ProjectImage 
          src="images/AnimatronicHead/final-skin.jpeg" 
          alt="Completed silicone skin"
          caption="Completed silicone skin with embedded magnets ready for installation"
        />

        <h4>Magnetic Attachment Strategy</h4>
        <p>
          18 strategically positioned magnets at: eyebrow regions, upper/lower lip sections, temple areas, nose bridge/tip, cheekbones, chin/jawline, and posterior points. This distribution maintains secure positioning during operation while allowing tool-free removal.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Software & Control System</h3>

        <h4>Calibration</h4>
        <p>
          Each of 21 servos undergoes individual calibration establishing: neutral rest position, minimum safe position (preventing binding/interference), and maximum safe position (preventing over-extension). These limits are stored in non-volatile memory and actively enforced in real-time.
        </p>

        <h4>Expression Choreography & Audio</h4>
        <ul>
          <li>Facial expressions implemented as choreographed servo position sets with smooth interpolation between states</li>
          <li>Custom MP3 files on microSD with phoneme-based synchronization mapping mouth/jaw/tongue movements to actual sounds</li>
          <li>DFPlayer Mini handles audio independently of main processor</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Key Learnings</h3>

        <h4>Engineering Principles</h4>
        <ul>
          <li><strong>Modular design:</strong> Removable eyes, eyebrows, mouth enabled independent testing without disturbing other systems</li>
          <li><strong>Breadboard first:</strong> Test electronics on breadboards before PCB fabrication—caught several power sequencing issues</li>
          <li><strong>Import real component models:</strong> Using actual 3D models of servos, connectors prevented expensive "it should fit" disasters</li>
          <li><strong>Keep early designs simple:</strong> Rectangular, functional geometry first; aesthetic refinement last</li>
          <li><strong>Magnet strength matters:</strong> Overly strong magnets cause skin deformation—use only what's necessary</li>
          <li><strong>Document continuously:</strong> Catching up on documentation at the end is painful; photograph and note decisions as they happen</li>
        </ul>

        <h4>Fabrication Tips</h4>
        <ul>
          <li>Mesh reinforcement prevents silicone tearing at high-stress points and magnet locations</li>
          <li>Hexagonal magnet holes with -0.1mm offset and 0.8mm chamfer create excellent press fits for neodymium magnets</li>
          <li>Snap fits on 3D prints are unreliable—use screws or press fits instead</li>
          <li>Standard metric screw holes everywhere make assembly and maintenance much easier</li>
        </ul>

        <h4>Reflection</h4>
        <p>
          Creating systems that feel alive requires obsessive attention to motion design. The technology—servos, microcontrollers, PCBs—is relatively straightforward. The challenge is in the choreography: timing, coordination, smooth transitions. When those details are right, even visibly mechanical systems evoke genuine emotional responses.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Final Result</h3>
        <p>
          The completed animatronic head successfully demonstrates coordinated movement of all 21 servo 
          subsystems working together to create believable facial expressions. The browser-based control 
          interface enables real-time operation from any device, and the removable silicone skin allows 
          educational demonstrations of the internal mechanical systems.
        </p>
        <p>
          The project met all core objectives: convincing facial expressions, synchronized speech capability, 
          modular design, browser-based control, and removable skin. While the stretch goal of camera-based 
          face tracking was deprioritized due to time constraints, the system as built successfully demonstrates 
          the intersection of mechanical design, electronics, and software in creating expressive robotic systems.
        </p>
      </div>
    </div>
  );
  
  return <ProjectPage title="Animatronic Head" content={content} params={params} />;
}