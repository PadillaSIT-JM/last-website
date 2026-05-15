import { useState } from "react";

const activities = [
  {
    id: 1, title: "FG Lab 1", phase: "fg", phaseLabel: "First Grading",
    link: "https://padillasit-jm.github.io/UNIT1_LESSON1_A_-Padilla-/?authuser=0",
    reflection: `1. What challenges did you encounter when creating and organizing your sample resume in React, and how did you solve them?
- I rushed the setup and missed key steps, which delayed my progress. I solved this by re-reading the guide carefully and following it step-by-step. I forgot how to link and manage CSS in React. Because of the limited time, I could not fix all the styling bugs, but I am still studying it now.

2. How did deploying your project to GitHub Pages help you understand real-world web development workflows?
- It taught me how code goes from my computer to a live website for anyone to see. I realized that publishing my work online creates a helpful example for other users building their resumes.

3. What did you learn from seeing your resume rendered online, and how could this experience help you improve future React projects?
- Seeing it live showed me that online information must be accurate and clean. This experience taught me to double-check my layout and content before publishing future React projects.`,
  },
  {
    id: 2, title: "FG Lab 2", phase: "fg", phaseLabel: "First Grading",
    link: "https://padillasit-jm.github.io/FG_LAB2_Padilla/",
    reflection: `1. What challenges did you face implementing TypeScript variables in JSX?
- TypeScript blocks unsafe code and unassigned types. I had to explicitly declare types for every variable before using them inside my JSX elements.

2. How did conditional rendering affect your dashboard output?
- It made the dashboard load dynamically based on state. This organized the screen, removed clutter, and made the interface more user-friendly.

3. How did using React Fragments improve your JSX structure?
- Fragments allowed me to group child elements without adding extra <div> tags to the DOM. Using <> and </> kept the final HTML clean and readable.`,
  },
  {
    id: 3, title: "FG Lab 3", phase: "fg", phaseLabel: "First Grading",
    link: "https://padillasit-jm.github.io/-FG_LAB3_PADILLA/",
    reflection: `1. What challenges did you encounter when creating reusable components?
- Designing components for specific UI requirements made them hard to reuse elsewhere. I had to balance unique designs with generic, flexible code structures.

2. How did passing props simplify your component design?
- Props allowed me to pass data dynamically into a single component template. This created smooth data flow and made the code much easier to debug.

3. How did using useState change the behavior of your application?
- It allowed the application to instantly update the screen when data changed. This removed the need to reload the entire web page.

4. How can these component practices improve large-scale React projects?
- These practices keep code clean and organized. Reusing consistent, well-structured components makes large applications scalable, fast, and easy for teams to manage.`,
  },
  {
    id: 4, title: "FG Exam Lab", phase: "exam", phaseLabel: "Exam",
    link: "https://drive.google.com/drive/folders/1geGDIh6l1YsoGL_RxUXRcrSwdHmQOJXg?usp=sharing",
    reflection: `Actually, and honestly, I did not deploy the exam for the reason that there was no time to deploy, and I got no score on it.`,
  },
  {
    id: 5, title: "MG Lab 1", phase: "mg", phaseLabel: "Midterms",
    link: "https://padillasit-jm.github.io/PadillaSIT-JM-MG_LAB4_PADILLA/",
    reflection: `1. What challenges did you encounter when creating reusable components?
- I struggled with importing components into other files correctly. This broke the code structure and stopped me from finishing the entire component on time.

2. How did passing props simplify your component design?
- Props allowed me to pass unique labels and styles into individual components. This made it much easier to identify and customize each element I was working on.

3. How did using useState change the behavior of your application?
- I am still learning this concept, but useState lets the app save user inputs and update the screen instantly without needing to reload the webpage.

4. How can these component practices improve large-scale React projects?
- Breaking the project into smaller, readable blocks makes the whole codebase easy to understand. It allows developers to quickly find, update, and manage input data in massive projects.`,
  },
  {
    id: 6, title: "MG Lab 2", phase: "mg", phaseLabel: "Midterms",
    link: "https://padillasit-jm.github.io/MG_LAB_5PADILLA/?authuser=0",
    reflection: `1. What challenges did you encounter when implementing React Router?
- Client-side routing broke on deployment, causing 404 errors. I fixed this by updating the repository name and configuring package.json correctly.

2. How does client-side routing improve user experience compared to traditional page navigation?
- It stops the browser from doing full-page reloads, making page switches instant. It also preserves user form data and scroll positions when navigating.

3. How did Bootstrap help in designing the user interface faster?
- It eliminates the need to write custom CSS from scratch for every element. Using pre-made utility classes saved hours of development time.

4. How can routing be useful when building large-scale web applications?
- Routing breaks large applications into clean, organized views and supports code-splitting to load pages only when needed.`,
  },
  {
    id: 7, title: "MG Lab 3", phase: "mg", phaseLabel: "Midterms",
    link: "https://padillasit-jm.github.io/MG_LAB3_PADILLA/?authuser=0",
    reflection: `1. How did controlled and uncontrolled forms differ in managing input data?
- Controlled forms track user input values in the React state and handle the full submission process. Uncontrolled forms rely directly on the browser DOM to read values.

2. How did validation improve your controlled form implementation?
- It allowed me to check and validate user input instantly as they typed. This ensured that only correct data could be submitted through the form.

3. What challenges did you encounter when using useRef for the uncontrolled form?
- The biggest challenge was remembering that updating a useRef value does not trigger a visual update on the screen.

4. How could these practices be applied to larger applications with multiple forms?
- Mastering both methods allows developers to build reusable form components. It makes managing data flows across complex, multi-page applications much easier.`,
  },
  {
    id: 8, title: "MG Exam Lab", phase: "exam", phaseLabel: "Exam",
    link: "https://padillasit-jm.github.io/student-portal/?authuser=0",
    reflection: "",
  },
  {
    id: 9, title: "Finals Lab 1", phase: "finals", phaseLabel: "Finals",
    link: "https://padillasit-jm.github.io/FinalsLab1/?authuser=0",
    reflection: `1. What challenges did you encounter when connecting the frontend to the backend?
- I struggled with setting up the correct API URL paths and handling CORS policy blocks between my frontend and backend servers.

2. How did using fetch help in sending data asynchronously?
- It allowed the frontend to send form data to the backend in the background without refreshing the web page.

3. What is the importance of validating user input before storing it in the database?
- It protects the database from malicious attacks and prevents broken or incomplete information from being saved.

4. How does this full-stack workflow apply to real-world web applications?
- It mimics how actual websites securely send, process, and store user accounts and data every day.`,
  },
  {
    id: 10, title: "Finals Lab 2", phase: "finals", phaseLabel: "Finals",
    link: "https://drive.google.com/drive/folders/1VgEupVAPoqdKPRZJ76pgM7P_WtmwcpDb?usp=classroom_web&authuser=0",
    reflection: `1. What challenges did you encounter when integrating EmailJS into React?
- My main challenges were securely configuring environment variables for service IDs and handling asynchronous response errors during form submission.

2. Why is form validation important in real-world applications?
- It ensures data accuracy, improves user experience by catching errors early, and protects the system from malicious code injections.

3. How does component-based design improve development efficiency?
- It allows developers to build reusable UI blocks, which drastically cuts down on repetitive coding and simplifies debugging.

4. What did you learn about API integration in frontend development?
- I learned how to securely send data to third-party services using asynchronous requests and how to handle the resulting success or failure responses.`,
  },
  {
    id: 11, title: "Finals Lab 3", phase: "finals", phaseLabel: "Finals",
    link: "https://cityissue.onrender.com",
    reflection: `Building this final project taught me how to connect a frontend interface with a backend system to create a complete web application.`,
  },
  {
    id: 12, title: "Finals Exam Lab", phase: "exam", phaseLabel: "Exam",
    link: "https://aptechfinal.onrender.com/?authuser=0",
    reflection: "",
  },
];

type Phase = "fg" | "mg" | "finals" | "exam" | "all";

const phaseStyles: Record<string, { bg: string; color: string }> = {
  fg:     { bg: "rgba(99,179,237,0.12)",  color: "#63b3ed" },
  mg:     { bg: "rgba(154,230,180,0.12)", color: "#68d391" },
  finals: { bg: "rgba(232,255,71,0.12)",  color: "#e8ff47" },
  exam:   { bg: "rgba(252,129,74,0.12)",  color: "#fc814a" },
};

function truncateLink(url: string) {
  try {
    const u = new URL(url);
    const path = u.pathname.length > 1 ? u.pathname.substring(0, 20) + "…" : "";
    return u.hostname + path;
  } catch {
    return url.substring(0, 36) + "…";
  }
}

function Card({ activity }: { activity: typeof activities[0] }) {
  const [open, setOpen] = useState(false);
  const hasReflect = activity.reflection.trim().length > 0;
  const ps = phaseStyles[activity.phase];

  return (
    <div style={{
      background: "#1c1c1c",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "0",
      transition: "background 0.2s",
      position: "relative",
      animation: `fadeUp 0.5s ease ${activity.id * 0.05}s both`,
    }}
      onMouseEnter={e => (e.currentTarget.style.background = "#222")}
      onMouseLeave={e => (e.currentTarget.style.background = "#1c1c1c")}
    >
      {/* Number */}
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13, letterSpacing: "0.1em", color: "#444", marginBottom: 20 }}>
        {String(activity.id).padStart(2, "0")} / 12
      </div>

      {/* Phase badge */}
      <span style={{
        display: "inline-block", fontSize: 10, fontWeight: 600,
        letterSpacing: "0.14em", textTransform: "uppercase",
        padding: "3px 10px", borderRadius: 4, marginBottom: 10,
        background: ps.bg, color: ps.color, width: "fit-content",
      }}>
        {activity.phaseLabel}
      </span>

      {/* Title */}
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, letterSpacing: "0.04em", color: "#f0ede8", lineHeight: 1, marginBottom: 20 }}>
        {activity.title}
      </div>

      {/* Link */}
      <a
        href={activity.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 12, fontWeight: 500, color: "#6a6a6a",
          textDecoration: "none", letterSpacing: "0.04em",
          border: "1px solid #2a2a2a", padding: "7px 14px",
          borderRadius: 6, marginBottom: 20, width: "fit-content",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8ff47"; e.currentTarget.style.color = "#e8ff47"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#6a6a6a"; }}
      >
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        {truncateLink(activity.link)}
      </a>

      {/* Reflection */}
      {hasReflect ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Outfit', sans-serif", fontSize: 12,
              fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              color: open ? "#e8ff47" : "#6a6a6a",
              background: "transparent", border: "none", cursor: "pointer",
              padding: 0, marginTop: "auto", transition: "color 0.2s",
            }}
          >
            <span style={{ display: "inline-block", transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            My Reflection
          </button>
          {open && (
            <div style={{
              marginTop: 16, fontSize: 13, fontWeight: 300,
              lineHeight: 1.75, color: "#a0a0a0",
              whiteSpace: "pre-line", borderLeft: "2px solid #e8ff47",
              paddingLeft: 16,
            }}>
              {activity.reflection}
            </div>
          )}
        </>
      ) : (
        <span style={{ marginTop: "auto", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#444", fontStyle: "italic" }} />
      )}
    </div>
  );
}

const filters: { label: string; value: Phase }[] = [
  { label: "All", value: "all" },
  { label: "First Grading", value: "fg" },
  { label: "Midterms", value: "mg" },
  { label: "Finals", value: "finals" },
  { label: "Exams", value: "exam" },
];

export default function Activities() {
  const [activeFilter, setActiveFilter] = useState<Phase>("all");

  const filtered = activities.filter(a => activeFilter === "all" || a.phase === activeFilter);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "#f0ede8", fontFamily: "'Outfit', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px", borderBottom: "1px solid #2a2a2a",
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(13,13,13,0.92)", backdropFilter: "blur(12px)",
      }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.08em" }}>
          Portfolio<span style={{ color: "#e8ff47" }}>.</span>
        </div>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6a6a6a", border: "1px solid #2a2a2a", padding: "5px 14px", borderRadius: 100 }}>
          John Mark U. Padilla
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 64px", borderBottom: "1px solid #2a2a2a", position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8ff47", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 32, height: 1.5, background: "#e8ff47" }} />
          React Development Journey
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px,8vw,96px)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 24 }}>
          My <span style={{ color: "#e8ff47" }}>Lab</span><br />Portfolio
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: "#6a6a6a", maxWidth: 480, lineHeight: 1.7 }}>
          A curated collection of React labs, experiments, and projects built across three grading periods — from first components to full-stack applications.
        </p>
        <div style={{ display: "flex", gap: 48, marginTop: 48 }}>
          {[["12", "Total Labs"], ["3", "Grading Periods"], ["9", "Reflections"]].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, lineHeight: 1 }}>{num}</span>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6a6a6a" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={{ display: "flex", gap: 8, padding: "28px 48px", borderBottom: "1px solid #2a2a2a", flexWrap: "wrap" }}>
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "7px 18px", borderRadius: 100, cursor: "pointer", transition: "all 0.2s",
              background: activeFilter === f.value ? "#e8ff47" : "transparent",
              border: `1px solid ${activeFilter === f.value ? "#e8ff47" : "#2a2a2a"}`,
              color: activeFilter === f.value ? "#0d0d0d" : "#6a6a6a",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 1,
        background: "#2a2a2a",
        borderTop: "1px solid #2a2a2a",
      }}>
        {filtered.map(a => <Card key={a.id} activity={a} />)}
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #2a2a2a", padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 12, color: "#444", letterSpacing: "0.05em" }}>BSIT – IDA – 4 · Academic Year 2025–2026</span>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: "0.08em", color: "#444" }}>
          JM<span style={{ color: "#e8ff47" }}>P</span>
        </div>
      </footer>
    </div>
  );
}