import Link from "next/link";
import styles from "./CaseStudyTemplate.module.css";
import OverviewGrid from "./OverviewGrid";
import IconTextList from "./IconTextList";
import FeatureBlock from "./FeatureBlock";
import ImageGrid from "./ImageGrid";
import PrototypeCTA from "./PrototypeCTA";
import CaseStudyContents from "./CaseStudyContents";

export default function CaseStudyTemplate({ project }) {
  const { title, tagline, category, liveUrl, repoUrl, figmaUrl } = project;
  const {
    years,
    heroImage,
    overview,
    highlights,
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
    highlights?.length > 0 && { id: "highlights", label: "Highlights" },
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

  return (
    <article className={styles.page}>
      <Link href="/#projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section id="top" className={styles.hero}>
        {heroImage && (
          <div className={styles.heroImageWrap}>
            <img src={heroImage} alt={title} className={styles.heroImage} />
          </div>
        )}
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {years && <p className={styles.years}>{years}</p>}
        </header>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
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

          {highlights?.length > 0 && (
            <section id="highlights" className={styles.section}>
              <h2 className={styles.sectionHeading}>Highlights</h2>
              <ImageGrid images={highlights} alt={`${title} highlight`} />
            </section>
          )}

          {challenge && (
            <section id="challenge" className={styles.section}>
              <h2 className={styles.sectionHeading}>The Challenge</h2>
              {challenge.problemFraming && <p className={styles.content}>{challenge.problemFraming}</p>}
              <IconTextList items={challenge.pinpointingIssues} />
            </section>
          )}

          {solution && (
            <section id="solution" className={styles.section}>
              <h2 className={styles.sectionHeading}>The Solution</h2>
              {solution.goalsBody && <p className={styles.content}>{solution.goalsBody}</p>}
              <IconTextList items={solution.highLevelGoals} />
            </section>
          )}

          {research && (
            <section id="research" className={styles.section}>
              <h2 className={styles.sectionHeading}>Research</h2>
              {research.marketInsights && <p className={styles.content}>{research.marketInsights}</p>}
              <IconTextList items={research.usabilityInterviews} />
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
                </div>
              )}
              {designProcess.explorations && (
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>Explorations</h3>
                  <p className={styles.content}>{designProcess.explorations}</p>
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
                <div className={styles.designSystemImageWrap}>
                  <img src={visualDesign.designSystemImage} alt="Design system" className={styles.designSystemImage} />
                </div>
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
              <IconTextList items={reflections.keyTakeaways} />
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
