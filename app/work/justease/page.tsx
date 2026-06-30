import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import Footer from "@/components/layout/Footer";
import styles from "./justease.module.css";
import justeaseImg from "./justease.png";

export default function JustEasePage() {
  return (
    <main>
      <header className={styles.hero}>
        <FadeIn>
          <Link href="/work" className={styles.backNav}>
            ← Back to Work
          </Link>
          <p className={styles.eyebrow}>RAG </p>
          <h1 className={styles.title}>JustEase</h1>
          <p className={styles.description}>
            An AI-powered Retrieval-Augmented Generation (RAG) system designed to help citizens access judicial information through semantic search, intelligent document retrieval, and context-aware response generation.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Lead Developer</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>January 2025</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Context</span>
              <span className={styles.metaValue}>Smart India Hackathon 2025</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tech</span>
              <span className={styles.metaValue}>Legal AI, RAG, Sematic Seach, TypeScript, Render</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src={justeaseImg}
              alt="TaskFlow Dashboard Interface"
              className={styles.image}
              priority
            />
          </div>
        </FadeIn>
      </header>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>The Overview</h2>
            <p className={styles.text}>
              JustEase was developed as part of the Smart India Hackathon (SIH) with the objective of improving how citizens interact with the Department of Justice's digital services. While government portals contain an enormous amount of valuable legal and procedural information, locating precise answers often requires navigating multiple websites, documents, and databases. The project explores how Retrieval-Augmented Generation (RAG) can simplify this process by enabling users to ask questions in natural language and receive responses grounded in official judicial sources.
            </p>
            <p className={styles.text}>
              Rather than relying solely on a large language model, JustEase combines semantic search, document retrieval, and modern language models to produce factual, context-aware responses. The architecture was designed to be modular and scalable, allowing future integration with additional government departments while maintaining transparency, traceability, and high retrieval accuracy.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Problem & Solution</h2>
            <div className={styles.twoCol}>
              <div>
                <p className={styles.text} style={{ color: "var(--foreground)" }}>
                  <strong>The Problem:</strong> Government judicial information is distributed across multiple portals such as the Department of Justice, eCourts, NJDG, and related public repositories. Citizens often struggle to determine where information is located, what terminology to search for, and how different judicial services relate to one another. Traditional keyword-based search frequently fails when users describe their problems conversationally, creating a barrier between citizens and publicly available legal information.
                </p>
              </div>
              <div>
                <p className={styles.text}>
                  <strong>The Solution:</strong> JustEase introduces a Retrieval-Augmented Generation pipeline that retrieves relevant government documents before generating a response. Instead of allowing the language model to answer from memory, the system first identifies semantically similar documents using sentence embeddings, applies intelligent query optimization techniques, routes the request to the appropriate judicial dataset, and finally generates an answer strictly from the retrieved context. This approach significantly improves factual accuracy while maintaining transparency and scalability.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Technical Architecture</h2>
            <p className={styles.text}>
              The system follows a modular Retrieval-Augmented Generation architecture designed for both retrieval quality and future scalability.
            </p>
            <div className={styles.techGrid}>
              <div className={styles.techItem}>sBERT</div>
              <div className={styles.techItem}>Semantic Vector Search</div>
              <div className={styles.techItem}>Multi-representation indexing</div>
              <div className={styles.techItem}>Multi-Query Retrieval</div>
              <div className={styles.techItem}>Llama-8B-8191 / GPT-4o-mini / Cohere Command R+</div>
              <div className={styles.techItem}>RAG Fusion</div>
              <div className={styles.techItem}>Semantic Routing</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Key Features</h2>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Multi-Representation Indexing:</strong> Documents are cleaned, summarized, embedded, and indexed to improve retrieval quality while reducing search complexity.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Semantic Search:</strong> Instead of relying on keywords, the system retrieves information based on semantic similarity using Sentence-BERT embeddings.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Advanced Query Translation:</strong> User queries are automatically expanded through Multi-Query generation, Step-Back prompting, and RAG Fusion to maximize retrieval accuracy.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Scalable Modular Architecture:</strong> Each pipeline component—including indexing, retrieval, routing, and generation—can evolve independently as newer retrieval techniques emerge.
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Future Iterations</h2>
            <p className={styles.text}>
              The current implementation establishes the foundation for a scalable legal information assistant. Future work includes integrating Advanced RAG techniques such as Adaptive RAG and Corrective RAG, introducing continuous learning from user feedback, expanding support for additional government datasets, and incorporating live judicial information through official APIs where available. The long-term vision is to evolve JustEase into a reusable government AI platform capable of serving multiple public departments while maintaining accuracy, transparency, and trust.
            </p>

            <div className={styles.ctaContainer}>
              <a href="https://sih-2024-liard.vercel.app/" className={styles.btnPrimary}>
                View Live
              </a>
              <a href="https://github.com/vyom-cpp/SIH-2024" className={styles.btnSecondary}>
                View on GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
