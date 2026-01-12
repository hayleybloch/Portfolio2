import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectWoodenRecordPlayer(params: SubViewParams) {
  const content = (
    <div>
      <h3>Project Overview</h3>
      <p>
        A digital record player that bridges the tactile ritual of vinyl with modern streaming technology. 
        Custom laser-engraved wooden disks with embedded RFID tags act as physical "records" that trigger 
        Spotify playback when placed on the turntable, recreating the deliberate, album-focused listening 
        experience of vinyl in the digital age.
      </p>

      <ProjectImage 
        src="images/WoodenRecordPlayer/Wooden-Record-Player.JPG" 
        alt="Full view of the wooden digital record player"
        caption="The completed wooden digital record player"
      />

      <ProjectImage 
        src="images/WoodenRecordPlayer/First-record-test.MOV" 
        alt="First record test"
        caption="First record test"
        isVideo
      />

      <ProjectImage 
        src="images/WoodenRecordPlayer/swapable-records.MOV" 
        alt="Swappable records demonstration"
        caption="Swappable records demonstration"
        isVideo
      />

      <div className={styles['content-card']}>
        <h3>Context & Motivation</h3>
        <p>
          This personal project emerged from my fascination with the physicality of record players—the weight 
          of a disk, the deliberate act of choosing an album, the slow commitment to listening. While I rely 
          on streaming for its flexibility and access, I missed the intentional ritual of vinyl. This project 
          lives in that intersection, translating the motions and feelings of playing records into a system 
          that belongs in the present.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Design Philosophy</h3>
        <p>
          My goal was not to recreate the tech of vinyl, but to extend the human ritual of album listening. 
          Wood was chosen for its warmth and permanence, grounding digital playback in something tangible. 
          RFID technology allows the electronics to disappear entirely, keeping the interaction physical and 
          intuitive. All components are hidden within the wooden enclosure, allowing the object to present 
          as furniture rather than consumer technology.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>How It Works</h3>
        <p>
          When a wooden disk is placed on the player, the RFID reader detects the embedded tag and triggers 
          a Spotify API call to play the hard-coded album. The disk begins rotating, and the LCD display 
          instructs the user to place the tonearm over the spinning record. When the tonearm makes contact, 
          a mechanical switch triggers playback through the embedded speaker. Moving the tonearm off pauses 
          the music and stops rotation. Returning it resumes playback seamlessly, just like a traditional 
          record player.
        </p>
      </div>

      <div className={styles['hardware-card']}>
        <h3>Hardware Stack</h3>
        
        <h4>Core System</h4>
        <ul>
          <li><strong>Raspberry Pi 4 Model B</strong> - Main processing unit, runs Python control script, manages Wi-Fi connectivity</li>
        </ul>

        <h4>Disk Recognition</h4>
        <ul>
          <li><strong>MFRC522 RFID Reader</strong> - Reads embedded tags via SPI to identify albums</li>
          <li><strong>RFID Tags</strong> - Embedded in wooden disks, each linked to a Spotify URI</li>
        </ul>

        <h4>Mechanical Interface</h4>
        <ul>
          <li><strong>MG90S Servo Motor</strong> - Controls record rotation with PWM</li>
          <li><strong>Pushbutton Switch</strong> - Wired to GPIO D9 using INPUT_PULLUP for manual control</li>
          <li><strong>Laser-Cut Wooden Disks</strong> - Custom engraved with album artwork and embedded RFID</li>
        </ul>

        <h4>Display & Audio</h4>
        <ul>
          <li><strong>I2C LCD Display (16x2)</strong> - Shows track title, artist, and status messages</li>
          <li><strong>Bluetooth Speaker</strong> - Embedded audio output</li>
        </ul>

        <h4>Power Management</h4>
        <ul>
          <li><strong>Buck Converter</strong> - Steps down 12V input to 5V for peripherals</li>
          <li><strong>USB Step-Down Converter</strong> - Stable 5V supply for Raspberry Pi via USB-C</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Software Architecture</h3>
        
        <h4>Python Control Script</h4>
        <p>
          The core Python script orchestrates all system functions:
        </p>
        <ul>
          <li>Monitors RFID input via SPI using the MFRC522 library</li>
          <li>Authenticates and controls Spotify playback through Spotipy (Spotify Web API wrapper)</li>
          <li>Controls servo motor with GPIO PWM for smooth rotation</li>
          <li>Updates LCD display using smbus and I2C_LCD_driver for real-time feedback</li>
          <li>Handles button interrupts with GPIO event detection</li>
        </ul>

        <h4>Spotify Integration</h4>
        <ul>
          <li>User authentication via OAuth 2.0</li>
          <li>Album/playlist search and playback control</li>
          <li>Real-time track metadata sent to LCD display</li>
          <li>Playback state management (play, pause, resume)</li>
        </ul>
      </div>

      <div className={styles['content-card']}>
        <h3>Fabrication Process</h3>
        
        <h4>Enclosure Design</h4>
        <p>
          After researching classic record player proportions, I designed a rectangular base with rounded 
          corners in Adobe Illustrator. The DXF files included living hinges for curved edges and interlocking 
          tabs for structural integrity. The design balances aesthetic warmth with practical assembly.
        </p>

        <h4>Record Creation</h4>
        <p>
          Custom wooden disks were designed in Inkscape, starting with album cover art and adding graphic 
          elements. With ChatGPT's assistance, I refined vector files and prepared them in Illustrator for 
          laser cutting. Each disk contains an RFID tag on the underside, invisible but functional.
        </p>

        <h4>Laser Cutting</h4>
        <p>
          Both the enclosure and records were cut and engraved using a Glowforge laser cutter. The living 
          hinge pattern allows flat wooden sheets to curve elegantly, while precise tolerances ensure smooth 
          disk rotation and reliable RFID detection.
        </p>
      </div>

      <div className={styles['content-card']}>
        <h3>Tools & Technologies</h3>
        <ul>
          <li><strong>Inkscape</strong> - Album art vectorization and record layout design</li>
          <li><strong>Adobe Illustrator</strong> - DXF file preparation for laser cutting</li>
          <li><strong>Fusion 360</strong> - Enclosure prototyping and component fitting</li>
          <li><strong>Glowforge / Epilog Laser Cutter</strong> - Cutting and engraving wooden components</li>
          <li><strong>ChatGPT</strong> - Vector file refinement and design assistance</li>
        </ul>
      </div>

      <div className={styles['card-grid']}>
        <div className={styles['content-card']}>
          <h3>Technical Challenges</h3>
          <ul>
            <li><strong>RFID Detection Reliability</strong> - Optimized tag placement and reader positioning to ensure consistent detection through wood grain</li>
            <li><strong>Servo Timing</strong> - Synchronized servo rotation with Spotify API calls to create seamless start/stop behavior</li>
            <li><strong>Mechanical Precision</strong> - Designed living hinges and tabs to balance flexibility with structural stability</li>
            <li><strong>User Feedback Loop</strong> - Integrated LCD to provide clear status updates during the interaction flow</li>
            <li><strong>Power Distribution</strong> - Managed voltage requirements across multiple components with efficient step-down converters</li>
          </ul>
        </div>

        <div className={styles['content-card']}>
          <h3>Key Features</h3>
          <ul>
            <li>Seamless physical-to-digital interaction with no visible technology</li>
            <li>Tonearm-controlled playback mimicking traditional vinyl experience</li>
            <li>Real-time track information on integrated LCD display</li>
            <li>Custom laser-engraved album artwork on each wooden disk</li>
            <li>Elegant living hinge construction for curved wooden edges</li>
            <li>Complete Spotify integration with OAuth authentication</li>
          </ul>
        </div>
      </div>

      <div className={styles['content-card']}>
        <h3>Project Reflection</h3>
        <p>
          This project represents my philosophy on technology design: tools should extend human rituals, not 
          replace them. By preserving the pause before sound and the physical commitment to an album while 
          maintaining modern flexibility, the Wooden Digital Record Player exists as both a functional music 
          player and a meditation on how we interact with media. It's a reminder that the best technology 
          often feels like no technology at all.
        </p>
      </div>
    </div>
  );
  
  return <ProjectPage title="Wooden Digital Record Player" content={content} params={params} />;
}