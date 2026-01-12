import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectRockPaperScissorsHand(params: SubViewParams) {
  const content = (
    <div>
      <h3>Project Overview</h3>
      <p>
        A computer vision-driven mechanical hand that plays rock-paper-scissors against human opponents. 
        The system watches a human player, identifies their hand gesture through real-time image processing, 
        and responds by physically forming a randomized gesture with servo-controlled fingers. Rather than 
        displaying results on a screen, the machine embodies its decisions through legible physical motion.
      </p>

      <ProjectImage 
        src="images/RockPaperScissorsHand/camera-arm-mirror.MOV" 
        alt="Camera and arm mirror video"
        caption="Camera and arm mirror video"
        isVideo
      />

      <ProjectImage 
        src="images/RockPaperScissorsHand/mechanical-arm-test.MOV" 
        alt="Mechanical arm test"
        caption="Mechanical arm test"
        isVideo
      />

      <ProjectImage 
        src="images/RockPaperScissorsHand/rock-paper-scissors.MOV" 
        alt="Rock paper scissors gameplay"
        caption="Rock paper scissors gameplay"
        isVideo
      />

      <div className={styles['content-card']}>
        <h3>Context & Evolution</h3>
        <p>
          This project grew directly out of my work on the flame thrower glove. While researching and 
          planning that system, I became deeply interested in mechatronics—specifically how sensing, 
          decision-making, and motion come together. I wanted a lower-risk environment to explore those 
          ideas further, and computer vision felt like the natural next step.
        </p>
        <p>
          After working on the flame thrower glove, I wanted to test how far perception could be pushed. 
          Could a machine see what a human does and convincingly replicate it through robotics?
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>My Role</h3>
        <p>
          I designed the vision system, servo actuation logic, and control software. I pulled the mechanical 
          hand design from an open source project since I wanted to focus more on the software for this 
          project. I treated this as an opportunity to study how machines can observe human motion and 
          physically respond to it in a legible way.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>How It Works</h3>
        <p>
          A camera feeds a vision pipeline that detects and classifies hand gestures in real time. The 
          system analyzes the video stream, identifies the human player's gesture (rock, paper, or scissors), 
          and processes that classification through game logic. The software then coordinates multiple servos 
          to articulate the mechanical fingers into the corresponding hand shape.
        </p>
        <p>
          The emphasis is on embodiment—software decisions are expressed through motion rather than screens. 
          The mechanical hand physically performs its response, making the interaction tangible and immediate.
        </p>
      </div>

      <div className={styles['hardware-card']}>
        <h3>Hardware Stack</h3>
        
        <h4>Vision System</h4>
        <ul>
          <li><strong>MacBook Webcam</strong> - Captures live video feed of human player's hand gestures</li>
          <li><strong>Processing Computer</strong> - Runs computer vision pipeline and control logic</li>
        </ul>

        <h4>Mechanical Components</h4>
        <ul>
          <li><strong>3D-Printed Robotic Hand</strong> - Open source design with articulated fingers</li>
          <li><strong>Servo Motors (5x)</strong> - Individual servos for each finger providing independent control</li>
          <li><strong>Mounting Frame</strong> - Rigid structure positioning hand within camera view</li>
        </ul>

        <h4>Control & Power</h4>
        <ul>
          <li><strong>Microcontroller</strong> - Receives gesture commands and translates to servo positions</li>
          <li><strong>Power Supply</strong> - Regulated power for servos and control electronics</li>
          <li><strong>USB Interface</strong> - Communication link between vision computer and servo controller</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Game Logic & Flow</h3>
        
        <h4>Game State Machine</h4>
        <p>
          The system operates through a defined sequence of states:
        </p>
        <ul>
          <li><strong>Waiting</strong> - Hand in neutral position, vision system monitoring for player gesture</li>
          <li><strong>Detection</strong> - Valid gesture detected with sufficient confidence</li>
          <li><strong>Decision</strong> - System randomly selects its own gesture (rock, paper, or scissors)</li>
          <li><strong>Execution</strong> - Servos articulate fingers to form chosen gesture</li>
          <li><strong>Display</strong> - Both gestures held momentarily for clear comparison</li>
          <li><strong>Reset</strong> - Return to neutral position for next round</li>
        </ul>

        <h4>Randomization</h4>
        <p>
          The mechanical hand's gesture is randomly generated to ensure fair gameplay. The randomization 
          occurs after the player's gesture is detected, preventing any appearance of the machine 
          "cheating" by waiting to see the human choice.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Software Architecture</h3>
        
        <h4>Vision Processing Module</h4>
        <p>
          Built using OpenCV for Python, the vision module handles all image processing and gesture 
          classification. It runs in a continuous loop, processing frames and maintaining detection state.
        </p>

        <h4>Control Interface Module</h4>
        <p>
          Manages communication with the servo controller, translating high-level gesture commands into 
          specific servo position arrays. Handles error checking and ensures commands are properly formatted.
        </p>

        <h4>Game Logic Module</h4>
        <p>
          Coordinates the overall game flow, managing state transitions, randomization, and timing. Ensures 
          proper sequencing between gesture detection, decision-making, and mechanical response.
        </p>

        <h4>Calibration Tools</h4>
        <p>
          Separate utilities for tuning vision parameters (color thresholds, detection sensitivity) and 
          servo positions (finger curl angles, speed profiles) without modifying core code.
        </p>
      </div>


      <div className={styles['content-card']}>
        <h3>Tools & Technologies</h3>
        <ul>
          <li><strong>OpenCV</strong> - Computer vision library for image processing and gesture recognition</li>
          <li><strong>Python</strong> - Primary programming language for vision and control logic</li>
          <li><strong>NumPy</strong> - Numerical computing for image array manipulation</li>
          <li><strong>Serial Communication</strong> - Protocol for vision computer to servo controller communication</li>
          <li><strong>Arduino/Servo Controller</strong> - Hardware interface for servo control</li>
          <li><strong>3D Printing</strong> - Fabrication of mechanical hand components</li>
        </ul>
      </div>

    </div>
  );
  
  return <ProjectPage title="Rock-Paper-Scissors Mechanical Arm" content={content} params={params} />;
}