import Link from "next/link";
import styles from "./CaseStudyTemplate.module.css";
import OverviewGrid from "./OverviewGrid";
import IconTextList from "./IconTextList";
import ChallengeCards from "./ChallengeCard";
import FeatureBlock from "./FeatureBlock";
import ImageGrid from "./ImageGrid";
import ZoomableImage from "./ZoomableImage";
import PrototypeCTA from "./PrototypeCTA";
import CaseStudyContents from "./CaseStudyContents";
import InterviewMockup from "./InterviewMockup";

function Paragraphs({ text }) {
  const paragraphs = Array.isArray(text)
    ? text
    : text.split(/\n\s*\n/);

  return paragraphs.filter(Boolean).map((paragraph, index) => (
    <p key={index} className={styles.content}>{paragraph}</p>
  ));
}

export default function CaseStudyTemplate({ project }) {
  const { title, tagline, category, liveUrl, repoUrl, figmaUrl } = project;
  const {
    years,
    heroImage,
    overview,
    challenge,
    solution,
    research,
    designProcess,
    keyFeatures,
    visualDesign,
    finalDesigns,
    developerHandoff,
    reflections,
  } = project.caseStudy;

  const sections = [
    overview && { id: "overview", label: "Overview" },
    challenge && { id: "challenge", label: "The Challenge" },
    solution && { id: "solution", label: "The Solution" },
    research && { id: "research", label: "Research" },
    designProcess && { id: "design", label: "Design Process" },
    keyFeatures?.length > 0 && { id: "keyfeatures", label: "Key Features" },
    visualDesign && { id: "visualdesign", label: "Visual Design" },
    finalDesigns && { id: "final", label: "Final Designs" },
    developerHandoff && { id: "developer", label: "Developer Handoff" },
    reflections && { id: "reflections", label: "Reflections" },
  ].filter(Boolean);

  const researchMethods = research?.methods?.length > 0
    ? research.methods
    : [
        research?.marketInsights && {
          heading: "Market Insights & Competitor Analysis",
          body: research.marketInsights,
        },
        research?.usabilityInterviews?.length > 0 && {
          heading: "Usability Interviews",
          findings: research.usabilityInterviews,
        },
      ].filter(Boolean);

  return (
    <article className={styles.page}>
      <Link href="/#projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section id="top" className={styles.hero}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        {years && <p className={styles.years}>{years}</p>}
        {heroImage && (
          <ZoomableImage
            src={heroImage}
            alt={title}
            wrapClassName={styles.heroImageWrap}
            className={styles.heroImage}
          />
        )}
      </section>

      <div className={styles.contentLayout}>
        <div className={styles.mainContent}>
          {overview && (
            <section id="overview" className={styles.section}>
              <h2 className={styles.sectionHeading}>Overview</h2>
              <OverviewGrid overview={overview} />

              <div className={styles.links} aria-label="Project links">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillLive}`}>
                    Live Site
                  </a>
                )}
                {repoUrl && (
                  <a href={repoUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillRepo}`}>
                    View Code
                  </a>
                )}
                {category === "design" && figmaUrl && (
                  <a href={figmaUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillFigma}`}>
                    View in Figma
                  </a>
                )}
              </div>
            </section>
          )}

          {challenge && (
            <section id="challenge" className={styles.section}>
              {challenge.eyebrow && <p className={styles.eyebrow}>{challenge.eyebrow}</p>}
              <h2 className={styles.sectionHeading}>{challenge.headline || "The Challenge"}</h2>

              {challenge.heroImage && (
                <div className={styles.evidenceHero}>
                  <div className={styles.evidenceHeroImageWrap}>
                    <ZoomableImage
                      src={challenge.heroImage}
                      alt={challenge.headline || title}
                      wrapClassName={styles.imageBlockWrap}
                      className={styles.imageBlock}
                    />
                    {challenge.heroTag && (
                      <span className={styles.evidenceTag}>{challenge.heroTag}</span>
                    )}
                  </div>
                  {challenge.heroCaption && (
                    <p className={styles.caption}>{challenge.heroCaption}</p>
                  )}
                </div>
              )}

              {challenge.evidence?.length > 0 && (
                <div className={styles.evidenceRow}>
                  {challenge.evidence.map((item, i) => (
                    <div key={item.image || i} className={styles.evidenceCell}>
                      <ZoomableImage
                        src={item.image}
                        alt={item.caption || `${title} evidence ${i + 1}`}
                        wrapClassName={styles.imageBlockWrap}
                        className={styles.imageBlock}
                      />
                      {item.caption && <p className={styles.caption}>{item.caption}</p>}
                    </div>
                  ))}
                </div>
              )}

              <ChallengeCards items={challenge.pinpointingIssues} />
            </section>
          )}

          {solution && (
            <section id="solution" className={styles.section}>
              {solution.eyebrow && <p className={styles.eyebrow}>{solution.eyebrow}</p>}
              <h2 className={styles.sectionHeading}>{solution.headline || "The Solution"}</h2>

              {solution.highlights?.length > 0 && (
                <div className={styles.solutionGrid}>
                  {solution.highlights.map((item, i) => (
                    <div key={item.title || i} className={styles.solutionCard}>
                      {item.title && <h3 className={styles.solutionTitle}>{item.title}</h3>}
                      {item.text && <p className={styles.solutionText}>{item.text}</p>}
                      {item.image && (
                        <ZoomableImage
                          src={item.image}
                          alt={item.title || `${title} solution ${i + 1}`}
                          wrapClassName={styles.solutionImageWrap}
                          className={styles.solutionImage}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {research && (
            <section id="research" className={styles.section}>
              <h2 className={styles.sectionHeading}>Research Summary</h2>
              {research.intro && <Paragraphs text={research.intro} />}
              <div className={styles.researchMethods}>
                {researchMethods.map((method) => (
                  <section key={method.heading} className={styles.researchMethod}>
                    <h3 className={styles.subHeading}>{method.heading}</h3>
                    {method.body && <Paragraphs text={method.body} />}
                    {method.images?.length > 0 && (
                      <ImageGrid images={method.images} alt={`${method.heading} research`} />
                    )}
                    <InterviewMockup messages={method.conversation} />
                    <ChallengeCards items={method.findings} />
                  </section>
                ))}
              </div>
            </section>
          )}

          {designProcess && (
            <section id="design" className={styles.section}>
              <h2 className={styles.sectionHeading}>Design Process</h2>
              {(designProcess.tools || designProcess.designReview) && (
                <dl className={styles.metaList}>
                  {designProcess.tools && (
                    <div className={styles.metaRow}>
                      <dt className={styles.metaLabel}>Tools</dt>
                      <dd className={styles.metaValue}>{designProcess.tools}</dd>
                    </div>
                  )}
                  {designProcess.designReview && (
                    <div className={styles.metaRow}>
                      <dt className={styles.metaLabel}>Design Review</dt>
                      <dd className={styles.metaValue}>{designProcess.designReview}</dd>
                    </div>
                  )}
                </dl>
              )}
              <IconTextList items={designProcess.ideation} />
              {designProcess.wireframing && (
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>Wireframing</h3>
                  <p className={styles.content}>{designProcess.wireframing}</p>
                  {designProcess.wireframingImages?.[0] && (
                    <ImageGrid images={[designProcess.wireframingImages[0]]} alt="Wireframing" />
                  )}
                  {designProcess.wireframingImages?.length > 1 && (
                    <ImageGrid images={designProcess.wireframingImages.slice(1)} alt="Wireframing detail" />
                  )}
                </div>
              )}
              {designProcess.explorations && (
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>Explorations</h3>
                  <p className={styles.content}>{designProcess.explorations}</p>
                  {designProcess.explorationsImages?.length > 0 && (
                    <ImageGrid images={designProcess.explorationsImages} alt="Explorations" />
                  )}
                </div>
              )}
            </section>
          )}

          {keyFeatures?.length > 0 && (
            <section id="keyfeatures" className={styles.section}>
              <h2 className={styles.sectionHeading}>Key Features</h2>
              <div className={styles.featureList}>
                {keyFeatures.map((feature) => (
                  <FeatureBlock key={feature.heading} {...feature} />
                ))}
              </div>
            </section>
          )}

          {visualDesign && (
            <section id="visualdesign" className={styles.section}>
              <h2 className={styles.sectionHeading}>Visual Design</h2>
              {visualDesign.designSystemImage && (
                <ZoomableImage
                  src={visualDesign.designSystemImage}
                  alt="Design system"
                  wrapClassName={styles.designSystemImageWrap}
                  className={styles.designSystemImage}
                />
              )}
              <div className={styles.visualDesignGrid}>
                {visualDesign.typography && (
                  <div className={styles.subBlock}>
                    <h3 className={styles.subHeading}>Typography</h3>
                    <p className={styles.content}>{visualDesign.typography}</p>
                  </div>
                )}
                {visualDesign.colorPalette && (
                  <div className={styles.subBlock}>
                    <h3 className={styles.subHeading}>Color Palette</h3>
                    <p className={styles.content}>{visualDesign.colorPalette}</p>
                  </div>
                )}
                {visualDesign.components && (
                  <div className={styles.subBlock}>
                    <h3 className={styles.subHeading}>Components</h3>
                    <p className={styles.content}>{visualDesign.components}</p>
                  </div>
                )}
                {visualDesign.branding && (
                  <div className={styles.subBlock}>
                    <h3 className={styles.subHeading}>Branding</h3>
                    <p className={styles.content}>{visualDesign.branding}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {finalDesigns && (
            <section id="final" className={styles.section}>
              <h2 className={styles.sectionHeading}>Final Designs</h2>
              <PrototypeCTA url={finalDesigns.prototypeUrl} />
              <ImageGrid images={finalDesigns.images} alt={`${title} final design`} />
            </section>
          )}

          {developerHandoff && (
            <section id="developer" className={styles.section}>
              <h2 className={styles.sectionHeading}>Developer Handoff</h2>
              <p className={styles.content}>{developerHandoff.body}</p>
            </section>
          )}

          {reflections && (
            <section id="reflections" className={styles.section}>
              <h2 className={styles.sectionHeading}>Reflections</h2>
              <ChallengeCards items={reflections.keyTakeaways} />
              {reflections.nextSteps?.length > 0 && (
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>Next Steps</h3>
                  <ul className={styles.bulletList}>
                    {reflections.nextSteps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </div>

        <aside className={styles.sidebar}>
          <CaseStudyContents sections={sections} />
        </aside>
      </div>
    </article>
  );
}
