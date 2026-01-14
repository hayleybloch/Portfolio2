import { SubViewParams } from "./AboutView";
import { ProjectPage, ProjectImage, AspectRatioAwareImageContainer } from "./ProjectComponents";
import styles from "./AboutView.module.css";

export function ProjectPottery(params: SubViewParams) {

  const content = (
    <div>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        I discovered pottery sophomore year of college in a small basement studio beneath my student housing. What started as curiosity turned into a deep appreciation for the quiet, detail driven process of working with clay. Ceramics taught me to slow down, embrace imperfection, and trust the evolution of a piece over time.</p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>My first introduction into sculpture was the hand replica that you can find below. After dabbling a bit in clay sculpture, I decided to teach myself wheel throwing which can you see below as well. Although I have no formal training in ceramics, I hope to learn something new each time I try a new project, something I carry in all aspects of my learning journey.</p>

      {/* Hand Sculpture & Early Work */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/first-sculpture-hand.MOV" isVideo>
          <ProjectImage 
            src="images/Pottery/first-sculpture-hand.MOV" 
            alt="Hand sculpture creation process"
            isVideo
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_3991.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_3991.JPG" 
            alt="Mushroom pot"
          />
        </AspectRatioAwareImageContainer>
      </div>

      {/* Wheel Throwing Pieces */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_0200.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_0200.JPG" 
            alt="Finished ceramic bowl"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_0201.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_0201.JPG" 
            alt="Ceramic vessel detail"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_0202.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_0202.JPG" 
            alt="Large vessel"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_0203.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_0203.JPG" 
            alt="Ceramic vessel"
          />
        </AspectRatioAwareImageContainer>
      </div>

      {/* Glazed & Fired Pieces */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7702.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7702.JPG" 
            alt="Glazed pottery"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7703.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7703.JPG" 
            alt="Fired ceramics"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_8362.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_8362.JPG" 
            alt="Multiple ceramic pieces"
          />
        </AspectRatioAwareImageContainer>
      </div>

      {/* Exploration & Forms */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7530.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7530.JPG" 
            alt="Ceramic forms"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7531.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7531.JPG" 
            alt="Textured pottery"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7532.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7532.JPG" 
            alt="Ceramic sculpture"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7533.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_7533.JPG" 
            alt="Ceramic form"
          />
        </AspectRatioAwareImageContainer>
      </div>

      {/* Process Videos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_0395.MOV" isVideo>
          <ProjectImage 
            src="images/Pottery/IMG_0395.MOV" 
            alt="Pottery process video"
            isVideo
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_3989.MOV" isVideo>
          <ProjectImage 
            src="images/Pottery/IMG_3989.MOV" 
            alt="Throwing demonstration"
            isVideo
          />
        </AspectRatioAwareImageContainer>
      </div>

      {/* Gallery Selection */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7855.jpeg">
          <ProjectImage 
            src="images/Pottery/IMG_7855.jpeg" 
            alt="Ceramic piece"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_7856.jpeg">
          <ProjectImage 
            src="images/Pottery/IMG_7856.jpeg" 
            alt="Glazed vessel"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_8361.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_8361.JPG" 
            alt="Finished bowl"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_8445.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_8445.JPG" 
            alt="Ceramic detail"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_8446.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_8446.JPG" 
            alt="Multiple vessels"
          />
        </AspectRatioAwareImageContainer>
        <AspectRatioAwareImageContainer src="images/Pottery/IMG_8447.JPG">
          <ProjectImage 
            src="images/Pottery/IMG_8447.JPG" 
            alt="Pottery detail"
          />
        </AspectRatioAwareImageContainer>
      </div>
      
    </div>
  );

  return <ProjectPage title="For Fun: Pottery & Ceramics" content={content} params={params} />;
}
