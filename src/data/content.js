export const projects = [
    {
        id: "paper2publish",
        title: "Paper2Publish",
        category: "Design",
        shortDesc: "Graphic Designer & Media Intern at Paper2Publish (July 2025–Present).",
        problem: "Ineffective visual communication and fragmented brand identity slowing down promotional outreach.",
        solution: "Digital media design and brand communication.",
        techStack: ["Figma", "Adobe CC", "Graphic Design"],
        accent: "244, 63, 94", // rose
        gridClass: "md:col-span-2 md:row-span-2",
        bgClass: "bg-rose-500/5 border-rose-500 border-opacity-50 shadow-lg shadow-rose-500/10",
        results: "Streamlined asset delivery enabling the marketing team to boost campaign turnarounds by 40%.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        image_alt: "AI generated abstract gradient representing a warm, vivid color palette for a digital marketing and graphic design agency.",
        codeSnippet: `// Design System Token Generator\nexport const theme = {\n  colors: { brand: '#f43f5e' },\n  typography: { base: 'Inter, sans-serif' }\n};`
    },
    {
        id: "ukesportshub",
        title: "UK Esports Hub",
        category: "Management",
        shortDesc: "PR & Outreach Head for UK Esports Hub (Feb 2026).",
        problem: "Fragmented community and systematic lack of scalable tournament infrastructure resulting in chaotic manual brackets.",
        solution: "Community engagement and public relations.",
        techStack: ["PR", "Public Relations", "Outreach"],
        accent: "168, 85, 247", // purple
        gridClass: "md:col-span-2 md:row-span-2",
        bgClass: "bg-purple-500/5 border-purple-500 border-opacity-50 shadow-lg shadow-purple-500/10",
        results: "Onboarded extensive player communities with 0 downtime during the operational shifts.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        image_alt: "AI generated image depicting a neon-lit, high-tech esports arena and data terminal.",
        codeSnippet: `const executeOutreach = async (region) => {\n  const influencers = await crm.get(region);\n  return emailBlast(influencers, template.PR);\n}`
    },
    {
        id: "core-arsenal",
        title: "Core Arsenal",
        category: "Engineering",
        shortDesc: "Primary technical and creative loadout.",
        problem: "Modern integration requires both logical backend stability and high-end visual physics.",
        solution: "Mastering a hybrid stack that spans direct UI engineering to lower-level software design.",
        techStack: ["React", "Tailwind", "Framer", "TypeScript", "Python", "C++ (In Progress)"],
        accent: "16, 185, 129", // emerald
        gridClass: "md:col-span-2 md:row-span-1",
        bgClass: "bg-emerald-500/5 border-emerald-500 border-opacity-50 shadow-lg shadow-emerald-500/10",
        results: "Actively deploying fluid, cross-platform experiences.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        image_alt: "AI generated image representing a technological glowing matrix of green data processing.",
        codeSnippet: `<motion.div \n  animate={{ scale: 1.05 }} \n  transition={{ type: "spring", stiffness: 300 }}\n/>`
    },
    {
        id: "eatathon",
        title: "Eatathon Hackathon",
        category: "Engineering",
        shortDesc: "A solution for personal and surrounding hygiene safety.",
        problem: "Inefficient routing protocols across highly complex multi-city delivery nodes producing large latency constraints and poor driver allocation.",
        solution: "Developed highly optimized pathfinding algorithms that decreased computational time by 30% and dynamically mapped live telemetry data.",
        techStack: ["C++", "Next.js", "Tailwind"],
        accent: "99, 102, 241", // indigo
        gridClass: "md:col-span-2 md:row-span-1",
        bgClass: "bg-indigo-500/5 border-indigo-500 border-opacity-50 shadow-lg shadow-indigo-500/10",
        results: "Reduced overall node-to-node latency by 320ms and optimized driver idle rate by 40%.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        image_alt: "AI generated abstract grid representing complex pathfinding algorithms in electric blue.",
        codeSnippet: `// Pathfinding Core\nGraph::Node* findOptimal(Node* start, Node* end) {\n  PriorityQueue pq;\n  pq.push({start, 0});\n  while(!pq.empty()) {\n    auto current = pq.pop();\n    if(current == end) return current;\n  }\n}`
    },
    {
        id: "ams-project",
        title: "Admission Management System",
        category: "Engineering",
        shortDesc: "Simplified student registration processes using digital record management.",
        problem: "Legacy record systems causing severe latency and manual data-entry errors during high-load enrollment periods.",
        solution: "Developed an Admission Management System modernizing data storage and administrative operations.",
        techStack: ["Next.js", "PostgreSQL", "React"],
        accent: "245, 158, 11", // amber
        gridClass: "md:col-span-4 md:row-span-1",
        bgClass: "bg-amber-500/5 border-amber-500 border-opacity-50 shadow-lg shadow-amber-500/10",
        results: "Processed large-scale student record loads reducing manual administrative lookup time by nearly half.",
        image: "https://images.unsplash.com/photo-1620064916958-605375619af8?auto=format&fit=crop&w=800&q=80",
        image_alt: "AI generated abstract gradient representing a data visualization for an Admission Management System.",
        codeSnippet: `async function getStudent(id) {\n  const record = await db.admission.findUnique({ where: { id } });\n  return record;\n}`
    }
];

export const categories = ["All", "Engineering", "Management", "Design"];
